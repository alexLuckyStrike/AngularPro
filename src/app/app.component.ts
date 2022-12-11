import { Component } from '@angular/core';

export interface Post {
  title:string
  text:string
  id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
posts:Post[]=[
  {title:'Хочу учиться!!',text:'Я Гриша', id:1},
  {title:'Пушка',text:'Сутулая свинья',id:2}
]

updatePosts(post:Post){
  this.posts.unshift(post)
  console.log('Post:',post)
}

}
////
// Тестовые манипуляции ...
// Отображение компонентов post1 - post4
// export class AppComponent {
//   number = 42;
//   array = [1,2,3];
//   obj = {a:1,b:2,c:3}
//   reactLogo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYzBd9UHJhiHcmHn9e9IwWG8_NGdUyp8uPg&usqp=CAU'
//   angularLogo='https://angular.io/assets/images/logos/angular/angular.png'
//   img=''
//   inputValue = '';
//   //
//   title = 'Initial';
//   state='state';
//   // переключение классов
//   backgroundToggle = false;
//   // отображение по условию
//   toggle:any = true;
//   // циклы с ngFor
//   arr = [1,1,2,3,5,8,13]  
//   // сложная интерполяция
//   objs = [
//     {title: 'Post 1', author: 'Vladilen', comments: [
//         {name: 'Max', text: 'lorem 1'},
//         {name: 'Max', text: 'lorem 2'},
//         {name: 'Max', text: 'lorem 3'},
//       ]},
//     {title: 'Post 2', author: 'Vladilen 2', comments: [
//         {name: 'Max 2', text: 'lorem 1'},
//         {name: 'Max 2', text: 'lorem 2'},
//         {name: 'Max 2', text: 'lorem 3'},
//       ]}
//   ]
//   // pipes
//   now:Date = new Date()   

//   constructor() {  
//   //   this.img = this.reactLogo;
//   // setTimeout( ()=> {
//   //  this.img = this.angularLogo
//   //  },5000)
//   }

// onInput(event:KeyboardEvent){
//    this.inputValue = (<HTMLInputElement>event.target).value
//   // this.inputValue = event.target.value
// }

//  ofInput(event:any){
//   this.title = event.target.value
//  }

// onClick(){
//   console.log("click!")
// }

// onBlur(str:string){
//   console.log('onblur:',str)
// }

// }
