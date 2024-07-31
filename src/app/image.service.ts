import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private images: {[key: string]: string} =  {
    'realism': '../assets/realista-6.jpeg',
    'black and white': '../assets/tattoo-black-white_01.jpeg',
    'watercolor': '../assets/tattoo-watercolor1.jpeg',
  };

  constructor() {}

  getImage(keyword: string): string | undefined {
    return this.images[keyword];
  }
}
