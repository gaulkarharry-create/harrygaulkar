import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleYes = () => {
    navigate('/valentine')
  }

  const handleNo = () => {
    setShowPopup(false)
  }

  return (
    <div style={{ minHeight: '80vh', background: 'linear-gradient(135deg, rgba(139,0,0,0.08) 0%, rgba(0,0,0,0.04) 100%)', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '700px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', color: '#8B0000', marginBottom: '2rem' }}>
          Hi Mitali! 💌
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#1a0000', lineHeight: '1.8' }}>
          A special Valentine's Day greeting from your friend Harshal, with a belated birthday wish from December. 🎂💕
        </p>
      </div>

      {showPopup && (
        <div className="surprise-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div className="surprise-card" style={{ background: 'linear-gradient(180deg, #fff, #fffaf0)', borderRadius: '16px', padding: '3rem 2rem', maxWidth: '480px', width: 'calc(100% - 40px)', boxShadow: '0 16px 50px rgba(26, 0, 0, 0.3)', border: '2px solid rgba(139, 0, 0, 0.2)', textAlign: 'center', animation: 'popIn 0.4s ease-out' }}>
            <h2 style={{ color: '#8B0000', fontSize: '1.8rem', marginBottom: '0.5rem' }}>🎁 Do you want a surprise?</h2>
            <p style={{ color: '#1a0000', fontSize: '1rem', marginBottom: '2rem' }}>I have something special for you...</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                className="btn btn-danger btn-lg"
                onClick={handleYes}
                style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', fontWeight: '600', borderRadius: '8px', background: '#DC143C' }}
              >
                Yes! ❤️
              </button>
              <button
                className="btn btn-outline-secondary btn-lg"
                onClick={handleNo}
                style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', fontWeight: '600', borderRadius: '8px', borderWidth: '2px' }}
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
