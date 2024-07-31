import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  title = 'Tattoo Studio';

  imgTattoo1: string = '../../../assets/img-tattoo-01.jpeg';
  imgTattoo2: string = '../../../assets/img-tattoo-02.jpeg';
  imgTattoo3: string = '../../../assets/img-tattoo-03.jpeg';
  imgTattoo4: string = '../../../assets/img-tattoo-04.jpeg';
  imgTattoo5: string = '../../../assets/img-tattoo-05.jpeg';
  imgTattoo6: string = '../../../assets/img-tattoo-06.jpeg';
  imgTattoo7: string = '../../../assets/img-tattoo-07.jpeg';
  imgTattoo8: string = '../../../assets/img-tattoo-08.jpeg';
  imgTattoo9: string = '../../../assets/img-tattoo-09.jpeg';
  imgTattoo10: string = '../../../assets/img-tattoo-10.jpeg';
}
