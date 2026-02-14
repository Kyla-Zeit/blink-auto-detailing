import { Component } from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stats: Stat[] = [
    { value: '40+', label: 'Five-Star Reviews' },
    { value: '3x', label: 'Diamond Awards' },
    { value: '100%', label: 'Satisfaction Rate' },
    { value: '664+', label: 'Followers' }
  ];
}

