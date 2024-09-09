import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../service/task.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks:any[]=[];
  title:string="My To-Do-List App";
  selectedType:string="";
  tempTasks:any[]=[];
  description:string="You can add, edit and/or delete your tasks using this app";
  constructor(private ts:TaskService, private router:Router) { }

  ngOnInit(): void { 
    this.refreshTaskList();
    this.ts.getTaskList().subscribe( response=>{
      this.tasks = response.init_tasks;
    }, error => {console.error('Error fetching data', error);})

  }

  deletetask(index:any){
    this.ts.deleteData(index).subscribe( response=>{
      console.log(response);
    }, error => {console.error('Error fetching data', error);})
    this.refreshTaskList();
  }

  refreshTaskList(): void{
    this.ts.getTaskList().subscribe( response=>{
      this.tasks = response.init_tasks;
    }, error => {console.error('Error fetching data', error);})
  }

  editTask(id:number, title:string, note:string){
    console.log('on click edit:')
    console.log(id);
    let data={
      id:id,
      title:title,
      note:note
    }
    this.router.navigate(['/tasks/edit', id]);
  }

  viewTask(id:number, title:string, note:string){
    let data={
      id:id,
      title:title,
      note:note
    }
    this.router.navigate(['tasks/view',id]);
  }

  specifyType(type:string){
    this.selectedType=type;
  }

  get filterTask(){
    return (this.selectedType? this.tasks.filter(item => item.type === this.selectedType) : this.tasks);
  }

}
