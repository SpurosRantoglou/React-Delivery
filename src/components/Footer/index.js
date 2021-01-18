import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'


import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
import { HeroP } from '../Hero/HeroElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='//www.twitter.com/briandesignz'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    <div className='footer-container'>
        <div className='footer-links'>
                  <div className='footer-link-wrapper'>
                      <div className='footer-link-items'>
                          <h2>About Us</h2>
                          <Link to="/">Where to find us?</Link>
                          <Link to="/"><p>Work Hours</p></Link>
                          <Link to="/"><p>Organic ingredients</p></Link>
                  
                      </div>
                      <div className='footer-link-items'>
                          <h2>Contact</h2>
                          <Link to="/">Phone</Link>
                          <Link to="/">Email</Link>
                          <Link to="/">Google Play</Link>
                          
                      </div>
                      <div className='footer-link-items'>
                          <h2>Privacy</h2>
                          <Link to="/">Order policy</Link>
                          <Link to="/">Cancellation fee</Link>
                          <Link to="/">Terms of use</Link>
                                       
                      </div>
                  </div>
              </div>
            </div>
    </FooterContainer>
  );
};

export default Footer;
