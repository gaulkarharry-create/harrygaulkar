import React, { useEffect, useState, useRef } from 'react'
import confetti from 'canvas-confetti'
import html2pdf from 'html2pdf.js'
import img1 from '../assets/valentine/Snapchat-305697313.jpg'
import img2 from '../assets/valentine/Snapchat-844251937 (2).jpg'
import song from '../assets/valentine/Haan Ke Haan Maharaj 128 Kbps.mp3'
import './Valentine.css'

const friendshipQuotes = [
  "You're the best friend anyone could ask for.",
  "Having you in my life is a true blessing.",
  "With you, life feels like a beautiful adventure.",
  "You bring out the best in me every single day.",
  "I'm grateful for all the memories we share.",
  "You inspire me to be a better person.",
  "Every moment with you is precious.",
  "True friends like you are the greatest treasure.",
  "You make the world a brighter place.",
  "I appreciate everything you do for me.",
  "You're an amazing friend and an awesome person.",
  "Thank you for being such an important part of my life."
]

export default function Valentine() {
  const [passwordMode, setPasswordMode] = useState(true)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [revealed, setRevealed] = useState(false)
  const [index, setIndex] = useState(0)
  const [redMode, setRedMode] = useState(false)
  const [notNowDisabled, setNotNowDisabled] = useState(false)
  const [notNowStyle, setNotNowStyle] = useState({})
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(friendshipQuotes[0])
  const images = [img1, img2]

  const moveIntervalRef = useRef(null)
  const moveTimeoutRef = useRef(null)
  const audioRef = useRef(null)
  const cardRef = useRef(null)
  const touchStartXRef = useRef(0)
  const [heartCount, setHeartCount] = useState(15)

  useEffect(() => {
    function updateHearts() {
      const w = window.innerWidth || 1024
      setHeartCount(w < 576 ? 6 : 15)
    }
    updateHearts()
    window.addEventListener('resize', updateHearts)
    return () => window.removeEventListener('resize', updateHearts)
  }, [])

  useEffect(() => {
    return () => {
      if (moveIntervalRef.current) clearInterval(moveIntervalRef.current)
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current)
    }
  }, [])

  const handlePrev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const handleNext = () => setIndex((i) => (i + 1) % images.length)

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (passwordInput === '14Feb2026') {
      setPasswordMode(false)
      setPasswordError(false)
    } else {
      setPasswordError(true)
      setPasswordInput('')
    }
  }

  const handleYes = () => {
    // Confetti burst with red and black colors
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DC143C', '#8B0000', '#FF0000', '#fff', '#1a0000']
    })
    // Autoplay music when she accepts
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0
        const p = audioRef.current.play()
        if (p && typeof p.then === 'function') p.catch(() => {})
        setMusicPlaying(true)
      } catch (e) {
        // ignore autoplay errors
      }
    }
    setShowIntro(false)
    setRevealed(true)
  }

  const startRoam = () => {
    // start roaming and red theme
    if (moveIntervalRef.current) clearInterval(moveIntervalRef.current)
    setRedMode(true)
    setNotNowDisabled(true)

    const moveOnce = () => {
      const w = window.innerWidth || 800
      const h = window.innerHeight || 600
      const x = Math.floor(Math.random() * Math.max(100, w - 160)) + 10
      const y = Math.floor(Math.random() * Math.max(50, h - 80)) + 10
      setNotNowStyle({ position: 'fixed', left: `${x}px`, top: `${y}px`, zIndex: 9999 })
    }

    moveOnce()
    moveIntervalRef.current = setInterval(moveOnce, 600)

    // stop after a few seconds and restore
    if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current)
    moveTimeoutRef.current = setTimeout(() => {
      if (moveIntervalRef.current) { clearInterval(moveIntervalRef.current); moveIntervalRef.current = null }
      setRedMode(false)
      setNotNowDisabled(false)
      setNotNowStyle({})
    }, 5000)
  }

  const handleNotNowEnter = () => {
    // Trigger roam when user tries to hover/catch the button
    startRoam()
  }

  // Touch handlers for slideshow (mobile swipe)
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX
    const diff = touchStartXRef.current - endX
    const threshold = 50
    if (diff > threshold) {
      handleNext()
    } else if (diff < -threshold) {
      handlePrev()
    }
  }

  const handleNo = () => setShowIntro(false)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {})
      }
      setMusicPlaying(!musicPlaying)
    }
  }

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * friendshipQuotes.length)
    setCurrentQuote(friendshipQuotes[randomIndex])
  }

  const downloadPDF = () => {
    const element = cardRef.current
    const opt = {
      margin: 10,
      filename: 'valentine-love-letter.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    }
    html2pdf().set(opt).from(element).save()
  }

  const message = `Dear Mitali,

I wanted to reach out on Valentine's Day to celebrate the wonderful friend you've been to me. You're an amazing person, and I'm grateful for your friendship.

I also want to give you a belated birthday wish from December! I'm sorry I couldn't wish you back then, but I want you to know how much you mean to me. Your laughter, kindness, and the special moments we've shared are things I truly value. You bring so much light into the lives of those around you.

This Valentine's Day, I'm proposing that we celebrate our friendship and all the moments we'll create together. Thank you for being such an important person in my life.

With warm wishes and gratitude,
Harshal`

  // Password overlay
  if (passwordMode) {
    return (
      <div className="valentine-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="password-overlay-card">
          <h2>❤️ This message is for someone very special</h2>
          <p>Enter the password to unlock this Valentine's message</p>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              placeholder="Enter password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className={`password-input ${passwordError ? 'error' : ''}`}
              autoFocus
            />
            <button type="submit" className="btn btn-danger">Unlock 💕</button>
          </form>
          {passwordError && <p className="password-error">Incorrect password. Try again! 💔</p>}
          <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '1rem' }}>Hint: My Valentine's message date format (e.g., 14Feb2026)</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`valentine-page ${redMode ? 'red-mode-active' : ''}`}>
      <div className="decor" aria-hidden="true">
        <div className="hearts" />
        <div className="falling-hearts">
          {[...Array(heartCount)].map((_, i) => (
            <div key={i} className="falling-heart" style={{ left: `${Math.random() * 100}%`, animationDelay: `${i * 0.3}s` }}>❤️</div>
          ))}
        </div>
      </div>

      {/* Music control */}
      <button className="music-toggle" onClick={toggleMusic} title={musicPlaying ? 'Pause Music' : 'Play Music'}>
        {musicPlaying ? '🔊' : '🔇'} Music
      </button>
      <audio ref={audioRef} loop>
        <source src={song} type="audio/mpeg" />
      </audio>

      {showIntro && (
        <div className={`intro-overlay ${redMode ? 'red-mode' : ''}`} role="dialog" aria-modal="true">
          <div className={`intro-card text-center p-4 ${redMode ? 'card-red' : ''}`}>
            <h2 className="mb-3">Be My Valentine Friend? 💌</h2>
            <p className="lead mb-4">I'd love to celebrate you this Valentine's Day! 💕</p>

            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-danger btn-lg" onClick={handleYes}>Yes ❤️</button>
              <button
                className={`btn btn-outline-secondary btn-lg not-now-btn ${redMode ? 'not-now-red' : ''}`}
                onClick={handleNo}
                onMouseEnter={handleNotNowEnter}
                style={notNowStyle}
                disabled={notNowDisabled}
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`valentine-card card mx-auto mt-4 p-4 pastel-card ${showIntro ? 'blurred' : ''}`} ref={cardRef}>
        <h1 className="text-center mb-3">Happy Valentine's Day ❤️</h1>

        <div className="toolbar d-flex justify-content-end gap-2 mb-3 flex-wrap">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
          >
            Copy Link 🔗
          </button>

          <button className="btn btn-outline-secondary btn-sm" onClick={downloadPDF}>
            Download PDF 📄
          </button>

          <button className="btn btn-primary btn-sm" onClick={() => setRevealed((r) => !r)}>
            {revealed ? 'Hide' : 'Reveal'} Message 💌
          </button>
        </div>

        {/* Love Quotes Section */}
        <div className="love-quotes-section mb-4 p-3" style={{ background: 'rgba(139, 0, 0, 0.08)', borderRadius: '10px', borderLeft: '4px solid #DC143C' }}>
          <p className="sparkle-text" style={{ fontSize: '1.2rem', color: '#8B0000', fontStyle: 'italic', marginBottom: '0.5rem' }}>
            ✨ {currentQuote} ✨
          </p>
          <button className="btn btn-sm btn-outline-danger" onClick={getNewQuote}>Get Another Quote 💭</button>
        </div>

        {/* Photo Slideshow */}
        {images.length > 0 && (
          <div className="slideshow-section mb-4" style={{ textAlign: 'center' }}>
              <div className="slideshow-container" style={{ position: 'relative', maxWidth: '100%', margin: 'auto', background: '#f8f8f8', borderRadius: '10px' }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={cardRef}>
              <img src={images[index]} alt={`Memory ${index + 1}`} style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
              <div className="slideshow-controls" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
                <button className="btn btn-sm btn-light" onClick={handlePrev} style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}>❮</button>
                <span style={{ color: '#fff', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '5px', alignSelf: 'center', fontSize: '0.9rem' }}>{index + 1} / {images.length}</span>
                <button className="btn btn-sm btn-light" onClick={handleNext} style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}>❯</button>
              </div>
            </div>
          </div>
        )}

        <div className={`message ${revealed ? 'show' : ''}`}>
          {revealed ? (
            message.split('\n\n').map((p, i) => (
              <p key={i} className="sparkle-text">{p}</p>
            ))
          ) : (
            <p className="lead">Click "Reveal Message" to see the full letter.</p>
          )}
        </div>
      </div>
    </div>
  )
}
