import React, { useState } from 'react'

// ── Waitlist capture → Firebase Firestore (via lightweight REST, no SDK) ──────
// Fill these from Firebase console → Project settings → General:
//   projectId  = "Project ID"
//   apiKey     = "Web API Key"
// Signups are written to the `waitlist` collection (secured by Firestore rules:
// create-only, no public read). Until filled, the form still confirms but stores
// nothing.
const FIREBASE = {
  projectId: 'gistread-38d41',
  apiKey: 'AIzaSyDTOJJTpA6Jh5g-IG0_rItL4RmcDUMob7k',
}

async function saveSignup({ email, handle }) {
  if (!FIREBASE.projectId || !FIREBASE.apiKey) return
  const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE.projectId}/databases/(default)/documents/waitlist?key=${FIREBASE.apiKey}`
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        email: { stringValue: email },
        handle: { stringValue: handle || '' },
        source: { stringValue: 'kios-landing' },
        ts: { timestampValue: new Date().toISOString() },
      },
    }),
  })
}

export default function Waitlist({ onClose }) {
  const [email, setEmail] = useState('')
  const [handle, setHandle] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)

  async function submit(e) {
    e.preventDefault()
    if (!email) return
    setBusy(true)
    try {
      await saveSignup({ email, handle })
    } catch (_) { /* still confirm to the visitor even if the write fails */ }
    setBusy(false)
    setDone(true)
  }

  return (
    <div className="wl-scrim" onClick={onClose}>
      <div className="wl" onClick={e => e.stopPropagation()}>
        <button className="wl-x" onClick={onClose} aria-label="Close">✕</button>
        {done ? (
          <div className="wl-done">
            <div className="wl-check">✓</div>
            <h3>You're on the list 🎉</h3>
            <p>We'll email you the moment your Founding Creator spot opens — first 50 get it free, forever.</p>
            <button className="wl-btn" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <span className="wl-pill"><i className="wl-dot" /> Beta — first 50 creators free</span>
            <h3>Claim your Founding Creator spot</h3>
            <p>Drop your email and we'll set you up with your own kios.shop link.</p>
            <label className="wl-field"><span>Email</span>
              <input type="email" required placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label className="wl-field"><span>Preferred handle <small>(optional)</small></span>
              <div className="wl-handle"><span>kios.shop/</span><input placeholder="yourname" value={handle} onChange={e => setHandle(e.target.value)} /></div>
            </label>
            <button className="wl-btn" type="submit" disabled={busy}>{busy ? 'Joining…' : 'Join the waitlist →'}</button>
            <div className="wl-fine">No credit card · Free forever for the first 50</div>
          </form>
        )}
      </div>
    </div>
  )
}
