import { Component, OnInit } from '@angular/core';
import { compileNgModule } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  title = 'lista rzeczy do zrobienia';
  newTodoTitle:string = '';

// 2. deklarujemy wartość do newTodoTitle, piszemy że będą to stringi a wartość 
//    jest pusta bo tam się będą zapisywać nasze zadania

// 7. deklarujemy listę zadań onazwie todos, która jest tablicą (array) i jest typu Todo (6) (powinna być pusta, ta ma dwa elementy by móc je widzieć)
// 8. rzeby móc to to teraz wyświetlić przechodzimy do html
  todos:Array<Todo> = [
    {
      title: 'zakupy',
      complete:true
    },
    {
      title: 'kino',
      complete:false
    }
  ];

// 5. definiujemy funkcję addTodo() na początku tylko console.log(newTodoTitle); 
//  jeżeli działą tworzymy tablicę

// 11. zmieniamy funkcję by działała poprawnie
//  na początku zapis sprawdzajacy czy coś zostało zapisane, jeżeli nic nie zostało zrobone 
//  tomy też nic nie robimy, jeżeli coś zostało zapisane tworzymy nowe zadanie newTodo
//  typu Todo
//  this. odnosi się do elementu za nim, czyli his.newTodoTitle odnosi się do imputu ale już this.todos do listy
//  mówimy że ma pobrać tytuł z imputu i przypisać wartość false



  addTodo() {

    if(!this.newTodoTitle){
      return;
    }
    const newTodo:Todo={
      title:this.newTodoTitle,
      complete:false
    };

// 12. wpychamy nowe zadanie newTodo do listy todos oraz czyścimy imput

    this.todos.push(newTodo);

    this.newTodoTitle = '';
  }

// 13. tworzymy funkcję, która będzie usówać zadania, trzeba przekazać indeks elementu do usunięca
//  this.todos.splice(index, 1); z tablicy todos usówamy jeden element o danym indexie 
//  trzeba zmodyfikować szblon by móc tego użyć, przechodzimy do html
  delateTodo(index){
    this.todos.splice(index, 1);
  }
}

// 6. tworzymy tablicę do przechowywania elementów (boolen przyjmuje wartoś True lub False)

interface Todo{
  title:string;
  complete:boolean;
}
