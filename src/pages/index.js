// Step 1: Import React
import * as React from 'react'
import { container, title, paragraph } from '../components/index.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div className={container}>
      <main>
        <h1 className={title}>Hi, I'm Mark Donohue.</h1>
        <p className={paragraph}>I'm still working on building this website at the moment. 
          In the meantime, please feel free to reach out at <a href="mailto: markbdonohue@gmail.com">markbdonohue@gmail.com</a>.</p>
      </main>
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Mark Donohue</title>

// Step 3: Export your component
export default IndexPage
