import { Component } from '@angular/core';

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      author: 'Michael S.',
      rating: 5,
      text: 'Exceptional attention to detail. They transformed my car and it looks better than when I bought it. The Graphene coating is simply outstanding.',
      date: 'December 2024'
    },
    {
      author: 'Sarah T.',
      rating: 5,
      text: 'I had been trying to find someone who could handle my Bentley, and Blink exceeded all expectations. Truly premium service for luxury vehicles.',
      date: 'November 2024'
    },
    {
      author: 'David M.',
      rating: 5,
      text: 'Outstanding service from start to finish. They treat every car like it\'s their own. Highly recommend!',
      date: 'October 2024'
    },
    {
      author: 'Jennifer W.',
      rating: 5,
      text: 'The best auto detailing in Niagara. No question. Worth every penny and then some.',
      date: 'September 2024'
    }
  ];

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}

