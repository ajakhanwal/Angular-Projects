import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {TaskService} from "../../task.service";
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
    });
  }

  ngOnInit(): void {
  }

  submitTaskForm(){
    let newRecord={title: this.taskForm.value.title, 
      note: this.taskForm.value.note
    };
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


