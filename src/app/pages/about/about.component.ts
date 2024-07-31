import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  textTitle: string = 'Studio History';
  textTitle1: string = 'Mission and Values';
  textTitle2: string = 'Our Mission';
  textTitle3: string = 'Our Values'
  titleDescription: string = 'Commitment to Quality'
}
