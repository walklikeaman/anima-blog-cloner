import React, { useState } from 'react';
import {
  headerNavItems,
  authNavItems,
  languageNavItem,
  solutionsDropdown,
  resourcesDropdown,
  communityDropdown,
  languageDropdown,
} from '@/data/navigation';
import { NavItem, DropdownItem } from '@/types/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const getDropdownData = (label: string): DropdownItem[] => {
    switch (label) {
      case 'Solutions':
        return solutionsDropdown;
      case 'Resources':
        return resourcesDropdown;
      case 'Community':
        return communityDropdown;
      case languageNavItem.label:
        return languageDropdown;
      default:
        return [];
    }
  };

  const allNavItems: NavItem[] = [...headerNavItems, ...authNavItems, languageNavItem];

  return (
    <div style={{ position: 'fixed', backgroundColor: 'rgb(255, 255, 255)', bottom: '0px', left: '0px', right: '0px', top: '0px', overflow: 'scroll', padding: '30px 7% 7%', zIndex: 999999 }}>
      <i onClick={onClose} style={{ color: 'rgb(60, 60, 60)', fontFamily: "'Font Awesome 6 Free'", fontSize: '28px', fontWeight: 900, display: 'block', marginBottom: '30px', textAlign: 'center', cursor: 'pointer' }}>
        {'\u00d7'}
      </i>
      <div style={{ display: 'block', marginBottom: '35px', textAlign: 'center' }}>
        <form role="search" style={{ display: 'inline-block' }}>
          <input
            type="search"
            name="s"
            defaultValue=" "
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              backgroundImage: "url('https://www.animaapp.com/blog/wp-content/themes/neori/img/search-icon.svg')",
              backgroundPosition: '0px 50%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '19px 21px',
              borderWidth: '0px',
              borderStyle: 'none',
              borderColor: 'rgba(0, 0, 0, 0)',
              width: '25px',
              color: 'rgba(0, 0, 0, 0)',
            }}
          />
        </form>
      </div>
      <div>
        <ul style={{ listStyleType: 'none', paddingLeft: '0px', fontFamily: 'Roslindale-TextRegular' }}>
          {allNavItems.map((item, index) => {
            const dropdownItems = getDropdownData(item.label);
            const hasDropdown = dropdownItems.length > 0;
            const isDropdownOpen = openDropdown === item.label;

            const liStyle: React.CSSProperties = {
              borderBottom: index === allNavItems.length - 1 ? 'none' : '2px solid rgb(242, 242, 242)',
              marginTop: '13px',
              paddingBottom: '13px',
              textTransform: 'uppercase',
              listStyle: 'none',
            };

            return (
              <li key={item.label} style={liStyle}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (hasDropdown) {
                      e.preventDefault();
                      handleDropdownToggle(item.label);
                    }
                  }}
                  style={{ color: 'rgb(20, 20, 20)', fontSize: '16px', lineHeight: '24px', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span>
                    {item.img && <img src={item.img} alt={item.label} style={{ width: '16px', height: '11px', verticalAlign: 'middle', marginRight: '8px' }} />}
                    {item.label}
                  </span>
                  {hasDropdown && <span style={{ fontFamily: "'Font Awesome 6 Free'", fontWeight: 900, fontSize: '16px' }}>{isDropdownOpen ? '−' : '+'}</span>}
                </a>
                {hasDropdown && isDropdownOpen && (
                  <ul style={{ display: 'block', backgroundColor: 'rgb(52, 52, 52)', borderRadius: '10px', marginTop: '20px', padding: '20px 20px 20px 35px', listStyle: 'none' }}>
                    {dropdownItems.map((subItem, subIndex) => (
                      <li key={subIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', textTransform: 'none' }}>
                        <a href={subItem.href} style={{ color: 'rgb(220, 220, 220)', fontSize: '15px', display: 'flex', alignItems: 'center', lineHeight: '22.5px', textDecoration: 'none' }}>
                          {subItem.icon && <img src={subItem.icon} alt="" style={{ width: '25px', height: '25px', marginRight: '8px', verticalAlign: 'middle' }} />}
                          {subItem.img && <img src={subItem.img} alt={subItem.label} style={{ width: '16px', height: '11px', marginRight: '8px', verticalAlign: 'middle' }} />}
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;