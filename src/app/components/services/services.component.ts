import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Premium Detailing',
      description: 'Complete interior and exterior detailing that restores your vehicle to showroom condition.',
      features: [
        'Deep cleaning',
        'Paint correction',
        'Interior restoration',
        'Engine bay detailing'
      ]
    },
    {
      title: 'Graphene Coating',
      description: 'Advanced protection with premium Graphene coating technology for unmatched durability.',
      features: [
        'Dirt Hardness',
        'Hydrophobic protection',
        '5+ year warranty',
        '9H rated hardness'
      ]
    },
    {
      title: 'Ceramic Coating',
      description: 'Professional-grade ceramic coating for long-lasting shine and protection.',
      features: [
        'Scratch resistance',
        'Chemical protection',
        'Enhanced gloss',
        'Easy maintenance'
      ]
    },
    {
      title: 'Luxury Specialist',
      description: 'Specialized care for high-end and exotic vehicles with meticulous attention to detail.',
      features: [
        'Brand expertise',
        'Premium products',
        'Custom solutions',
        'White glove service'
      ]
    }
  ];
}

