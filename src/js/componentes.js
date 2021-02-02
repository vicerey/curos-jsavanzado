//Referencias
import { Todo } from './../clases/todo.class';
import { todoList } from '../index';
const divTodosList = document.querySelector(".todo-list");
const imputText = document.querySelector(".new-todo");



export const crearTodoHtml = (todo) => {

    const html = `
    <li class="${(todo.completado)? 'completed': ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado)? 'checked': ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `
    const div = document.createElement('div');

    div.innerHTML = html;

    divTodosList.append(div.firstElementChild);

    return div.firstElementChild;

}

//Eventos

imputText.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && imputText.value.length > 0) {
        const nuevoTodo = new Todo(imputText.value);
        crearTodoHtml(nuevoTodo);
        imputText.value = '';

        todoList.nuevoTodo(nuevoTodo);

        //console.log(todoList);
    }
});

divTodosList.addEventListener('click', (e) => {

    const nombreElemento = e.target.localName; //input, label, button
    const todoElemento = e.target.parentElement.parentElement; //li
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) { //click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) { //borrar elemento
        todoList.eliminarTodo(todoId);
        divTodosList.removeChild(todoElemento);
    }

    console.log(todoElemento);
})