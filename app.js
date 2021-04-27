const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    addTodo();
})

function addTodo(todo){
    var todoText = input.value;

    if(todoText){
        const todoEl = document.createElement('li');
        if(todo && todo.completed){
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText;

        todosUL.appendChild(todoEl);

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        })

        todoEl.addEventListener('contextmenu', (e) =>{
            e.preventDefault();

            todoEl.remove();
        })

        input.value='';
    }

    

    // console.log(todoText);
}