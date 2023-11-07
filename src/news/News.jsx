import React from 'react'
import { TitleNews } from './TitleNews'
import { ContentNews } from './ContentNews'
import './News.css'

export const News = () => {
  return (
     <section className='News'>
        <TitleNews />
        <ContentNews />
     </section>
  )
}
