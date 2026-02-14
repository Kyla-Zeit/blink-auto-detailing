import { Component } from '@angular/core';

interface GalleryImage {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: GalleryImage[] = [
    { url: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800', alt: 'Luxury car detail 1' },
    { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', alt: 'Luxury car detail 2' },
    { url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800', alt: 'Luxury car detail 3' },
    { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800', alt: 'Luxury car detail 4' },
    { url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800', alt: 'Luxury car detail 5' },
    { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', alt: 'Luxury car detail 6' },
    { url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', alt: 'Luxury car detail 7' },
    { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800', alt: 'Luxury car detail 8' }
  ];
}

