import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent  implements OnChanges {
  @Input() selectedComponent: string = ''

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedComponent']) {
      console.log('Selected component changed:', this.selectedComponent);
      // כאן ניתן להוסיף לוגיקה נוספת בהתאם לבחירה
    }
  }
}
