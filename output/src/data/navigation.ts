import { NavItem, DropdownItem } from '@/types';

export const headerNavItems: NavItem[] = [
  { label: 'Solutions', href: '#', hasDropdown: true },
  { label: 'Resources', href: '#', hasDropdown: true },
  { label: 'Community', href: '#', hasDropdown: true },
  { label: 'Pricing', href: "https://www.animaapp.com/pricing" },
];

export const authNavItems: NavItem[] = [
  { label: 'Login', href: "https://projects.animaapp.com/login" },
  { label: 'Start free', href: "https://projects.animaapp.com/signup", isButton: true },
];

export const languageNavItem: NavItem = {
  label: 'English',
  href: '#pll_switcher',
  isLanguage: true,
  iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-3.png",
};

export const solutionsDropdown: DropdownItem[] = [
  { label: 'Figma', href: "https://www.animaapp.com/figma", iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-2.gif" },
  { label: 'API', href: "https://www.animaapp.com/api", iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-2.gif" },
  { label: 'Web to code extension', href: "https://www.animaapp.com/an?url=https%3A%2F%2Fchromewebstore.google.com%2Fdetail%2Fanima-website-importer%2Fpaddhneaanoeljlmdepnheehdkaegblo&utm_content=chrome-ext-nav&utm_campaign=chrome-ext&utm_medium=website&utm_source=content", iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-2.gif" },
  { label: 'Adobe XD', href: "https://www.animaapp.com/xd", iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-2.gif" },
];

export const resourcesDropdown: DropdownItem[] = [
  { label: 'Blog', href: "https://www.animaapp.com/blog", iconSrc: '' },
  { label: 'Documentation', href: "https://docs.animaapp.com/docs/getting-started", iconSrc: '' },
  { label: 'Anima Forum', href: "https://forum.animaapp.com/", iconSrc: '' },
  { label: 'Help Center', href: "https://support.animaapp.com/en/", iconSrc: '' },
];

export const communityDropdown: DropdownItem[] = [
  { label: 'Discord', href: "https://discord.com/invite/5T88sYNcSW", iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-2.gif" },
  { label: 'Twitter', href: "https://twitter.com/AnimaApp", iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-2.gif" },
  { label: 'GitHub', href: "https://github.com/AnimaApp", iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-2.gif" },
];

export const languageDropdown = [
    { label: 'Español', href: '/blog/es/', iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-4.png" },
    { label: 'Français', href: '/blog/fr/', iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-5.png" },
    { label: 'Português', href: '/blog/pt/', iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-6.png" },
    { label: '日本語', href: '/blog/ja/', iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-7.png" },
    { label: '한국어', href: '/blog/ko/', iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-8.png" },
    { label: 'Deutsch', href: '/blog/de/', iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-9.png" },
    { label: 'English', href: '/blog/', iconSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-3.png" },
];