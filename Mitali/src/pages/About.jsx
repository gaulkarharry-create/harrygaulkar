import React from 'react'

export default function About() {
  return (
    <div style={{ minHeight: '80vh', background: 'linear-gradient(135deg, rgba(139,0,0,0.08) 0%, rgba(0,0,0,0.04) 100%)', padding: '3rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#8B0000', fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '700', textAlign: 'center' }}>About Mitali ❤️</h1>

        <div className="card p-4" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(139, 0, 0, 0.1)', borderRadius: '14px', boxShadow: '0 12px 40px rgba(26, 0, 0, 0.15)', lineHeight: '1.9' }}>
          <p style={{ fontSize: '1.1rem', color: '#1a0000', marginBottom: '1.5rem' }}>
            Hey, I'm <strong>Mitali</strong> — a passionate individual who believes in the power of genuine connections and meaningful moments. I've created this special corner of the digital world to express my feelings and celebrate what we share.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#1a0000', marginBottom: '1.5rem' }}>
            I'm someone who finds beauty in the smallest gestures — a genuine smile, heartfelt conversations, and those timeless moments we treasure forever. I dream bold, love fiercely, and believe that true happiness comes from sharing life with someone special. That's you.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#1a0000', marginBottom: '1.5rem' }}>
            This Valentine page is built with <strong>React</strong>, <strong>Vite</strong>, and <strong>Bootstrap</strong>, but what truly matters is that it's crafted with all the love and devotion I have for you. Every element here represents a moment I cherish and a feeling I want to share with you forever.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#1a0000', marginBottom: '1.5rem' }}>
            You inspire me to be the best version of myself every single day. Your presence brings warmth to my world, your touch brings comfort to my soul, and your love gives my life its deepest meaning. I'm forever grateful for you in ways my words could never fully express.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#1a0000', fontWeight: '600' }}>
            Forever yours with a devoted heart,<br />
            <span style={{ fontSize: '1.3rem' }}>Mitali 💕</span>
          </p>
        </div>
      </div>
    </div>
  )
}
