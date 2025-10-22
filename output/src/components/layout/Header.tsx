import React, { useState, useEffect } from 'react';
import { headerNavItems, authNavItems, languageNavItem } from '@/data/navigation';
import NavItemComponent from './NavItem';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stickyHeaderStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0px',
    width: '100%',
    zIndex: 99,
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 18px 0px',
    paddingTop: '13px',
    paddingBottom: '13px',
    alignItems: 'center',
    display: isSticky ? 'flex' : 'none',
  };

  const startFreeItem = authNavItems.find(item => item.label === 'Start free');
  const loginItem = authNavItems.find(item => item.label === 'Login');

  return (
    <>
      {/* Sticky Header */}
      <div style={stickyHeaderStyle}>
        <div style={{ width: '100%', maxWidth: '1140px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '15px', paddingRight: '15px', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'inline-block', marginRight: '20px', maxHeight: '50px' }}>
            <a href="/blog/">
              <img src="https://c.animaapp.com/mh1wj6u6DkMTRK/assets/image-1.png" alt="logo" style={{ height: '50px', verticalAlign: 'middle' }} />
            </a>
          </div>
          <nav style={{ position: 'relative', display: 'inline-block' }}>
            <div>
              <ul style={{ fontFamily: 'Roslindale-TextRegular', listStyleType: 'none', paddingLeft: '0px', margin: 0 }}>
                {headerNavItems.map((item) => (
                  <li
                    key={item.label}
                    style={{
                      position: 'relative',
                      fontFamily: 'Heebo, Arial',
                      fontSize: '15px',
                      display: 'inline-block',
                      lineHeight: '22.5px',
                      marginBottom: '0px',
                      marginRight: item.label === 'Pricing' ? '16px' : '27px',
                      textTransform: 'uppercase',
                    }}
                  >
                    <a href={item.href} style={{ color: 'rgb(131, 131, 131)' }}>
                      {item.label}{' '}
                      {item.children && <span style={{ fontFamily: "'Font Awesome 6 Free'", fontWeight: 900, display: 'inline-block', lineHeight: '15px' }}></span>}
                    </a>
                  </li>
                ))}
                {authNavItems.map((item) => (
                  <li
                    key={item.label}
                    style={{
                      position: 'relative',
                      fontFamily: 'Heebo, Arial',
                      fontSize: '15px',
                      display: 'inline-block',
                      lineHeight: '22.5px',
                      marginBottom: '0px',
                      marginRight: '16px',
                      textTransform: 'uppercase',
                    }}
                  >
                    <a href={item.href} style={{ color: 'rgb(131, 131, 131)' }}>
                      {item.label}
                    </a>
                  </li>
                ))}
                <li style={{ position: 'relative', fontFamily: 'Heebo, Arial', fontSize: '15px', display: 'inline-block', lineHeight: '22.5px', marginBottom: '0px', marginRight: '27px', textTransform: 'uppercase' }}>
                  <a href={languageNavItem.href} style={{ color: 'rgb(131, 131, 131)' }}>
                    <img src={languageNavItem.icon} alt={languageNavItem.label} style={{ height: '11px', width: '16px', verticalAlign: 'middle' }} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <div style={{ backgroundColor: 'rgb(43, 43, 43)', padding: '22px 40px 22px 22px' }}>
        <div style={{ width: '100%', maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '15px', paddingRight: '15px' }}>
          <header style={{ alignItems: 'center', display: 'flex' }}>
            <div style={{ height: '35px' }}>
              <div style={{ backgroundImage: "url('https://c.animaapp.com/mh1wj6u6DkMTRK/assets/anima-logo.svg')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: '35px', width: '96px', float: 'left', marginLeft: '14px', marginRight: '94px', textIndent: '-10000000px' }}>
                <a href="https://animaapp.com/">
                  <p style={{ marginBottom: '16px' }}>Anima Blog</p>
                </a>
              </div>
              <div style={{ borderLeft: '1px solid rgb(229, 229, 229)', display: 'none', height: '35px', paddingLeft: '30px' }}>
                <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                  <form role="search" style={{ color: 'rgb(119, 119, 119)', fontFamily: 'Heebo, Arial', fontSize: '20px', fontWeight: 500, display: 'inline-block', lineHeight: '30px' }}>
                    <input type="search" name="s" value=" " style={{ color: 'rgba(0, 0, 0, 0)', backgroundColor: 'rgba(0, 0, 0, 0)', backgroundImage: "url('https://www.animaapp.com/blog/wp-content/themes/neori/img/search-icon.svg')", backgroundPositionX: '0px', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundSize: '19px 21px', border: '0px none rgba(0, 0, 0, 0)', width: '25px' }} />
                  </form>
                </div>
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <nav style={{ position: 'relative', display: 'block', paddingTop: '3px' }}>
                <div>
                  <ul style={{ fontFamily: 'Roslindale-TextRegular', listStyleType: 'none', paddingLeft: '0px', margin: 0 }}>
                    {headerNavItems.map((item) => (
                      <NavItemComponent key={item.label} item={item} />
                    ))}
                    
                    {startFreeItem && (
                      <li style={{ display: 'block', float: 'right', fontFamily: 'Heebo, Arial', fontSize: '15px', lineHeight: '22.5px', position: 'relative', textTransform: 'uppercase' }}>
                        <a href={startFreeItem.href} style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Roslindale-TextRegular', fontSize: '16px', backgroundColor: 'rgb(255, 98, 80)', border: '1px solid rgb(255, 98, 80)', borderRadius: '30px', lineHeight: '40px', padding: '10px 20px', textTransform: 'none' }}>
                          {startFreeItem.label}
                        </a>
                      </li>
                    )}
                    {loginItem && (
                      <li style={{ display: 'block', float: 'right', fontFamily: 'Heebo, Arial', fontSize: '15px', lineHeight: '22.5px', marginRight: '37px', position: 'relative', textTransform: 'uppercase' }}>
                        <a href={loginItem.href} style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Roslindale-TextRegular', fontSize: '16px', lineHeight: '40px', textTransform: 'none' }}>
                          {loginItem.label}
                        </a>
                      </li>
                    )}
                    <li style={{ display: 'inline-block', fontFamily: 'Heebo, Arial', fontSize: '15px', lineHeight: '22.5px', marginRight: '37px', position: 'relative', textTransform: 'uppercase' }}>
                      <a href={languageNavItem.href} style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Roslindale-TextRegular', fontSize: '16px', lineHeight: '40px', textTransform: 'none' }}>
                        <img src={languageNavItem.icon} alt={languageNavItem.label} style={{ height: '11px', width: '16px', verticalAlign: 'middle' }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;