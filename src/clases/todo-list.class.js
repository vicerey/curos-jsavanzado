import { todoList } from './../index';
import { Todo } from './todo.class';

export class TodoList {

    constructor() {

        //this.todos = [];
        this.cargarLocalStorage()
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todo = this.todos.filter(todo => { todo.id != id })
            //devuelve nuevo array con todos los todos menos el todo encontrado en el filtro
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {

        for (const todo of this.todos) {

            //console.log(id, todo.id);

            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
            }
        }

    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => {!todo.completado }) //Regresa todos los todos excepto los completados
        this.guardarLocalStorage();
        console.log(this.todos);
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todo')) ?
            JSON.parse(localStorage.getItem('todo')) :
            this.todos = [];
        //this.todos = this.todos.map(obj => Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson); //Forma corta

    }


}