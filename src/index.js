import './styles.css';
import { Todo, TodoList } from './clases';
import { crearTodoHtml } from './js/componentes';


const tarea = new Todo("aprender JavaScript");

const todos = new TodoList();

todos.nuevoTodo(tarea);

crearTodoHtml(tarea);

console.log(todos);