import React from 'react';
// The NavItem type is assumed to be defined in '@/types/index.ts' as the partial implementation suggests.
// Based on the reference HTML, it should have a shape like this:
/*
export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isButton?: boolean;
  isLanguageSelector?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}
*/
import { NavItem } from '@/types';

interface NavItemProps {
  item: NavItem;
  style?: React.CSSProperties;
}

const NavItemComponent: React.FC<NavItemProps> = ({ item, style }) => {
  const liStyles: React.CSSProperties = {
    position: 'relative',
    fontFamily: 'Heebo, Arial',
    fontSize: '15px',
    display: 'inline-block',
    lineHeight: '22.5px',
    marginRight: '37px',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    ...style,
  };

  const baseLinkStyles: React.CSSProperties = {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Roslindale-TextRegular',
    fontSize: '16px',
    lineHeight: '40px',
    textTransform: 'none',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  };

  const buttonStyles: React.CSSProperties = item.isButton ? {
    backgroundColor: 'rgb(255, 98, 80)',
    border: '1px solid rgb(255, 98, 80)',
    borderRadius: '30px',
    padding: '10px 20px',
    lineHeight: '1.25', // Reset line-height for button with padding
  } : {};

  const linkStyles = { ...baseLinkStyles, ...buttonStyles };

  const dropdownIconStyles: React.CSSProperties = {
    fontFamily: "'Font Awesome 6 Free'",
    fontSize: '13px',
    fontWeight: 900,
    display: 'inline-block',
    lineHeight: '13px',
    marginLeft: '5px',
  };

  const imageStyles: React.CSSProperties = {
    width: '16px',
    height: '11px',
    verticalAlign: 'middle',
  };

  return (
    <li style={liStyles}>
      <a href={item.href} style={linkStyles}>
        {item.isLanguageSelector && item.imageSrc ? (
          <img src={item.imageSrc} alt={item.imageAlt || item.label} style={imageStyles} />
        ) : (
          item.label
        )}
        {item.hasDropdown && (
          <span style={dropdownIconStyles}>
            {/* Font Awesome chevron-down icon */}
            {'\uF078'}
          </span>
        )}
      </a>
    </li>
  );
};

export default NavItemComponent;