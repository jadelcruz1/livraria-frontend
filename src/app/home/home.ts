import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../header/header';
import { BookCarouselComponent } from '../book-carousel/book-carousel';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Header, BookCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
