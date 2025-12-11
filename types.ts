import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  price?: string;
}

export interface WorkingHours {
  day: string;
  hours: string;
}