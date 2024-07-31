import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-realism',
  templateUrl: './realism.component.html',
  styleUrls: ['./realism.component.scss'],
  animations: [
    trigger('zoomIn', [
      state(
        'void',
        style({
          transform: 'scale(0)',
          opacity: 0,
        })
      ),
      state(
        '*',
        style({
          transform: 'scale(1)',
          opacity: 1,
        })
      ),
      transition('void => *', [animate('8s ease')]),
    ]),
  ],
})
export class RealismComponent {
  textPrincipal: string = 'Realistic Tattoos';
  getImage: string = '../../../assets/realista-1.jpeg';
  pathImage: string = '../../../assets/realista-2.jpeg';
  pathImage2: string = '../../../assets/realista-3.jpeg';
  pathImage4: string = '../../../assets/realista-4.jpeg';
  pathImage5: string = '../../../assets/realista-5.jpeg';
  pathImage6: string = '../../../assets/realista-6.jpeg';
}
