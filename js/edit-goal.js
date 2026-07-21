// EDIT-GOAL.JS
import { fetchExchangeRates } from './api.js';

const editForm = document.getElementById("editGoalForm");
const projectIdInput = document.getElementById("projectId");
const projectNameInput = document.getElementById("projectName");
const monthlyReserveInput = document.getElementById("monthlyReserve");
const finalTargetInput = document.getElementById("finalTarget");
const projectApplicationInput = document.getElementById("projectApplication");

// 1. CARREGAR OS DADOS DO PROJETO ATUAL NO FORMULÁRIO
function loadProjectData() {
    // Pega o parâmetro "?id=..." da barra de navegação
    const urlParams = new URLSearchParams(window.location.search);
    const idToEdit = Number(urlParams.get("id"));

    if (!idToEdit) {
        alert("Projeto não especificado.");
        window.location.href = "projects.html";
        return;
    }

    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const project = projects.find(p => p.id === idToEdit);

    if (!project) {
        alert("Projeto não encontrado.");
        window.location.href = "projects.html";
        return;
    }

    // Preenche os campos do formulário
    projectIdInput.value = project.id;
    projectNameInput.value = project.name;
    monthlyReserveInput.value = project.monthly;
    finalTargetInput.value = project.final;
    
    // Calcula o "tempo de aplicação" aproximado baseado nos dados salvos para repovoar o input
    // (Caso seu objeto original não salve essa variável pura, podemos estimá-la)
    const monthlyInFinal = project.totalEstimate / (project.remainingTime || 1);
    const estimatedApplication = Math.round(project.totalEstimate / (project.monthly || 1)) || 1;
    projectApplicationInput.value = estimatedApplication;

    // Seleciona as opções corretas dos inputs de rádio
    document.querySelector(`input[name="monthly-currency-choice"][value="${project.monthlyCurrency}"]`).checked = true;
    document.querySelector(`input[name="final-currency-choice"][value="${project.finalCurrency}"]`).checked = true;
}

// FUNÇÃO AUXILIAR DE CONVERSÃO
function convertCurrency(amount, fromCurrency, toCurrency, rates) {
    if (fromCurrency === toCurrency) return amount;

    const conversionKey = `${fromCurrency.toLowerCase()}-${toCurrency.toLowerCase()}`;

    switch (conversionKey) {
        case 'usd-eur': return amount * rates.usdEur;
        case 'eur-usd': return amount * rates.eurUsd;
        case 'brl-usd': return amount * rates.brlUsd;
        case 'usd-brl': return amount * rates.usdBrl;
        case 'eur-brl':
            return (amount * rates.eurUsd) * rates.usdBrl;
        case 'brl-eur':
            return (amount * rates.brlUsd) * rates.usdEur;
        default:
            return amount;
    }
}

// 2. SALVAR AS ALTERAÇÕES DO PROJETO
editForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const rates = await fetchExchangeRates();

    const idValue = Number(projectIdInput.value);
    const nameValue = projectNameInput.value;
    const monthlyValue = parseFloat(monthlyReserveInput.value) || 0;
    const finalValue = parseFloat(finalTargetInput.value) || 0;
    const applicationValue = parseInt(projectApplicationInput.value) || 0;

    const monthlyCurrency = document.querySelector('[name="monthly-currency-choice"]:checked').value;
    const finalCurrency = document.querySelector('[name="final-currency-choice"]:checked').value;

    // Recalcula todas as métricas financeiras
    const monthlyReserveInFinalCurrency = convertCurrency(monthlyValue, monthlyCurrency, finalCurrency, rates);
    const totalEstimate = monthlyReserveInFinalCurrency * applicationValue;
    const differenceBalance = finalValue - totalEstimate;

    let targetBalanceText = "";
    if (differenceBalance > 0) {
        targetBalanceText = `Short: ${finalCurrency} ${Math.abs(differenceBalance).toFixed(3)}`;
    } else if (differenceBalance < 0) {
        targetBalanceText = `Surplus: ${finalCurrency} ${Math.abs(differenceBalance).toFixed(3)}`;
    } else {
        targetBalanceText = `Target Hit! ${finalCurrency} 0.000`;
    }

    const timeToHitGoal = monthlyReserveInFinalCurrency > 0 ? Math.ceil(finalValue / monthlyReserveInFinalCurrency) : 0;
    const startDate = new Date();
    const targetDate = new Date();
    targetDate.setMonth(startDate.getMonth() + timeToHitGoal);

    const timeDifference = targetDate.getTime() - startDate.getTime();
    const totalDaysTarget = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const timeRemainingCalculated = ((targetDate.getFullYear() - startDate.getFullYear()) * 12) + (targetDate.getMonth() - startDate.getMonth());

    // Atualiza o projeto correspondente na lista
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    
    projects = projects.map(project => {
        if (project.id === idValue) {
            return {
                ...project, // Mantém a data de criação original intacta
                name: nameValue,
                monthly: monthlyValue,
                monthlyCurrency: monthlyCurrency,
                final: finalValue,
                finalCurrency: finalCurrency,
                totalDays: totalDaysTarget,
                remainingTime: timeRemainingCalculated,
                totalEstimate: totalEstimate,
                targetBalance: targetBalanceText,
                targetTimeStamp: targetDate.getTime(),
            };
        }
        return project;
    });

    localStorage.setItem("projects", JSON.stringify(projects));
    window.location.href = "projects.html";
});

// Inicialização
loadProjectData();