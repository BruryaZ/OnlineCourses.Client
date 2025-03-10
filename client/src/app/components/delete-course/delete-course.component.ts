import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-delete-course',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {
  courseId: number = 0;
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseId = +id;
      this.coursesService.getCourseById(this.courseId).subscribe((course: Course) => {
        this.course = course;
      });
    }
  }

  onDelete(): void {
    if (this.courseId) {
      this.coursesService.deleteCourse(this.courseId).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}