import React from 'react'

// Marketing landing (Figma node 62:303 — landing-beta-launch).
export default function Landing({ onClaim, onLogin }) {
  return (
    <div className="lp">
      <nav className="lp-nav">
        <img className="lp-logo" src="/brand/kios-brand.svg" alt="Kios" />
        <div className="lp-nav-links">
          <a className="lp-pill-nav" href="#for-creators">FOR CREATORS +</a>
          <a href="#pricing">Pricing</a>
          <a href="#discover">Discover</a>
        </div>
        <div className="lp-nav-actions">
          <button className="lp-login" onClick={onLogin}>Log in</button>
          <button className="lp-cta" onClick={onClaim}>Start free →</button>
        </div>
      </nav>

      <section className="lp-hero">
        {/* hero visual — reproduced 1:1 from Figma node 62:322 (phone-mockup-col 400×465) */}
        <div className="lp-hero-visual">
          <div className="lp-phone">
            <div className="lp-phone-cover" />
            <div className="lp-phone-av" />
            <div className="lp-phone-name">Amy Tan</div>
            <div className="lp-phone-tag">helping you ace A-Math &amp; E-Math ✨</div>
            <div className="lp-phone-pills"><span>#AMath</span><span>#EMath</span><span>#BishanSG</span></div>
            <div className="lp-phone-tabs"><b>Notes</b><span>Classes</span></div>
            <div className="lp-phone-prod">
              <div className="lp-phone-thumb" />
              <div className="lp-phone-pt">Sec 4 A-Math Notes</div>
              <div className="lp-phone-pp">S$24.90</div>
            </div>
          </div>
          <div className="lp-chip lp-chip-cal"><span className="lp-chip-cal-ic"><img src="/brand/lp-calendar-check.svg" alt="" /></span><div><b>Booking Confirmed</b><div className="lp-chip-cal-when">Apr 12 · 2:00 PM</div></div></div>
          <div className="lp-chip lp-chip-rev">💰 <b>S$1,240 this month</b></div>
          <div className="lp-chip lp-chip-course">🎓 <b>Course sold · S$129</b></div>
          <div className="lp-chip lp-chip-pay"><i className="lp-chip-dot" /><b>PayNow success · S$49.00</b></div>
          <div className="lp-chip lp-chip-stars"><span className="lp-chip-starrow">★★★★★</span> <b>4.9 · 300+ reviews</b></div>
        </div>

        <div className="lp-hero-text">
          <span className="lp-beta-pill"><i className="lp-beta-dot" />🚀 Beta Launch — First 50 Creators Gets it Free</span>
          <h1>Your creator<br />business.<br />One link.</h1>
          <p>Sell digital products, fill seats, and automate PayNow registration - all from your unified <b>kios.shop/@handle</b>.</p>
          <div className="lp-hero-form">
            <div className="lp-hero-input"><span>kios.shop/</span>yourname</div>
            <button className="lp-cta lp-cta-lg" onClick={onClaim}>Claim Your Free Spot →</button>
          </div>
          <div className="lp-spots"><span className="lp-spots-badge">23 SPOTS REMAINING</span> No credit card. Set up in 5 minutes. Yours forever.</div>
          <div className="lp-fine">Free forever · Live in 5 minutes · No credit card required</div>
        </div>
      </section>

      {/* ── Storefront showcase ─────────────────────────────── */}
      <section className="lp-store" id="discover">
        <span className="lp-eyebrow">YOUR STORE, LIVE IN MINUTES</span>
        <h2>A beautiful <span className="coral">storefront</span> - all yours.</h2>
        <p className="lp-store-sub">Buyers browse, click, and pay - straight from your Kios page.</p>

        <div className="lp-store-grid">
          <div className="lp-store-stats">
            <div className="lp-stat-card">
              <div className="lp-stat-label">THIS WEEK</div>
              <div className="lp-stat-num">S$1,240</div>
              <div className="lp-stat-foot"><span className="lp-stat-up">↑ 34%</span> vs last week</div>
            </div>
            <div className="lp-stat-card">
              <div className="lp-stat-num lp-stat-rating"><span className="lp-star">★</span> 4.9</div>
              <div className="lp-stat-foot">312 happy buyers</div>
              <div className="lp-stat-stars">★★★★★</div>
            </div>
            <div className="lp-stat-card lp-stat-inline">
              <span className="lp-stat-ico">⚡</span>
              <div><div className="lp-stat-inline-t">Instant PayNow</div><div className="lp-stat-inline-d">Paid within seconds</div></div>
            </div>
          </div>

          <div className="lp-stall">
            <div className="lp-stall-status"><span>9:41</span><span className="lp-stall-status-r">▪ ▪ ▪</span></div>
            <div className="lp-stall-cover">
              <span className="lp-stall-url">kios.shop</span>
              <span className="lp-stall-share">⇪</span>
              <div className="lp-stall-av" />
              <div className="lp-stall-meta">
                <div className="lp-stall-tags"><span className="lp-stall-handle">@amytan</span><span className="lp-stall-top">✓ Top 1% Creator</span></div>
                <div className="lp-stall-name">Amy Tan</div>
                <div className="lp-stall-sub">A-Math &amp; E-Math · Bishan, SG</div>
              </div>
            </div>
            <div className="lp-stall-body">
              <div className="lp-stall-feat">
                <div className="lp-stall-feat-cover" />
                <div className="lp-stall-feat-body">
                  <div className="lp-stall-badges"><span className="lp-stall-best">BEST SELLER</span><span className="lp-stall-sold">🔥 312 sold</span></div>
                  <div className="lp-stall-feat-t">Sec 4 A-Math Complete Notes Bundle</div>
                  <div className="lp-stall-feat-foot">
                    <div><div className="lp-stall-feat-kind">Instant PDF</div><div className="lp-stall-feat-price">S$24.90</div></div>
                    <button className="lp-stall-get">Get Notes →</button>
                  </div>
                </div>
              </div>
              <div className="lp-stall-tiles">
                <div className="lp-stall-tile">
                  <div className="lp-stall-tile-cover">📗</div>
                  <div className="lp-stall-tile-t">E-Math Crash Course</div>
                  <div className="lp-stall-tile-foot"><span className="lp-stall-tile-price">S$12.90</span><span className="lp-stall-tile-plus">＋</span></div>
                </div>
                <div className="lp-stall-tile lp-stall-gift">
                  <div className="lp-stall-gift-label">✦ GIFT</div>
                  <div className="lp-stall-tile-t">Free Formula Cheatsheet</div>
                  <div className="lp-stall-tile-foot"><span className="lp-stall-tile-price dark">S$0.00</span><span className="lp-stall-claim">Claim</span></div>
                </div>
              </div>
              <div className="lp-stall-secure">🔒 Secure checkout via PayNow &amp; Card</div>
            </div>
          </div>
        </div>

        <button className="lp-cta lp-cta-lg lp-store-cta" onClick={onClaim}>Open Your Stall Free →</button>
      </section>

      <section className="lp-section lp-why" id="for-creators">
        <h2>WHAT YOU GET</h2>
        <p className="lp-section-sub">Everything you need to package your expertise, launch your digital presence, and build a frictionless student audience.</p>
        <div className="lp-features">
          {FEATURES.map(f => (
            <div className="lp-feat" key={f.t}>
              <span className="lp-feat-ico"><img src={f.i} alt="" /></span>
              <div className="lp-feat-t">{f.t}</div>
              <div className="lp-feat-d">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Supercharge your Telegram ───────────────────────── */}
      <section className="lp-tg">
        <h2>SUPERCHARGE<br />YOUR TELEGRAM.</h2>
        <p className="lp-section-sub">Your audience is already on Telegram. Now give them a checkout experience, automated delivery, and broadcast tools - all connected to your stall.</p>
        <div className="lp-tg-app">
          <div className="lp-tg-top">
            <div className="lp-tg-brand"><img src="/brand/kios-logo.svg" alt="" className="lp-tg-mark" /><b>KIOS</b></div>
            <div className="lp-tg-icons"><span>🔍</span><span>🔔</span></div>
          </div>
          <div className="lp-tg-rows">
            <div className="lp-tg-row is-new">
              <span className="lp-tg-av lp-tg-av-coral">S</span>
              <div className="lp-tg-main"><div className="lp-tg-name">Sarah Lim</div><div className="lp-tg-msg">Sent S$24.90 via PayNow</div></div>
              <span className="lp-tg-newpill">NEW</span>
            </div>
            <div className="lp-tg-row">
              <span className="lp-tg-av lp-tg-av-green">K</span>
              <div className="lp-tg-main"><div className="lp-tg-name">Kios</div><div className="lp-tg-msg">PDF delivered to sarahlim@gmail.com</div></div>
            </div>
            <div className="lp-tg-row">
              <span className="lp-tg-av lp-tg-av-gray">M</span>
              <div className="lp-tg-main"><div className="lp-tg-name">Marcus Koh</div><div className="lp-tg-msg">Broadcast: New notes uploaded</div></div>
            </div>
          </div>
          <div className="lp-tg-compose"><span className="lp-tg-plus">＋</span><span className="lp-tg-input">Message…</span><span className="lp-tg-send">➤</span></div>
        </div>
      </section>

      {/* ── Built for creators who mean business ─────────────── */}
      <section className="lp-built">
        <h2>BUILT FOR CREATORS<br />WHO MEAN BUSINESS.</h2>

        <div className="lp-built-row">
          <div className="lp-built-text">
            <span className="lp-eyebrow lp-eyebrow-solid">01 / INSTANT CASHFLOW</span>
            <h3>PayNow.<br />Automatic.<br />Built In.</h3>
            <p><b>COMING SOON.</b> Your audience checks out with native PayNow or credit card. No setup hassle. Funds deposit directly to your bank account with a flat 1.3% transaction fee.</p>
          </div>
          <div className="lp-panel lp-rev">
            <div className="lp-panel-head"><span className="lp-panel-title"><i className="lp-dot" /> Revenue Dashboard</span><span className="lp-live">● LIVE</span></div>
            <div className="lp-rev-stats">
              <div className="lp-rev-stat"><div className="lp-rev-lbl">TODAY</div><div className="lp-rev-num">S$74.70</div><div className="lp-rev-delta"><span className="lp-stat-up">↑ 12%</span> vs yesterday</div></div>
              <div className="lp-rev-stat"><div className="lp-rev-lbl">THIS WEEK</div><div className="lp-rev-num">S$347.80</div><div className="lp-rev-delta"><span className="lp-stat-up">↑ 34%</span> vs last week</div></div>
              <div className="lp-rev-stat"><div className="lp-rev-lbl">PENDING</div><div className="lp-rev-num">S$29.00</div><div className="lp-rev-delta lp-rev-proc">⏳ Processing</div></div>
            </div>
            <div className="lp-rev-chart-head"><span>Revenue (7 days)</span><a className="coral">View full report →</a></div>
            <div className="lp-rev-chart">
              {[38, 52, 44, 30, 62, 48, 92].map((h, i) => (
                <div className="lp-rev-bar-col" key={i}><span className={'lp-rev-bar' + (i === 6 ? ' on' : '')} style={{ height: h + '%' }} /><small>{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</small></div>
              ))}
            </div>
            <div className="lp-rev-txn-head"><span>Recent Transactions</span><span className="lp-rev-faint">5 sales today</span></div>
            {[['SL','Sarah Lim','Sec 4 A-Math Bundle','S$24.90'],['DN','David Ng','E-Math Crash Course','S$12.90'],['SG','Sheryl Goh','Algebra Masterclass Pack','S$36.90']].map(([in_,n,d,p]) => (
              <div className="lp-rev-txn" key={n}>
                <span className="lp-rev-txn-av">{in_}</span>
                <div className="lp-rev-txn-main"><div className="lp-rev-txn-n">{n}</div><div className="lp-rev-txn-d">{d}</div></div>
                <div className="lp-rev-txn-r"><div className="lp-rev-txn-p">{p}</div><div className="lp-rev-txn-pay">PayNow ✓</div></div>
              </div>
            ))}
            <div className="lp-rev-payout"><span className="lp-rev-payout-ico">⚡</span><div><b>Instant PayNow Payout</b><div>Funds arrive in your bank within seconds - flat 1.3% fee</div></div></div>
          </div>
        </div>

        <div className="lp-built-row lp-built-row-rev">
          <div className="lp-panel lp-fm">
            <div className="lp-panel-head"><span className="lp-panel-title"><i className="lp-dot" /> File Manager</span><span className="lp-fm-count">3 Files</span></div>
            <div className="lp-fm-drop"><span className="lp-fm-drop-ico">⬆</span><div className="lp-fm-drop-t">Drop PDF files here to upload</div><div className="lp-fm-drop-d">or click to browse · PDF, up to 50MB</div></div>
            <div className="lp-fm-files-head"><span>Your Files</span><span className="lp-fm-wm">Watermark: ON ●</span></div>
            {[['📕','Sec4_AMath_Bundle.pdf','4.2 MB · 87 pages','24 sales'],['📙','H2_Physics_Secrets.pdf','6.8 MB · 120 pages','11 sales'],['📘','Algebra_Masterclass_Pack.pdf','3.1 MB · 64 pages','8 sales']].map(([ic,n,m,s]) => (
              <div className="lp-fm-file" key={n}>
                <span className="lp-fm-file-ic">{ic}</span>
                <div className="lp-fm-file-main"><div className="lp-fm-file-n">{n}</div><div className="lp-fm-file-m">{m} <span className="lp-fm-tag">WATERMARKED</span></div></div>
                <div className="lp-fm-file-r"><div className="lp-fm-live">● Live</div><div className="lp-fm-sales">{s}</div></div>
              </div>
            ))}
            <div className="lp-fm-wmset">
              <div className="lp-fm-wmset-head"><span>🛡 Watermark Settings</span><span className="lp-fm-enabled">Enabled</span></div>
              <div className="lp-fm-wmset-lbl">Stamp includes</div>
              <div className="lp-fm-wmset-val">Buyer name · Email · Transaction ID</div>
              <div className="lp-fm-license">LICENSED TO JONATHAN WONG · TXN#KS-20483</div>
            </div>
          </div>
          <div className="lp-built-text">
            <span className="lp-eyebrow lp-eyebrow-solid">02 / SECURITY FIRST</span>
            <h3>Your Notes.<br />Secured &amp;<br />Watermarked.</h3>
            <p>Stop worrying about your hard work being forwarded across Group Chats. Kios dynamically stamps each page of your PDF notes with the buyer's name, email, and transaction ID.</p>
          </div>
        </div>
      </section>

      <section className="lp-section lp-pricing" id="pricing">
        <h2>ZERO MONTHLY FEES.</h2>
        <p className="lp-section-sub">Join as a Founding Creator during our exclusive Beta phase and lock in zero subscription fees, forever.</p>
        <div className="lp-price-card">
          <div className="lp-price-eyebrow">Founding Creator Benefits</div>
          <div className="lp-price-num">S$0 <span>/ month</span></div>
          <div className="lp-price-sub">Free forever for the first 50 sign-ups</div>
          <div className="lp-price-list">
            {['Custom Brand Color Themes', 'Dynamic PDF Watermarking', 'Dedicated Support Channel'].map(x => (
              <div className="lp-price-row" key={x}><span>{x}</span><span className="lp-unlocked">✓ Unlocked</span></div>
            ))}
          </div>
          <button className="lp-cta lp-cta-lg lp-cta-full" onClick={onClaim}>Lock In My Spot for Free →</button>
        </div>
      </section>

      <section className="lp-section lp-final">
        <h2>JOIN 50 FOUNDING CREATORS</h2>
        <p className="lp-section-sub">Be among the first Singapore tutors to build their creator business on Kios.</p>
        <div className="lp-final-cta">
          <button className="lp-cta lp-cta-lg" onClick={onClaim}>Claim Your Free Spot →</button>
          <a className="lp-ghost" href="mailto:hello@kios.shop">Questions? hello@kios.shop</a>
        </div>
        <div className="lp-fine">Free forever · Live in 5 minutes · No credit card required</div>
      </section>

      <footer className="lp-foot">
        <div className="lp-foot-brand"><img className="lp-logo" src="/brand/kios-brand.svg" alt="Kios" /><span>Made in Singapore 🇸🇬</span></div>
        <div className="lp-foot-cols">
          <div><b>Platform</b><a href="#for-creators">About Us</a><a href="#pricing">Pricing</a><a href="mailto:hello@kios.shop?subject=Careers%20at%20Kios">Careers</a></div>
          <div><b>Legal</b><a>Terms of Service</a><a>Privacy Policy</a></div>
          <div><b>Support</b><a className="coral">WhatsApp Support →</a><a>Help Center</a></div>
        </div>
      </footer>
    </div>
  )
}

const FEATURES = [
  { i: '/brand/lp-globe.svg', t: 'Your own storefront (kios.shop/@you)', d: 'A beautifully responsive, fast-loading digital link-in-bio page built specifically for Singapore\'s private tutors and content creators.' },
  { i: '/brand/lp-book-open.svg', t: 'Sell courses, notes & digital products', d: 'Upload masterclasses, revision sheets, or mock exams. We secure your PDFs with automated dynamic buyer-identity watermarking.' },
  { i: '/brand/lp-users.svg', t: 'Collect contacts & broadcast to parents', d: 'Never lose an audience to algorithm shifts. Gather emails and phone numbers cleanly, with custom filter groups ready for updates.' },
  { i: '/brand/lp-zap.svg', t: 'PayNow auto-collection (coming soon)', d: 'Accept seamless PayNow QR payments automatically. Students register, pay, and get their files in seconds with zero admin required.' },
]
