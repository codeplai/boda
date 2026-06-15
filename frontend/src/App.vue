<template>
  <div class="app-container">
    <NavBar />
    <HeroSection />
    
    <div class="section-flourish reveal">
      <svg viewBox="0 0 200 40" fill="none"><path d="M0 20 Q50 0 100 20 Q150 40 200 20" stroke="currentColor" stroke-width="0.8"/><circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.6"/></svg>
    </div>
    
    <OurStory />
    
    <div class="section-flourish reveal">
      <svg viewBox="0 0 200 40" fill="none"><path d="M0 20 Q50 40 100 20 Q150 0 200 20" stroke="currentColor" stroke-width="0.8"/><circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.6"/></svg>
    </div>
    
    <WeddingSchedule />
    
    <div class="section-flourish reveal">
      <svg viewBox="0 0 200 40" fill="none"><path d="M0 20 Q50 0 100 20 Q150 40 200 20" stroke="currentColor" stroke-width="0.8"/><circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.6"/></svg>
    </div>
    
    <VenueInfo />
    
    <div class="section-flourish reveal">
      <svg viewBox="0 0 200 40" fill="none"><path d="M0 20 Q50 40 100 20 Q150 0 200 20" stroke="currentColor" stroke-width="0.8"/><circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.6"/></svg>
    </div>
    
    <RsvpForm />
    
    <div class="section-flourish reveal">
      <svg viewBox="0 0 200 40" fill="none"><path d="M0 20 Q50 0 100 20 Q150 40 200 20" stroke="currentColor" stroke-width="0.8"/><circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.6"/></svg>
    </div>
    
    <Guestbook />
    
    <footer>
      <span class="script footer-names">Emma &amp; Gerhard</span>
      <p class="footer-date">26 · 12 · 2026 — PARIS</p>
      <div class="footer-ornament">
        <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
          <path d="M0 24 Q40 0 80 24" stroke="currentColor" stroke-width="1" opacity="0.5"/>
          <circle cx="40" cy="8" r="2" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>
      <p class="footer-sub">{{ $t('footer_txt') }}</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import OurStory from './components/OurStory.vue'
import WeddingSchedule from './components/WeddingSchedule.vue'
import VenueInfo from './components/VenueInfo.vue'
import RsvpForm from './components/RsvpForm.vue'
import Guestbook from './components/Guestbook.vue'

onMounted(() => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        io.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
  }, 100)
})
</script>

<style>
.section-flourish {
  color: var(--or-decorative);
}

footer {
  background: var(--bordeaux);
  color: var(--rose-pale);
  text-align: center;
  padding: clamp(3rem, 8vw, 5rem) clamp(1.5rem, 6vw, 4rem) clamp(2rem, 6vw, 3.5rem);
  margin-top: 1rem;
}
.footer-names {
  font-size: clamp(2.4rem, 7vw, 3.8rem);
  color: var(--creme);
  display: block;
}
.footer-date {
  font-size: 0.82rem;
  letter-spacing: 0.25em;
  margin-top: 0.8rem;
}
.footer-sub {
  opacity: 0.6;
  letter-spacing: 0.04em;
  max-width: 26rem;
  margin: 0 auto;
  font-size: 0.88rem;
}
.footer-ornament {
  display: flex;
  justify-content: center;
  margin: 1.6rem 0;
  color: var(--or-decorative);
}
</style>
