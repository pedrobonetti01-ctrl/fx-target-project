// PROJECTS.JS

const projectsListContainer = document.getElementById("projectsList");
// Usamos "let" em vez de "const" porque vamos precisar atualizar esse array ao remover itens
let projectsList = JSON.parse(localStorage.getItem("projects")) || [];

console.log("Loaded projects:", projectsList);

// 1. FUNÇÃO DE RENDERIZAÇÃO
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

        // Formatando com 3 casas decimais
        const formattedMonthly = Number(project.monthly || 0).toFixed(3);
        const formattedFinal = Number(project.final || 0).toFixed(3);
        const formattedTotalEstimate = Number(project.totalEstimate || 0).toFixed(3);

        const projectHTML = `
        <dl class="key-value-rows">
            <div class="key-value-interface">
                <button type="button" class="btn-edit" data-id="${project.id}">
                    <i class="fa-solid fa-pencil"></i> Edit
                </button>
                <button type="button" class="btn-remove" data-id="${project.id}">
                    <i class="fa-solid fa-circle-xmark"></i> Remove
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
}

// 2. SISTEMA DE REMOÇÃO (Event Delegation)
if (projectsListContainer) {
    projectsListContainer.addEventListener("click", function (event) {
        // Encontra o botão "Remove" mais próximo de onde foi clicado (útil caso clique no ícone <i> dentro do botão)
        const removeButton = event.target.closest(".btn-remove");

        if (removeButton) {
            // Pega o ID do projeto que guardamos no atributo "data-id"
            const projectId = Number(removeButton.getAttribute("data-id"));

            // Pergunta de segurança para o usuário não deletar sem querer
            const confirmDelete = confirm("Tem certeza de que deseja remover este projeto?");
            
            if (confirmDelete) {
                // Filtra o array removendo o projeto com o ID correspondente
                projectsList = projectsList.filter(project => project.id !== projectId);

                // Atualiza o LocalStorage com o novo array filtrado
                localStorage.setItem("projects", JSON.stringify(projectsList));

                // Renderiza novamente a tela atualizada
                renderProjects();
            }
        }
    });
}

// 3. EXECUÇÃO DA FUNÇÃO
renderProjects();