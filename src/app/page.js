'use client'

import StockGrid from '@/components/dashboard'
import Navbar from '@/components/navbar'
import styles from '@/styles/page.module.css'
import { stocks } from '@/assets/stocks'
import { useState } from 'react'

export default function Home() {
  const [activeChoice, setActiveChoice] = useState('Top Gainers');

  const handleChoiceClick = (choice) => {
    setActiveChoice(choice);
  }

  return (
    <main>
      <Navbar/>
      <div className={styles.choiceWrapper}>
        <div className={styles.choice}>
          <div
            className={`${styles.choiceItem} ${activeChoice === 'Top Gainers' ? styles.active : ''}`}
            onClick={() => handleChoiceClick('Top Gainers')}
          >
            Top Gainers
          </div>
          <div
            className={`${styles.choiceItem} ${activeChoice === 'Top Losers' ? styles.active : ''}`}
            onClick={() => handleChoiceClick('Top Losers')}
          >
            Top Losers
          </div>
        </div>
      </div>
      <StockGrid stocks={stocks}/>
    </main>
  )
}
