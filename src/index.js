import './styles.css';
import { Todo, TodoList } from './clases';
import { crearTodoHtml } from './js/componentes';


//const tarea = new Todo('aprender js');

export const todoList = new TodoList();

//todoList.nuevoTodo(tarea);

//crearTodoHtml(tarea);

//todoList.todos.forEach(todo => crearTodoHtml(todo));

todoList.todos.forEach(crearTodoHtml); //forma corta cuando hay un solo parametro o argumento, la funcion se escribe sin los ()