
export interface AcademicPublication {
  id: string;
  authors: string;
  year: string;
  title: string;
  journalOrVenue: string;
  doi?: string;
  url?: string;
  category: 'Journal' | 'Conference' | 'Book' | 'Course';
}

export interface AppItem {
  id: string;
  title: string;
  geogebraId: string;
  description: string;
  category: 'Geometry' | 'Arithmetic' | 'Functions' | 'Statistics' | 'Education';
  width: number;
  height: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
}

export enum AppSection {
  Home = 'Home',
  Publications = 'Publications',
  Apps = 'Apps',
  Contact = 'Contact'
}
