import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  titlePrincipal: string = 'Team of Tattoo Artists';

  imgUrl1: string = '../../../assets/tatuador-01.jpeg';
  imgUrl2: string = '../../../assets/tatuadora-02.jpeg';
  imgUrl3: string = '../../../assets/tatuador-03.jpeg';
  imgUrl4: string = '../../../assets/tatuador-04.jpeg';
  imgUrl5: string = '../../../assets/tatuador-05.jpeg';
  imgUrl6: string = '../../../assets/tatuador-06.jpeg';
}
