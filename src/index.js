import './styles.css';
import { Todo, TodoList } from './clases';
import { crearTodoHtml } from './js/componentes';


const tarea = new Todo('aprender js');

export const todoList = new TodoList();

//todoList.nuevoTodo(tarea);

crearTodoHtml(tarea);



//console.log(todoList);