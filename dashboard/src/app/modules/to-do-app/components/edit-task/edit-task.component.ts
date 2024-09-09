import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../service/task.service";
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskForm: FormGroup;
  constructor(private ts:TaskService, private fb: FormBuilder, private router:Router, private currentRoute:ActivatedRoute) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      note: ['', [Validators.required]],    
    });
   }
    task:any={};
    taskId:any=0;

  ngOnInit(): void {
    this.taskId = parseInt(this.currentRoute.snapshot.paramMap.get('id')!);
    console.log(this.taskId);
    this.ts.getTaskList().subscribe( response=>{
      this.task=response.init_tasks.find((task: any) => task.id === this.taskId);
      this.taskForm.controls['title'].setValue(this.task.title);
      this.taskForm.controls['note'].setValue(this.task.note);
    }, error => {console.error('Error fetching data', error);}
    )
  }

  editTask(){
    console.log("Clicked Update")
    let newRecord={
      title: this.taskForm.value.title, 
      note: this.taskForm.value.note
    };
    console.log('Updated Task');
    console.log(newRecord);
    this.ts.editData(this.taskId,newRecord).subscribe( response=>{
      console.log(response);
    }, error => {console.error('Error fetching data', error);}
    )
    this.router.navigate(['/tasks']);
  }

}
