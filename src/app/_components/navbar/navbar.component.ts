import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  getImage: string = '../../../assets/Logo.jpeg';

  searchText: string = '';

  constructor(private router: Router) {}

  search() {
    const keyword = this.searchText.toLowerCase();

    if (keyword.includes('realism') || keyword.includes('tatuagem realista')) {
      this.router.navigate(['/realism']);
    } else if (
      keyword.includes('black and white') ||
      keyword.includes('tatuagem preto e branco') ||
      keyword.includes('black and white')
    ) {
      this.router.navigate(['/black-white']);
    } else if (
      keyword.includes('water') ||
      keyword.includes('tatuagem aquarela') ||
      keyword.includes('water-color')
    ) {
      this.router.navigate(['/water-color']);
    } else if (
      keyword.includes('team') ||
      keyword.includes('tatuadores do studio')
    ) {
      this.router.navigate(['/team']);
    } else {
      alert('No matching page found');
    }
  }
}
