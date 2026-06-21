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
    
    <GiftsSection />
    
    <div class="section-flourish reveal">
      <svg viewBox="0 0 200 40" fill="none"><path d="M0 20 Q50 40 100 20 Q150 0 200 20" stroke="currentColor" stroke-width="0.8"/><circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.6"/></svg>
    </div>
    
    <QuestionnaireSection />
    
    <div class="section-flourish reveal">
      <svg viewBox="0 0 200 40" fill="none"><path d="M0 20 Q50 0 100 20 Q150 40 200 20" stroke="currentColor" stroke-width="0.8"/><circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.6"/></svg>
    </div>
    
    <Guestbook />
    
    <!-- Redesigned 4-column Footer (Slide 6) -->
    <footer class="wedding-footer">
      <div class="footer-header">
        <span class="script footer-names">Emma &amp; Gerhard</span>
        <p class="footer-date">26 · 12 · 2026 — PARIS</p>
        <div class="footer-ornament">
          <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
            <path d="M0 24 Q40 0 80 24" stroke="currentColor" stroke-width="1" opacity="0.5"/>
            <circle cx="40" cy="8" r="2" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
        <p class="footer-intro-text">{{ $t('footer_intro') }}</p>
      </div>

      <div class="footer-grid">
        <!-- Col 1: El Gran Dia -->
        <div class="footer-col">
          <div class="col-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h4>{{ $t('footer_col1_title') }}</h4>
          <p class="col-subtitle">{{ $t('footer_col1_sub') }}</p>
          <p class="col-text">
            Ayuntamiento de Pantin<br>
            45 Avenue du Général Leclerc<br>
            93500 Pantin, Francia
          </p>
          <a class="col-link" href="https://maps.google.com/?q=Ayuntamiento+de+Pantin+45+avenue+du+General+Leclerc+93500+Pantin" target="_blank">
            {{ $t('footer_col1_link') }} ↗
          </a>
        </div>

        <!-- Col 2: Programa -->
        <div class="footer-col">
          <div class="col-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <h4>{{ $t('footer_col2_title') }}</h4>
          <p class="col-text">
            {{ $t('footer_col2_text') }}
          </p>
          <a class="col-link" href="#programme">
            {{ $t('footer_col2_link') }} ↗
          </a>
        </div>

        <!-- Col 3: Vuestra Presencia -->
        <div class="footer-col">
          <div class="col-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h4>{{ $t('footer_col3_title') }}</h4>
          <p class="col-text font-italic">
            "{{ $t('footer_col3_text') }}"
          </p>
          <div class="col-ornament">♥</div>
        </div>

        <!-- Col 4: Libro de Oro -->
        <div class="footer-col">
          <div class="col-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>
          <h4>{{ $t('footer_col4_title') }}</h4>
          <p class="col-text">
            {{ $t('footer_col4_text') }}
          </p>
          <a class="col-link" href="#livredor">
            {{ $t('footer_col4_link') }} ↗
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-separator">
          <span class="line-left"></span>
          <span class="heart-separator">♥</span>
          <span class="line-right"></span>
        </div>
        <div class="social-links">
          <!-- Instagram -->
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
            </svg>
          </a>
          <!-- WhatsApp -->
          <a href="https://wa.me/" target="_blank" aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a>
          <!-- Email -->
          <a href="mailto:contact@example.com" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import OurStory from './components/OurStory.vue'
import WeddingSchedule from './components/WeddingSchedule.vue'
import GiftsSection from './components/GiftsSection.vue'
import QuestionnaireSection from './components/QuestionnaireSection.vue'
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

.wedding-footer {
  background: var(--bordeaux-deep);
  color: var(--rose-pale);
  text-align: center;
  padding: clamp(3rem, 8vw, 5rem) clamp(1.5rem, 6vw, 4rem) clamp(2rem, 6vw, 3.5rem);
  margin-top: 2rem;
  border-top: 1px solid var(--or-decorative);
}

.footer-header {
  max-width: 600px;
  margin: 0 auto 3rem;
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

.footer-ornament {
  display: flex;
  justify-content: center;
  margin: 1.2rem 0;
  color: var(--or-decorative);
}

.footer-intro-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.85;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto 3rem;
  text-align: left;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.col-icon {
  color: var(--or-decorative);
  margin-bottom: 0.25rem;
  display: flex;
}

.footer-col h4 {
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--creme);
  font-weight: 500;
  margin: 0;
}

.col-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.95rem;
  font-style: italic;
  color: var(--or-decorative);
}

.col-text {
  font-size: 0.88rem;
  line-height: 1.6;
  opacity: 0.75;
}

.font-italic {
  font-style: italic;
}

.col-link {
  font-size: 0.88rem;
  color: var(--or-decorative);
  text-decoration: none;
  font-weight: 400;
  display: inline-flex;
  align-self: flex-start;
  transition: color 0.3s;
}

.col-link:hover {
  color: var(--creme);
}

.col-ornament {
  color: var(--or-decorative);
  font-size: 1.1rem;
}

.footer-bottom {
  max-width: 1100px;
  margin: 0 auto;
}

.footer-separator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.8rem;
}

.footer-separator .line-left,
.footer-separator .line-right {
  display: inline-block;
  flex: 1;
  max-width: 150px;
  height: 1px;
  background: rgba(184, 156, 114, 0.25);
}

.heart-separator {
  color: var(--or-decorative);
  font-size: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-links a {
  color: var(--rose-pale);
  opacity: 0.7;
  transition: all 0.3s;
  display: inline-flex;
}

.social-links a:hover {
  color: var(--or-decorative);
  opacity: 1;
  transform: translateY(-2px);
}

@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 580px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.8rem;
    text-align: center;
  }
  .col-link {
    align-self: center;
  }
  .col-icon {
    justify-content: center;
  }
}
</style>
