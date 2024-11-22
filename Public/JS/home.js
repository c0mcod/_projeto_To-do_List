const addTask = document.querySelector('.btn-add-task');
const taskInput = document.querySelector('.task-input');
const containerTasks = document.querySelector('.box-tasks');

addTask.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task !== '') { // Verifica se o input não está vazio
        // Cria um elemento para a tarefa
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('container-style');

        taskContainer.innerHTML = `
            <div class="form-check d-flex justify-content-between align-items-center">
                <!-- Checkbox no começo -->
                <div class="d-flex align-items-center">
                    <input class="form-check-input" type="checkbox" value="" id="task-${Date.now()}">
                    <label class="form-check-label ms-2" for="task-${Date.now()}"> ${task}</label>
                </div>
                <button class="trash-btn">
                    <i class="bi bi-trash fs-4"></i>
                </button>
            </div>
        `;

        // Adiciona o evento de remoção ao botão lixeira desta tarefa
        const trashButton = taskContainer.querySelector('.trash-btn');
        trashButton.addEventListener('click', () => {
            taskContainer.remove(); // Remove o container da tarefa
        });

        // Adiciona a tarefa ao container geral
        containerTasks.appendChild(taskContainer);

        // Limpa o campo de input
        taskInput.value = '';
    }
});
