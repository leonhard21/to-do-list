const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Criar tarefa
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  createTask(taskText);
  taskInput.value = "";
});

// Função para criar tarefa
function createTask(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Botão Editar
  const editBtn = document.createElement("button");
  editBtn.textContent = "Editar";
  editBtn.classList.add("edit");
  editBtn.addEventListener("click", () => {
    const newText = prompt("Editar tarefa:", span.textContent);
    if (newText) span.textContent = newText;
  });

  // Botão Excluir
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Excluir";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}
