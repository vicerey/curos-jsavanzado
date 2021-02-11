export class Todo {


    static fromJson({ id, tarea, creado, completado }) { //funcion para convertir los todos en instancias y poder usar metodos de la clase

        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.creado = new Date();
        this.completado = false;


    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }



}