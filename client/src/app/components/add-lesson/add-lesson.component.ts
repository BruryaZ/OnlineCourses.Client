import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../../services/lessons.service';
import { Lesson } from '../../models/lesson.model';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-add-lesson',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {
  courseForm: FormGroup;
  courseId: number = 0;

  constructor(
    private fb: FormBuilder,
    private lessonService: LessonsService,
    private route: ActivatedRoute
  ) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('courseId');
      if (id) {
        this.courseId = +id;
      }
    });
  }

  async onSubmit() {
    if (this.courseForm.valid) {
      const newLesson: Lesson = {
        id: 0,
        ...this.courseForm.value,
        courseId: this.courseId
      };

      this.lessonService.addLesson(this.courseId, newLesson).subscribe({
        next: (res) => {
          console.log('Lesson added:', res);
          // טיפול בהצלחה
        },
        error: (error) => {
          console.log('Error adding lesson:', error);
          // טיפול בשגיאה
        }
      });
    }
  }
}