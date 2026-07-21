// PROJECTS.JS

const projectsListContainer = document.getElementById("projectsList");
let projectsList = JSON.parse(localStorage.getItem("projects")) || [];

// 1. MODIFICAÇÃO: Carrega os timers que já estavam ativos do localStorage
let activeTimers = JSON.parse(localStorage.getItem("activeTimers")) || []; 

console.log("Loaded projects:", projectsList);

// FUNÇÃO QUE ATUALIZA APENAS OS TIMERS QUE ESTÃO ATIVOS
function updateAllTimers() {
    activeTimers.forEach(id => {
        const timerElement = document.querySelector(`.countdown-timer[data-id="${id}"]`);
        const project = projectsList.find(p => p.id === id);
        
        if (!timerElement || !project) return;

        const now = new Date().getTime();
        const distance = project.targetTimeStamp - now;

        if (distance <= 0) {
            timerElement.innerHTML = "🎯 Meta Atingida ou Expirada!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `⏱️ ${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
}

// FUNÇÃO DE RENDERIZAÇÃO
function renderProjects() {
    if (!projectsListContainer) {
        console.error("Error: Element with ID 'projectsList' was not found in the HTML.");
        return;
    }

    projectsListContainer.innerHTML = "";
    
    if (projectsList.length === 0) {
        projectsListContainer.innerHTML = "<p class='no-projects'>Nenhum projeto criado ainda.</p>";
        return;
    }

    projectsList.forEach(project => {
        const projectDate = project.data || project.Date; 
        const rawDate = new Date(projectDate);
        const isoDate = !isNaN(rawDate) ? rawDate.toISOString().split("T")[0] : "";

        const formattedMonthly = Number(project.monthly || 0).toFixed(3);
        const formattedFinal = Number(project.final || 0).toFixed(3);
        const formattedTotalEstimate = Number(project.totalEstimate || 0).toFixed(3);

        // MODIFICAÇÃO: Verifica se este projeto específico já estava ativo para ajustar o botão e o texto inicial
        const isTimerActive = activeTimers.includes(project.id);
        const buttonText = isTimerActive ? `<i class="fa-solid fa-pause"></i> Timer Running` : `<i class="fa-solid fa-stopwatch"></i> Start Timer`;
        const buttonStyle = isTimerActive ? `style="opacity: 0.7;"` : "";
        const initialTimerText = isTimerActive ? "Calculando tempo..." : "Timer pausado. Clique em Start.";

        const projectHTML = `
        <dl class="key-value-rows">
            <div class="key-value-interface">
                <button type="button" class="btn-edit" data-id="${project.id}">
                    <i class="fa-solid fa-pencil"></i> Edit
                </button>
                <button type="button" class="btn-remove" data-id="${project.id}">
                    <i class="fa-solid fa-circle-xmark"></i> Remove
                </button>
                <button type="button" class="btn-start-timer" data-id="${project.id}" ${buttonStyle}>
                    ${buttonText}
                </button>
            </div>
            <div class="key-value-item">
                <dt>NAME:</dt>
                <dd>${project.name}</dd>
            </div>
            <div class="key-value-item">
                <dt>CREATION DATE:</dt>
                <dd><time datetime="${isoDate}">${projectDate}</time></dd>
            </div>
            <div class="key-value-item">
                <dt>MONTHLY EARNINGS:</dt>
                <dd>${project.monthlyCurrency} ${formattedMonthly}</dd>
            </div>
            <div class="key-value-item">
                <dt>FINAL ESTIMATE:</dt>
                <dd>${project.finalCurrency} ${formattedFinal}</dd>
            </div>
            <div class="key-value-item">
                <dt>REMAINING TIME:</dt>
                <dd>${project.remainingTime} Months</dd>
            </div>
            <div class="key-value-item operational-timer-row">
                <dt>TIME COUNTDOWN:</dt>
                <dd class="countdown-timer" data-id="${project.id}">${initialTimerText}</dd>
            </div>
            <div class="key-value-item">
                <dt>TOTAL ESTIMATE:</dt>
                <dd>${project.finalCurrency} ${formattedTotalEstimate}</dd>
            </div>
            <div class="key-value-item">
                <dt>TARGET BALANCE:</dt>
                <dd>${project.targetBalance}</dd>
            </div>
            <div class="key-value-item">
                <dt>STATUS:</dt>
                <dd class="status-active">ACTIVE</dd>
            </div>
        </dl>
        `;
        projectsListContainer.innerHTML += projectHTML;
    });

    // Se já existirem timers rodando vindos do LocalStorage, atualiza eles imediatamente
    updateAllTimers();
}

// GERENCIADOR DE CLIQUES INTERATIVO
if (projectsListContainer) {
    projectsListContainer.addEventListener("click", function (event) {
        
        // --- LÓGICA DO BOTÃO REMOVE ---
        const removeButton = event.target.closest(".btn-remove");
        if (removeButton) {
            const projectId = Number(removeButton.getAttribute("data-id"));
            const confirmDelete = confirm("Tem certeza de que deseja remover este projeto?");
            if (confirmDelete) {
                projectsList = projectsList.filter(project => project.id !== projectId);
                
                // MODIFICAÇÃO: Remove o ID do LocalStorage de timers se o projeto for deletado
                activeTimers = activeTimers.filter(id => id !== projectId); 
                localStorage.setItem("activeTimers", JSON.stringify(activeTimers));

                localStorage.setItem("projects", JSON.stringify(projectsList));
                renderProjects();
            }
            return;
        }

        // --- LÓGICA DO BOTÃO EDIT ---
        const editButton = event.target.closest(".btn-edit");
        if (editButton) {
            const projectId = Number(editButton.getAttribute("data-id"));
            window.location.href = `edit-goal.html?id=${projectId}`;
            return;
        }

        // --- LÓGICA DO BOTÃO START TIMER ---
        const startTimerButton = event.target.closest(".btn-start-timer");
        if (startTimerButton) {
            const projectId = Number(startTimerButton.getAttribute("data-id"));

            if (!activeTimers.includes(projectId)) {
                activeTimers.push(projectId);
                
                // MODIFICAÇÃO: Salva a nova lista de timers ativos no LocalStorage
                localStorage.setItem("activeTimers", JSON.stringify(activeTimers));

                startTimerButton.innerHTML = `<i class="fa-solid fa-pause"></i> Timer Running`;
                startTimerButton.style.opacity = "0.7";
                updateAllTimers();
            }
        }
    });
}

// EXECUÇÃO INICIAL
renderProjects();
setInterval(updateAllTimers, 1000);