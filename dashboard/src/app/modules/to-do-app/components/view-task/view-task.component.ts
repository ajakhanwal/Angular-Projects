import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../service/task.service";
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private router:Router, private ts:TaskService, private currentRoute:ActivatedRoute) { }

  task:any={};
  taskId:any=0;
  ngOnInit(): void {
    this.taskId = parseInt(this.currentRoute.snapshot.paramMap.get('id')!);
    console.log(this.taskId);
    this.ts.getTaskList().subscribe( response=>{
      this.task=response.init_tasks.find((task: any) => task.id === this.taskId);
      console.log(this.task.title);
    }, error => {console.error('Error fetching data', error);}
    )
  }

  delete(){
    this.ts.deleteData(this.taskId).subscribe( response=>{
      console.log(response);
    }, error => {console.error('Error fetching data', error);})
    this.router.navigate(['tasks/']);
  }



}
