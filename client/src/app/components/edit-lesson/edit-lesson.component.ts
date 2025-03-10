import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LessonsService } from '../../services/lessons.service';
import { Lesson } from '../../models/lesson.model';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-edit-lesson',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {
  lesson: Lesson = {
    id: 0,
    title: '',
    content: '',
    courseId: 0};

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonsService,
    private router: Router
  ) { }

  ngOnInit() {
    const lessonId = +this.route.snapshot.paramMap.get('id')!;
    const courseId = 1; // Replace with actual courseId
    this.lessonService.getLessonById(courseId, lessonId).subscribe(lesson => {
      this.lesson = lesson;
    });
  }

  updateLesson() {
    const courseId = 1; // Replace with actual courseId
    const lessonIdParam = this.route.snapshot.paramMap.get('id');
    const lessonId = lessonIdParam ? +lessonIdParam : 0;
    this.lessonService.updateLesson(courseId, lessonId, this.lesson).subscribe(() => {
      this.router.navigate(['/courses']); // חזרה לרשימת הקורסים
    });
  }
}