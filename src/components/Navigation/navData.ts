import { Users, Calendar, TrendingUp, MessageSquare } from 'lucide-react';

export interface NavLinks {
  label: string;
  path: string;
  icon: any;
}

export const navLinks = [
  { label: 'Teams', path: '/teams', icon: Users },
  { label: 'Schedule', path: '/schedule', icon: Calendar },
  { label: 'Stats', path: '/stats', icon: TrendingUp },
  { label: 'Fan Zone', path: '/fan-zone', icon: MessageSquare },
];