//Referencias
const divTodosList = document.querySelector(".todo-list");


export const crearTodoHtml = (todo) => {

    const html = `
    <li class="${(todo.completado)? 'completed': ''}d" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado)? 'checked': ''}>
            <label>${todo.tarea}t</label>
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