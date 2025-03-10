import { Lesson } from './lesson.model';

export class FullCourse {
  constructor(
    public title: string,
    public description: string,
    public teacherId: number,
    public lessons: Lesson[],
    public id: number
  ) {}
}