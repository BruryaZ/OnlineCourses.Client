import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { UserDetailsComponent } from '../user-details/user-details.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [DatePipe, UserDetailsComponent, MatCardModule, MatSidenavModule, MatToolbarModule, MatListModule, RouterOutlet],
=======
@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatSidenavModule, MatToolbarModule, MatListModule, RouterOutlet],
>>>>>>> 9132c2f470960da332748bc63574d09cafab1ed0
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
<<<<<<< HEAD
  currentDate: Date = new Date();
  selectedComponent2: string = '';

  constructor(private router: Router) {}

  // פונקציה לנתב לקומפוננטה שנבחרה
  navigateToComponent(component: string) {
    this.selectedComponent2 = component;
    console.log(this.selectedComponent2); // הדפסת הערך
    this.router.navigate([component]);
  }
  
=======
    constructor(private router: Router) {}
  
    // פונקציה לנתב לקומפוננטה שנבחרה
    navigateToComponent(component: string) {
      this.router.navigate([component]);
    }
>>>>>>> 9132c2f470960da332748bc63574d09cafab1ed0
}
