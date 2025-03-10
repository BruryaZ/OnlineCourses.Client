import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  courseForm: FormGroup;
  userId :number = 0

  constructor(private fb: FormBuilder, private courseService: CoursesService) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (localStorage.getItem('userId') !== null) {
      const userIdStr = localStorage.getItem('userId');
      this.userId = userIdStr !== null ? parseInt(userIdStr, 10) : 0;
    }
    
    if (this.courseForm.valid) {
      const newCourse: Course = { 
        id: 0, 
        ...this.courseForm.value, 
        teacherId: this.userId != null ? this.userId : 0 
      };
  
      // נניח ש-addCourse מחזיר Observable
      this.courseService.addCourse(newCourse).subscribe({
        next: (res) => {
          console.log('Course added:', res);
          // טיפול בהצלחה
        },
        error: (error) => {
          console.log('Error adding course:', error);
          // טיפול בשגיאה
        }
      });
    }
  }
}