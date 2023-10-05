import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function MainContent() {
  return (
    <ThemeContextConsumer>
      {(context) => {
          return <div className={`content ${context.theme}`}>
            <h1>Welcome to content section</h1>
            <p>We are here to ReactJS along with u!</p>
          </div>
        }
      }
    </ThemeContextConsumer>
  )
}
