import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-water-color',
  templateUrl: './water-color.component.html',
  styleUrl: './water-color.component.scss',
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
export class WaterColorComponent {
  titlePrincipal: string = 'Aquerela Tattoos';
  imgUrl1: string = '../../../assets/tattoo-watercolor1.jpeg';
  imgUrl2: string = '../../../assets/tattoo-water-color2.jpeg';
  imgUrl3: string = '../../../assets/tattoo-water-color4.jpeg';
  imgUrl4: string = '../../../assets/tattoo-water-color3.jpeg';
  imgUrl5: string = '../../../assets/tattoo-water-color-5.jpeg';
  imgUrl6: string = '../../../assets/tattoo-water-color-6.jpeg';
}
