import React from 'react';
import { socialLinks } from '@/data/socials';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(43, 43, 43)', padding: '80px 0px 60px' }}>
      <div style={{ width: '100%', maxWidth: '1140px', margin: 'auto', padding: '0 15px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
          <div style={{ position: 'relative', width: '100%', padding: '0 15px', flex: '0 0 50%', maxWidth: '50%' }}>
            <div>
              <img src="https://c.animaapp.com/mh1wj6u6DkMTRK/assets/anima-logo.svg" alt="" style={{ width: '106px', height: 'auto', maxWidth: '100%' }} />
            </div>
            <div style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Roslindale-TextRegular', maxWidth: '290px', marginTop: '32px', marginBottom: '30px' }}>
              We help product teams deliver the best version of their vision.
            </div>
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {socialLinks.map((link) => (
                  <li key={link.title} style={{ display: 'inline-block', margin: '4px', filter: 'grayscale(1)' }}>
                    <a href={link.href} title={link.title} style={{ textAlign: 'center' }}>
                      <span style={{ position: 'relative', color: 'rgb(255, 255, 255)', fontFamily: 'wpzoom-socicon', fontSize: '18px', backgroundColor: link.bgColor, borderRadius: '100px', display: 'inline-block', height: '18px', width: '18px', lineHeight: '18px', padding: '8px', verticalAlign: 'middle' }}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ position: 'relative', width: '100%', padding: '0 15px', flex: '0 0 50%', maxWidth: '50%' }}>
            {/* This section is intentionally empty as per the reference HTML. */}
          </div>
          <div style={{ position: 'relative', width: '100%', padding: '0 15px', flex: '0 0 100%', maxWidth: '100%' }}>
            <div style={{ color: 'rgb(255, 255, 255)', borderTop: '2px solid rgb(85, 85, 85)', marginTop: '60px', paddingTop: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ width: '60%', margin: '0 0 16px' }}>
                  <a href="https://animaapp.s3.amazonaws.com/home/TOS.pdf" style={{ textDecoration: 'underline', color: 'inherit' }}>Privacy & Terms of Use</a>
                </p>
                <p style={{ width: '40%', margin: '0 0 16px', textAlign: 'right' }}>
                  © 2025 Anima | All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;