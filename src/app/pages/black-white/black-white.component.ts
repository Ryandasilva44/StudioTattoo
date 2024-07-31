import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-white',
  templateUrl: './black-white.component.html',
  styleUrls: ['./black-white.component.scss'],
})
export class BlackWhiteComponent {


  getImage: string = '../../../assets/tattoo-black-white-4.jpeg';
  pathImage: string = '../../../assets/tattoo-black-white-2.jpeg';
  pathImage1: string = '../../../assets/tattoo-black-white-3.jpeg';
  pathImage01: string = '../../../assets/tattoo-black-white_01.jpeg';
  pathImage02: string = '../../../assets/tattoo-black-white-5.jpeg';
  pathImage03: string = '../../../assets/tattoo-black-white-6.jpeg';
}
