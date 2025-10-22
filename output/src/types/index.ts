export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isButton?: boolean;
  isLanguage?: boolean;
  iconSrc?: string;
}

export interface DropdownItem {
  label: string;
  href: string;
  iconSrc: string;
}

export interface Category {
  title: string;
  href: string;
  isActive?: boolean;
}

export interface BlogPost {
  id: number;
  imageSrc: string;
  imageAlt: string;
  tags: { label: string; href: string }[];
  title: string;
  description: string;
  author: {
    name: string;
    avatarSrc: string;
    href: string;
  };
  date: string;
  readTime: number;
  url: string;
}

export interface SocialLink {
  title: string;
  href: string;
  iconClass: string;
  bgColor: string;
}