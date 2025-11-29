import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-carousel',
  standalone: true,
  imports: [CommonModule],
 
  templateUrl: './book-carousel.html',
  styleUrl: './book-carousel.css',
})
export class BookCarouselComponent {
  scrollAmount = 300;

  // Array manual de livros com imagens
  books = [
  { title: 'Dom Quixote', author: 'Miguel de Cervantes', cover: 'https://covers.openlibrary.org/b/id/6979861-M.jpg' },
  { title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', cover: 'https://covers.openlibrary.org/b/id/8231991-M.jpg' },
  { title: '1984', author: 'George Orwell', cover: 'https://covers.openlibrary.org/b/id/7222246-M.jpg' },
  { title: 'Orgulho e Preconceito', author: 'Jane Austen', cover: 'https://covers.openlibrary.org/b/id/8085551-M.jpg' },
  { title: 'Moby Dick', author: 'Herman Melville', cover: 'https://covers.openlibrary.org/b/id/8106661-M.jpg' },
  { title: 'Hamlet', author: 'William Shakespeare', cover: 'https://covers.openlibrary.org/b/id/8235111-M.jpg' },
  { title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', cover: 'https://covers.openlibrary.org/b/id/8231996-M.jpg' },
  { title: 'Alice no País das Maravilhas', author: 'Lewis Carroll', cover: 'https://covers.openlibrary.org/b/id/8109821-M.jpg' },
  { title: 'A Metamorfose', author: 'Franz Kafka', cover: 'https://covers.openlibrary.org/b/id/8231997-M.jpg' },
  { title: 'Crime e Castigo', author: 'Fiódor Dostoiévski', cover: 'https://covers.openlibrary.org/b/id/8231998-M.jpg' },
  { title: 'O Apanhador no Campo de Centeio', author: 'J.D. Salinger', cover: 'https://covers.openlibrary.org/b/id/8231999-M.jpg' },
  { title: 'O Grande Gatsby', author: 'F. Scott Fitzgerald', cover: 'https://covers.openlibrary.org/b/id/8232000-M.jpg' },
  { title: 'A Revolução dos Bichos', author: 'George Orwell', cover: 'https://covers.openlibrary.org/b/id/8232001-M.jpg' },
  { title: 'O Hobbit', author: 'J.R.R. Tolkien', cover: 'https://covers.openlibrary.org/b/id/8232002-M.jpg' },
  { title: 'Drácula', author: 'Bram Stoker', cover: 'https://covers.openlibrary.org/b/id/8232003-M.jpg' },
  { title: 'Frankenstein', author: 'Mary Shelley', cover: 'https://covers.openlibrary.org/b/id/8232004-M.jpg' },
  { title: 'O Morro dos Ventos Uivantes', author: 'Emily Brontë', cover: 'https://covers.openlibrary.org/b/id/8232005-M.jpg' },
  { title: 'Jane Eyre', author: 'Charlotte Brontë', cover: 'https://covers.openlibrary.org/b/id/8232006-M.jpg' },
  { title: 'Anna Karenina', author: 'Liev Tolstói', cover: 'https://covers.openlibrary.org/b/id/8232007-M.jpg' },
  { title: 'O Conde de Monte Cristo', author: 'Alexandre Dumas', cover: 'https://covers.openlibrary.org/b/id/8232008-M.jpg' },
  { title: 'As Aventuras de Tom Sawyer', author: 'Mark Twain', cover: 'https://covers.openlibrary.org/b/id/8232009-M.jpg' },
  { title: 'As Aventuras de Huckleberry Finn', author: 'Mark Twain', cover: 'https://covers.openlibrary.org/b/id/8232010-M.jpg' },
  { title: 'O Retrato de Dorian Gray', author: 'Oscar Wilde', cover: 'https://covers.openlibrary.org/b/id/8232011-M.jpg' },
  { title: 'Les Misérables', author: 'Victor Hugo', cover: 'https://covers.openlibrary.org/b/id/8232012-M.jpg' },
  { title: 'O Processo', author: 'Franz Kafka', cover: 'https://covers.openlibrary.org/b/id/8232013-M.jpg' }
];


  scrollLeft(carousel: HTMLElement) {
    carousel.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
  }

  scrollRight(carousel: HTMLElement) {
    carousel.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
  }
}