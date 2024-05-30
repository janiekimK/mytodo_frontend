import { Task } from 'zone.js/lib/zone-impl';

export class Employee {
  public id!: number;
  public name!: string;
  public firstName!: string;
  public assignedTasks: Task[] = [];
}
