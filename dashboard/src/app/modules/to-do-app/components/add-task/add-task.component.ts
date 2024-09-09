import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {TaskService} from "../../service/task.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskForm: FormGroup;
  constructor(private fb: FormBuilder, private ts:TaskService, private router: Router) { 
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      note: ['', [Validators.required]],  
      type:  ['', [Validators.required]],
      time:  ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submitTaskForm(){
    let newRecord={title: this.taskForm.value.title, 
      note: this.taskForm.value.note,
      type: this.taskForm.value.type,
      time: this.taskForm.value.time
    };
    console.log("adding a new record with time and type");
    console.log(newRecord);
    this.ts.addData(newRecord).subscribe(
      response => {
        console.log('adding data to json');
        console.log(response);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
    this.router.navigate(['/tasks']);//need to change the position to after success
  }

}


