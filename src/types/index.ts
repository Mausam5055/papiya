export interface Education {
  id: number;
  institution: string;
  degree: string;
  year: string;
  description: string;
  imageUrl: string;
  driveLink?: string;
}

export interface Journey {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;        // Short preview content
  fullContent: string;    // Full detailed content for Read More
  imageUrl: string;       // URL for the blog image
}


export interface GalleryItem {
  id: number;
  imageUrl: string;
  description: string;
  category: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}
  

