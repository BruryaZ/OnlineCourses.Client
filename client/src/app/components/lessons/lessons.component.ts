import { Component } from '@angular/core';
import { Lesson } from '../../models/lesson.model';
import { LessonsService } from '../../services/lessons.service';

@Component({
  selector: 'app-lessons',
  imports: [],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent {
  constructor(private lessonService: LessonsService) { }
  list: Lesson[] = [];
  courseId = 1 // change this to the course id you want to get lessons for

  ngOnInit(): void {
    this.lessonService.getLessons(this.courseId).subscribe((lesson) => {
      this.list = lesson;
    });
  }
}
