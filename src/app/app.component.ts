import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    { 
      title: 'Neat Tree',
      username: '@nature',
      imageUrl: 'assets/tree.jpeg',
      content: 'I saw this neat tree today.'
    },
    { 
      title: 'Snowy Mountain',
      username: '@mountainLover',
      imageUrl: 'assets/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain.'
    },
    { 
      title: 'Mountain Biking',
      username: '@biking12222',
      imageUrl: 'assets/biking.jpeg',
      content: 'I did some biking today.'
    }
  ]
}
