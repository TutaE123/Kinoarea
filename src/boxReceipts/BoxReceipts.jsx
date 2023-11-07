import React from 'react'
import { ContentBoxReceipts } from './ContentBoxReceipts'
import { TitleBoxReceipts } from './TitleBoxReceipts'
import './BoxReceipts.css'

export const BoxReceipts = () => {
  return (
    <section className='BoxReceipts'>
        <TitleBoxReceipts />
        <ContentBoxReceipts />
    </section>
  )
}
