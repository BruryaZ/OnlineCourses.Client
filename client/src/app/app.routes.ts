import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { HomeComponent } from './components/home/home.component';
import { EditLessonComponent } from './components/edit-lesson/edit-lesson.component';
import { DeleteLessonComponent } from './components/delete-lesson/delete-lesson.component';
import { AddLessonComponent } from './components/add-lesson/add-lesson.component';

export const routes: Routes = [
    { path: 'courses/edit/:id', component: EditCourseComponent, data: { prerender: true, getPrerenderParams: getPrerenderParams('courses/edit/:id') } },//
    { path: 'lessons/:courseId/delete/:id', component: DeleteLessonComponent, data: { prerender: true, getPrerenderParams: getPrerenderParams('lessons/:courseId/delete/:id') } },
    { path: 'lessons/:courseId/edit/:id', component: EditLessonComponent, data: { prerender: true, getPrerenderParams: getPrerenderParams('lessons/:courseId/edit/:id') } },
    { path: 'courses/delete/:id', component: DeleteCourseComponent, data: { prerender: true, getPrerenderParams: getPrerenderParams('courses/delete/:id') } },//
    { path: 'lessons/:courseId/add', component: AddLessonComponent, data: { prerender: true, getPrerenderParams: getPrerenderParams('lessons/:courseId/add') } },
    { path: 'dashboard', component: DashboardComponent },
    { path: "register", component: RegisterComponent },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "add-course", component: AddCourseComponent },
    { path: 'courses', component: CoursesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

// קובץ server.js או קובץ ההגדרות של השרת שלך
export function getPrerenderParams(route: string) {
    switch (route) {
        case 'courses/edit/:id':
            return [
                { id: '1' }, // לדוגמה, קורס עם ID 1
                { id: '2' }, // קורס עם ID 2
            ];
        case 'lessons/:courseId/delete/:id':
            return [
                { courseId: '1', id: '1' }, // לדוגמה, שיעור בקורס עם ID 1
                { courseId: '1', id: '2' }, // שיעור נוסף
            ];
        case 'lessons/:courseId/edit/:id':
            return [
                { courseId: '1', id: '1' }, // לדוגמה, שיעור בקורס עם ID 1
                { courseId: '1', id: '2' }, // שיעור נוסף
            ];
        case 'courses/delete/:id':
            return [
                { id: '1' }, // קורס למחיקה
                { id: '2' }, // קורס נוסף למחיקה
            ];
        default:
            return [];
    }
}