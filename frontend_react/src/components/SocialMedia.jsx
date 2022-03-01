import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/devjohnathan/' target='_blank' rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://github.com/jmcroft7' target='_blank' rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/devjohnathan/' target='_blank' rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href='https://twitter.com/DevJohnathan' target='_blank' rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
  </div>
);

export default SocialMedia;