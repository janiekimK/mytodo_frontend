import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Employee } from './dataaccess/employee';
import { Task } from '../dataaccess/task';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      id: [{ value: null, disabled: true }],
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      assignedTasks: this.fb.array([]),
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employee: Employee = this.employeeForm.getRawValue();
      console.log(employee);
    }
  }

  addTask(task: Task): void {
    this.assignedTasks.push(
      this.fb.group({
        id: [task.id],
        title: [task.title, Validators.required],
      })
    );
  }

  removeTask(index: number): void {
    this.assignedTasks.removeAt(index);
  }

  get assignedTasks() {
    return this.employeeForm.get('assignedTasks') as FormArray;
  }
}
