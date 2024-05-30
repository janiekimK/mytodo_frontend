import { Folder } from './folder';
import { Employee } from './employee';
import { Tag } from './tag';

export class Task {
  public id!: number;
  public title!: string;
  public description!: string;
  public dueDate!: Date;
  public priority!: number;
  public folder!: Folder;
  public employee!: Employee;
  public tags!: Tag[];
}
