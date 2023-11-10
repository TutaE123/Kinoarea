import React from 'react'
import { SocialMedia } from './SocialMedia'
import { Lo } from './Lo'
import { Menu } from '../header/Menu'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <SocialMedia />
      <Menu />
      <Lo />
    </footer>
  )
}

