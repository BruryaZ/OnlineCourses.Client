import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LessonsService } from '../../services/lessons.service';
import { Lesson } from '../../models/lesson.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-lesson',
  imports: [ CommonModule,
    MatCardModule,],
  templateUrl: './delete-lesson.component.html',
  styleUrl: './delete-lesson.component.css'
})
export class DeleteLessonComponent implements OnInit {
  courseId: number = 0;
  lesson: Lesson | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lessonsService: LessonsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseId = +id;
      this.lessonsService.getLessonById(this.courseId, +id).subscribe((lesson:Lesson) => {
        this.lesson = lesson;
      });
    }
  }

  onDelete(): void {
    if (this.courseId) {
      this.lessonsService.deleteLesson(this.courseId, this.courseId).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}