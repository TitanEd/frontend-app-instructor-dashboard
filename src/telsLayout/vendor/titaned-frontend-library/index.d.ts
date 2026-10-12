// Types of the parts of titaned-frontend-library this app uses (see README.md in this folder).
import { ComponentType, ReactNode } from 'react';

export interface MainHeaderProps {
  logoUrl?: string,
  authenticatedUser?: { username?: string, avatar?: string, administrator?: boolean } | null,
  userMenuItems?: { href: string, title: string }[],
  onLanguageChange?: (code: string) => void,
  headerButtons?: Record<string, boolean>,
  languageSelectorList?: { code: string, name: string }[],
}

export interface SidebarProps {
  buttons: { label: string, path: string, icon?: ReactNode }[],
  onNavigate: (path: string) => void,
  presentPath?: string,
}

export const MainHeader: ComponentType<MainHeaderProps>;
export const Sidebar: ComponentType<SidebarProps>;
export const SidebarProvider: ComponentType<{ children: ReactNode }>;
