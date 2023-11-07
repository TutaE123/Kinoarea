import React from 'react'
import './ExpectedNevProducts.css'
import { CardtitleExpectedProducts } from './CardtitleExpectedProducts'


export const ExpectedNevProducts = () => {
  return (
    <section className='ExpectedNevProducts'>
        <div className="titleExpectedNevProducts">
        <h1>Ожидаемые новинки</h1>
        <div className="arrows">
        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM27 10.5L2 10.5V13.5L27 13.5V10.5Z" fill="white"/>
        </svg>
        <p>2/5</p>
        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807611 14.9792 0.807611 14.3934 1.3934C13.8076 1.97919 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z" fill="white"/>
        </svg>
        </div></div>
        <div className="CardsExpectes">
            <CardtitleExpectedProducts />
            <CardtitleExpectedProducts />
            <CardtitleExpectedProducts />
            <CardtitleExpectedProducts />
        </div>

    </section>
  )
}
