<template>
  <div class="hero-zone" id="hero-zone">
    <div class="hero-content">
      <div class="invite-card reveal in">
        <p class="pre script">{{ $t('hero_pre') }}</p>
        <h1>Emma <span class="amp">&amp;</span> Gerhard</h1>
        <div class="divider">
          <svg width="60" height="30" viewBox="0 0 60 30">
            <path d="M0 24 Q30 0 60 24" stroke="currentColor" stroke-width="1.4" fill="none"/>
            <circle cx="0" cy="24" r="2.2" fill="currentColor"/><circle cx="30" cy="6.8" r="2.2" fill="currentColor"/><circle cx="60" cy="24" r="2.2" fill="currentColor"/>
          </svg>
        </div>
        <p class="eyebrow">{{ $t('hero_date') }}</p>
        <p class="lede">{{ $t('hero_lede') }}</p>
        <a class="btn" href="#rsvp">{{ $t('hero_btn') }}</a>
      </div>
      
      <div class="scroll-hint">
        <span>{{ $t('scroll_hint') }}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 9l6 6 6-6"/></svg>
      </div>
    </div>
    <div class="hero-image">
      <div class="img-wrapper">
        <img src="../assets/foto.jpeg" alt="Emma and Gerhard" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-zone {
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  background: var(--ivoire);
  overflow: hidden;
}

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: clamp(2rem, 5vw, 4rem);
}

.invite-card {
  text-align: center;
  max-width: 540px;
}

.hero-image {
  flex: 1;
  position: relative;
  max-width: 50%;
}

.img-wrapper {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  filter: brightness(0.92) sepia(0.08);
  animation: slowZoom 25s infinite alternate linear;
}

@keyframes slowZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.06); }
}

.pre {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--rose);
}

h1 {
  font-size: clamp(2.8rem, 7vw, 6rem);
  line-height: 1;
  color: var(--bordeaux);
}

.amp {
  font-family: 'Pinyon Script', cursive;
  font-size: clamp(2rem, 5vw, 4rem);
  color: var(--or-decorative);
  display: block;
  margin: 0.1em 0;
}

.lede {
  font-size: clamp(0.92rem, 2.5vw, 1.1rem);
  margin: 1.4rem auto 0;
  color: var(--bordeaux-deep);
  line-height: 1.8;
}

.scroll-hint {
  position: absolute;
  bottom: 3vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: var(--bordeaux);
  font-size: 0.68rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.7;
}

.scroll-hint svg {
  animation: bob 1.8s ease-in-out infinite;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  margin: 1.6rem auto;
  color: var(--or-decorative);
}

/* ─── Mobile ─── */
@media (max-width: 900px) {
  .hero-zone {
    flex-direction: column-reverse;
    min-height: auto;
  }
  .hero-image {
    max-width: 100%;
    flex: none;
    height: 50vh;
    height: 50dvh;
  }
  .img-wrapper {
    position: relative;
    height: 100%;
  }
  .hero-image img {
    object-position: center 25%;
  }
  .hero-content {
    min-height: auto;
    padding: clamp(2.5rem, 8vw, 4rem) 1.5rem 5rem;
  }
  .scroll-hint {
    bottom: 1.2rem;
  }
  h1 {
    font-size: clamp(2.6rem, 12vw, 4rem);
  }
}

@media (max-width: 400px) {
  .lede {
    font-size: 0.88rem;
    line-height: 1.7;
  }
}
</style>
