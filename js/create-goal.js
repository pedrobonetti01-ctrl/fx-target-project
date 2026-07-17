// create-goal.js

import { fetchExchangeRates } from './api.js';

const goalForm = document.getElementById("goalForm");
const projectNameInput = document.getElementById("projectName");
const monthlyReserveInput = document.getElementById("monthlyReserve");
const finalTargetInput = document.getElementById("finalTarget");
const projectApplicationInput = document.getElementById("projectApplication");

// FUNÇÃO AUXILIAR DE CONVERSÃO
function convertCurrency(amount, fromCurrency, toCurrency, rates) {
    if (fromCurrency === toCurrency) return amount;

    const conversionKey = `${fromCurrency.toLowerCase()}-${toCurrency.toLowerCase()}`;

    switch (conversionKey) {
        // Conversões Diretas
        case 'usd-eur':
            return amount * rates.usdEur;
        case 'eur-usd':
            return amount * rates.eurUsd;
        case 'brl-usd':
            return amount * rates.brlUsd;
        case 'usd-brl':
            return amount * rates.usdBrl;

        // Conversões Indiretas (usando USD como ponte)
        case 'eur-brl':
            // EUR -> USD -> BRL
            const eurToUsdAmount = amount * rates.eurUsd;
            return eurToUsdAmount * rates.usdBrl;
        case 'brl-eur':
            // BRL -> USD -> EUR
            const brlToUsdAmount = amount * rates.brlUsd;
            return brlToUsdAmount * rates.usdEur;

        default:
            console.warn(`Conversion from ${fromCurrency} to ${toCurrency} not supported. Using 1:1 fallback.`);
            return amount;
    }
}

// EVENTO DE SUBMIT UNIFICADO
goalForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    /* 1. BUSCA AS COTAÇÕES EM TEMPO REAL */
    const rates = await fetchExchangeRates();
    console.log("Exchange rates loaded successfully:", rates);

    /* 2. CAPTURA DOS INPUTS */
    const nameValue = projectNameInput.value;
    const monthlyValue = monthlyReserveInput.value;
    const finalValue = finalTargetInput.value;
    const applicationValue = projectApplicationInput.value;

    const monthlyCurrency = document.querySelector('[name="monthly-currency-choice"]:checked').value;
    const finalCurrency = document.querySelector('[name="final-currency-choice"]:checked').value;

    /* 3. CONVERSÃO E CÁLCULO MONETÁRIO */
    const monthlyReserveRaw = parseFloat(monthlyValue) || 0;
    const finalTarget = parseFloat(finalValue) || 0;
    const projectApplication = parseInt(applicationValue) || 0;

    // Converte o aporte mensal para a mesma moeda da Meta Final antes de calcular o total estimado!
    const monthlyReserveInFinalCurrency = convertCurrency(monthlyReserveRaw, monthlyCurrency, finalCurrency, rates);

    const totalEstimate = monthlyReserveInFinalCurrency * projectApplication;
    const differenceBalance = finalTarget - totalEstimate;

    let targetBalanceText = "";

    if (differenceBalance > 0) {
        targetBalanceText = `Short: ${finalCurrency} ${Math.abs(differenceBalance).toFixed(3)}`;
    } else if (differenceBalance < 0) {
        targetBalanceText = `Surplus: ${finalCurrency} ${Math.abs(differenceBalance).toFixed(3)}`;
    } else {
        targetBalanceText = `Target Hit! ${finalCurrency} 0.000`;
    }

    /* 4. CÁLCULO DE TEMPO */
    // O tempo de meta deve ser baseado no valor que ele realmente consegue guardar na moeda final
    const timeToHitGoal = monthlyReserveInFinalCurrency > 0 ? Math.ceil(finalTarget / monthlyReserveInFinalCurrency) : 0;

    const startDate = new Date();
    const targetDate = new Date();
    targetDate.setMonth(startDate.getMonth() + timeToHitGoal);

    const timeDifference = targetDate.getTime() - startDate.getTime();
    const totalDaysTarget = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    const timeRemainingCalculated =
        ((targetDate.getFullYear() - startDate.getFullYear()) * 12) +
        (targetDate.getMonth() - startDate.getMonth());

    /* 5. CRIAÇÃO DO OBJETO */
    const newProject = {
        id: Date.now(),
        name: nameValue,
        monthly: monthlyReserveRaw, // Mantemos o valor original digitado pelo usuário
        monthlyCurrency: monthlyCurrency,
        final: finalTarget,
        finalCurrency: finalCurrency,
        totalDays: totalDaysTarget,
        remainingTime: timeRemainingCalculated,
        totalEstimate: totalEstimate, // Já salvo convertido na moeda final!
        targetBalance: targetBalanceText,
        targetTimeStamp: targetDate.getTime(),
        data: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: 'ACTIVE'
    };

    console.log("New Project Created:", newProject);

    /* 6. SALVANDO NO LOCALSTORAGE */
    const currentProjects = JSON.parse(localStorage.getItem("projects")) || [];
    currentProjects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(currentProjects));
    
    // Redireciona
    window.location.href = "projects.html";
});