"use client";

import { useState } from "react";

const experiences = [
  { number: "01", title: "Stay", text: "Rooms with room to breathe.", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85" },
  { number: "02", title: "Dine", text: "A taste of Accra, served all day.", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85" },
  { number: "03", title: "Unwind", text: "Make time for yourself.", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Alisa Hotel home"><span>ALISA</span><small>NORTH RIDGE · ACCRA</small></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#stay">Stay</a><a href="#dine">Dine</a><a href="#wellness">Wellness</a><a href="#meet">Meet</a><a href="#journal">Journal</a>
        </nav>
        <div className="header-actions"><a className="text-link" href="#booking">Book your stay <span>↗</span></a><button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu"><i></i><i></i></button></div>
      </header>

      {menuOpen && <div className="menu-overlay"><button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button><p className="eyebrow">ALISA / NORTH RIDGE</p><nav><a href="#stay" onClick={() => setMenuOpen(false)}>Stay <span>01</span></a><a href="#dine" onClick={() => setMenuOpen(false)}>Dine <span>02</span></a><a href="#wellness" onClick={() => setMenuOpen(false)}>Wellness <span>03</span></a><a href="#meet" onClick={() => setMenuOpen(false)}>Meet <span>04</span></a></nav><div className="menu-footer">21 Dr. Isert Road, North Ridge, Accra<br />+233 (0) 302 214 233</div></div>}

      <section id="top" className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content"><p className="eyebrow">A new kind of welcome / Accra, Ghana</p><h1>Where Accra<br /><em>meets Alisa.</em></h1><p className="hero-copy">A considered stay in the heart of the city, shaped by Ghanaian hospitality and a distinctly modern point of view.</p><div className="hero-ctas"><a className="button button-light" href="#booking">Book your stay <span>↗</span></a><a className="discover" href="#story"><span className="discover-line"></span>Discover Alisa</a></div></div>
        <div className="hero-meta"><span>05°34&apos;N 00°12&apos;W</span><span>Scroll to explore ↓</span></div>
      </section>

      <section id="booking" className="booking-wrap"><form className="booking-bar" onSubmit={(event) => event.preventDefault()}><label>Check in<input type="text" placeholder="DD / MM / YYYY" aria-label="Check in" /></label><label>Check out<input type="text" placeholder="DD / MM / YYYY" aria-label="Check out" /></label><label>Guests<select aria-label="Guests" defaultValue="2 guests"><option>2 guests</option><option>1 guest</option><option>3 guests</option><option>4 guests</option></select></label><button className="button button-dark" type="submit">Check availability <span>↗</span></button></form></section>

      <section id="story" className="intro section-pad"><div className="intro-heading"><p className="eyebrow">The Alisa experience</p><h2>A different<br /><em>kind of welcome.</em></h2></div><div className="intro-copy"><p>At Alisa, the details are never an afterthought. Morning light through the palms. A table set for one more. The quiet confidence of a place that knows exactly where it belongs.</p><a className="under-link" href="#experience">Our story <span>↗</span></a><div className="established"><strong>EST. 1999</strong><span>25+ years of<br />Ghanaian hospitality</span></div></div></section>

      <section id="experience" className="experience"><div className="experience-image" style={{ backgroundImage: `url(${experiences[activeExperience].image})` }} /><div className="experience-overlay" /><div className="experience-content"><p className="eyebrow">The Alisa way</p><div className="experience-title"><span>{experiences[activeExperience].number}</span><h2>{experiences[activeExperience].title}<em>.</em></h2></div><p>{experiences[activeExperience].text}</p><a className="under-link light-link" href="#stay">Explore the experience <span>↗</span></a></div><div className="experience-tabs">{experiences.map((experience, index) => <button key={experience.number} className={index === activeExperience ? "active" : ""} onClick={() => setActiveExperience(index)}><span>{experience.number}</span>{experience.title}</button>)}</div></section>

      <section id="stay" className="rooms section-pad"><div className="section-intro"><p className="eyebrow">Rest well</p><h2>Your room.<br /><em>Your rhythm.</em></h2><p>Thoughtful spaces for early starts, long lunches, and the luxury of doing very little.</p></div><div className="room-feature"><div className="room-photo" /><div className="room-details"><p className="eyebrow">The signature stay</p><h3>Ebony<br /><em>Suite</em></h3><p>A quiet, generous retreat with views across North Ridge. Designed for the kind of stay that becomes a memory.</p><div className="room-specs"><span>01 / 05<br /><b>Suite</b></span><span>King bed<br /><b>2 guests</b></span><span>City view<br /><b>Breakfast</b></span></div><a className="under-link" href="#booking">View the rooms <span>↗</span></a></div></div></section>

      <section id="dine" className="dining"><div className="dining-photo" /><div className="dining-copy"><p className="eyebrow">A table in Accra</p><h2>Taste<br /><em>Accra.</em></h2><p>From Ghanaian heritage to familiar favourites, every plate carries a sense of place.</p><a className="button button-light" href="#journal">Explore dining <span>↗</span></a></div></section>

      <section id="wellness" className="wellness section-pad"><div><p className="eyebrow">Time, well spent</p><h2>Make time<br /><em>for yourself.</em></h2></div><div className="wellness-grid"><div className="wellness-card active-card"><span>01 / Active</span><h3>Move<br /><em>with energy.</em></h3><p>Pool, gym and tennis for the days that call for momentum.</p></div><div className="wellness-card restore-card"><span>02 / Restore</span><h3>Slow<br /><em>the world down.</em></h3><p>Space to reset, breathe, and find your own quiet.</p></div></div></section>

      <section id="meet" className="events"><div className="events-copy"><p className="eyebrow">Gather well</p><h2>Bring people<br /><em>together.</em></h2><p>From focused boardrooms to celebrations that stay with you, Alisa gives every occasion its own sense of place.</p><a className="under-link" href="#contact">Plan your event <span>↗</span></a></div><div className="events-image"><span>01 — 04</span><strong>Ridge Arena</strong></div></section>

      <section id="journal" className="quote section-pad"><p className="eyebrow">The Alisa journal</p><blockquote>“The best stays are not remembered as a list of amenities. They are remembered as a feeling.”</blockquote><a className="under-link" href="#top">Read the journal <span>↗</span></a></section>

      <footer id="contact"><div className="footer-top"><div><div className="footer-brand">ALISA</div><p>Akwaaba, reimagined.<br />21 Dr. Isert Road, North Ridge, Accra.</p></div><div className="footer-links"><a href="#stay">Stay</a><a href="#dine">Dine</a><a href="#wellness">Wellness</a><a href="#meet">Events</a><a href="#journal">Journal</a></div><div className="footer-contact"><span>Make an enquiry</span><a href="#contact">[CONTACT EMAIL — VERIFY WITH ALISA]</a><a href="#contact">[CONTACT PHONE — VERIFY WITH ALISA]</a></div></div><div className="footer-bottom"><span>© 2026 Alisa Hotel North Ridge</span><span>Privacy / Terms / Accessibility</span><span>Official social links — verify with Alisa ↗</span></div></footer>
    </main>
  );
}
