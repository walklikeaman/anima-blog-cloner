import React, { useState } from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/blog/HeroSection';
import CategoryFilters from './components/blog/CategoryFilters';
import BlogGrid from './components/blog/BlogGrid';
import Footer from './components/layout/Footer';
import MobileMenu from './components/layout/MobileMenu';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={{ colorScheme: 'normal', forcedColorAdjust: 'auto', textSizeAdjust: '100%', color: 'rgb(33, 37, 41)', direction: 'ltr', fontFamily: 'Mulish-Regular', fontFeatureSettings: 'normal', fontSize: '16px', fontStyle: 'normal', fontVariantNumeric: 'normal', fontVariationSettings: 'normal', fontWeight: 400, textOrientation: 'mixed', WebkitFontSmoothing: 'antialiased', WebkitLocale: "'en-US'", accentColor: 'auto', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box', listStyleImage: 'none', listStylePosition: 'outside', listStyleType: 'disc', overflowX: 'hidden', overflowY: 'auto', textAlign: 'left', textTransform: 'none' }}>
      <Header onMenuToggle={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      
      <div style={{ colorScheme: 'normal', forcedColorAdjust: 'auto', position: 'fixed', color: 'rgb(38, 38, 38)', WebkitFontSmoothing: 'antialiased', WebkitLocale: "'en-US'", backgroundColor: 'rgba(236, 236, 236, 0.7)', blockSize: '40px', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%', borderEndEndRadius: '50%', borderEndStartRadius: '50%', borderStartEndRadius: '50%', borderStartStartRadius: '50%', borderTopLeftRadius: '50%', borderTopRightRadius: '50%', boxSizing: 'border-box', display: 'none', height: '40px', inlineSize: '40px', insetBlockStart: '25px', left: '0px', marginInlineEnd: 'auto', marginInlineStart: 'auto', marginLeft: 'auto', marginRight: 'auto', opacity: 0.8, overflow: 'hidden', paddingBlockStart: '9px', paddingTop: '9px', right: '0px', textAlign: 'center', textWrap: 'nowrap', top: '25px', width: '40px', zIndex: 98 }}>
        <i style={{ color: 'rgb(38, 38, 38)', fontFamily: "'Font Awesome 6 Free'", fontWeight: 900, WebkitFontSmoothing: 'antialiased', WebkitLocale: "'en-US'", backgroundImage: 'none', backgroundRepeat: 'repeat', backgroundSize: 'auto', display: 'inline-block', lineHeight: '16px', textWrap: 'nowrap' }}></i>
      </div>

      <div style={{ colorScheme: 'normal', forcedColorAdjust: 'auto', WebkitFontSmoothing: 'antialiased', WebkitLocale: "'en-US'", boxSizing: 'border-box', inlineSize: '100%', marginInlineEnd: '70px', marginInlineStart: '70px', marginLeft: 'auto', marginRight: 'auto', maxInlineSize: '1140px', maxWidth: '1140px', overflow: 'visible', paddingInlineEnd: '15px', paddingInlineStart: '15px', paddingLeft: '15px', paddingRight: '15px', width: '100%' }}>
        <div style={{ colorScheme: 'normal', forcedColorAdjust: 'auto', WebkitFontSmoothing: 'antialiased', WebkitLocale: "'en-US'", boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', marginInlineEnd: '-15px', marginInlineStart: '-15px', marginLeft: '-15px', marginRight: '-15px', overflow: 'visible' }}>
          <div style={{ position: 'relative', WebkitFontSmoothing: 'antialiased', WebkitLocale: "'en-US'", alignItems: 'center', boxSizing: 'border-box', flexBasis: '100%', flexShrink: 0, inlineSize: '100%', inset: '0px', marginBlockEnd: '35px', marginBottom: '35px', marginLeft: 'auto', marginRight: 'auto', maxInlineSize: '100%', maxWidth: '100%', minBlockSize: '1px', minHeight: '1px', overflow: 'visible', width: '100%' }}>
            <article style={{ colorScheme: 'normal', forcedColorAdjust: 'auto', WebkitFontSmoothing: 'antialiased', WebkitLocale: "'en-US'", boxSizing: 'border-box', marginBlockEnd: '24px', marginBottom: '24px', overflow: 'visible' }}>
              <div style={{ colorScheme: 'normal', forcedColorAdjust: 'auto', WebkitFontSmoothing: 'antialiased', WebkitLocale: "'en-US'", boxSizing: 'border-box', counterReset: 'footnotes 0', overflow: 'visible' }}>
                <HeroSection />
                <div style={{ colorScheme: 'normal', forcedColorAdjust: 'auto', WebkitFontSmoothing: 'antialiased', WebkitLocale: "'en-US'", boxSizing: 'border-box', inlineSize: '100%', marginBlockEnd: '30px', marginBottom: '30px', overflow: 'visible', width: '100%' }}>
                  <CategoryFilters />
                  <BlogGrid />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;