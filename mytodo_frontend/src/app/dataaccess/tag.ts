import { Task } from 'zone.js/lib/zone-impl';

export class Tag {
  public id!: number;
  public name!: string;
  public description!: string;
  public tasks!: Task[];
}
