//Referencias
import { Todo } from './../clases/todo.class';
import { todoList } from '../index';
const divTodosList = document.querySelector(".todo-list"); //ul
const imputText = document.querySelector(".new-todo");
const btnBorrarCompletados = document.querySelector(".clear-completed");
const filtersElemento = document.querySelector(".filters");
const AnclaFiltros = document.querySelectorAll('.filtro');


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

divTodosList.addEventListener('click', (e) => { //ul global

    const nombreElemento = e.target.localName; //input, label, button
    const todoElemento = e.target.parentElement.parentElement; //li
    const todoId = todoElemento.getAttribute('data-id'); //Obtiene el dato del atributo

    if (nombreElemento.includes('input')) { //Detectar click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed'); //quita o agrega clase completado del li
    } else if (nombreElemento.includes('button')) { //Detectar click en button eliminar
        todoList.eliminarTodo(todoId); //borrar elemento del array
        divTodosList.removeChild(todoElemento); //remueve hijo li
    }

    //console.log(todoElemento);
});

btnBorrarCompletados.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for (let i = divTodosList.children.length - 1; i >= 0; i--) {

        const elemento = divTodosList.children[i]; //li

        if (elemento.classList.contains('completed')) {
            divTodosList.removeChild(elemento);
        };
    }

});

filtersElemento.addEventListener('click', (e) => {

    const filtro = e.target.text; //devuelve 'compelatos', 'pendientes', 'Todos'
    const anclaActual = e.target;
    if (!filtro) { return; }

    AnclaFiltros.forEach(elem => elem.classList.remove('selected'));
    anclaActual.classList.add('selected');

    for (const elemento of divTodosList.children) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;

        }


    }





});