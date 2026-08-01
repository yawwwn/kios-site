import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from './Landing.jsx'
import Waitlist from './Waitlist.jsx'
import './styles.css'

// Marketing site: the landing page from the Kios app, with every CTA wired to a
// waitlist capture instead of the (private) prototype app.
function Site() {
  const [waitlist, setWaitlist] = useState(false)
  const open = () => setWaitlist(true)
  return (
    <>
      <Landing onClaim={open} onLogin={open} />
      {waitlist && <Waitlist onClose={() => setWaitlist(false)} />}
    </>
  )
}

createRoot(document.getElementById('root')).render(<Site />)
