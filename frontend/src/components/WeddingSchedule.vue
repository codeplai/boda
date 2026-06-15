<template>
  <section id="programme" class="section-centered reveal">
    <p class="eyebrow">{{ $t('prog_eyebrow') }}</p>
    <h2>{{ $t('prog_h2') }}</h2>
    <p class="section-intro">{{ $t('prog_intro') }}</p>
    <div class="programme">
      <div class="programme-inner">
        <div class="programme-head">
          <p class="eyebrow">{{ $t('prog_date') }}</p>
          <span class="script head-names">Emma &amp; Gerhard</span>
          <div class="divider">
            <svg width="60" height="30" viewBox="0 0 60 30">
              <path d="M0 24 Q30 0 60 24" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <circle cx="0" cy="24" r="2.2" fill="currentColor"/><circle cx="30" cy="6.8" r="2.2" fill="currentColor"/><circle cx="60" cy="24" r="2.2" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <div class="acte stagger-child" v-for="i in 4" :key="i">
          <div class="label">{{ $t(`acte${i-1}_label`) }}</div>
          <div>
            <p class="heure">{{ $t(`acte${i-1}_heure`) }}</p>
            <h4>{{ $t(`acte${i-1}_titre`) }}</h4>
            <p>{{ $t(`acte${i-1}_txt`) }}</p>
            <span class="note" v-if="$te(`acte${i-1}_note`)">{{ $t(`acte${i-1}_note`) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programme {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(14px);
  border: 1px solid var(--or-pale);
  box-shadow: var(--shadow-card);
  border-radius: var(--r-md);
}
.programme-inner {
  padding: clamp(1.8rem, 5vw, 3.5rem) clamp(1.2rem, 5vw, 3.5rem);
}
.programme-head {
  text-align: center;
  padding-bottom: 1.4rem;
}
.head-names {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  color: var(--rose);
  display: block;
  margin-top: 0.2rem;
}
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.4rem auto;
  color: var(--or-decorative);
}
.acte {
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  gap: 1.4rem;
  padding: 1.6rem 0;
  border-bottom: 1px dashed var(--or-pale);
  align-items: baseline;
  transition: background-color 0.4s var(--ease-elegant);
  border-radius: var(--r-sm);
}
.acte:hover {
  background-color: rgba(240, 235, 225, 0.35);
}
.acte:last-child { border-bottom: none; }
.acte .label {
  font-family: 'Pinyon Script', cursive;
  font-size: 1.8rem;
  color: var(--or-decorative);
}
.acte .heure {
  font-size: 0.72rem;
  letter-spacing: 0.26em;
  color: var(--bordeaux);
  font-weight: 500;
  margin-bottom: 0.2rem;
}
.acte h4 {
  font-size: 1.35rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: var(--bordeaux-deep);
}
.acte .note {
  display: inline-block;
  margin-top: 0.55rem;
  background: var(--rose-pale);
  padding: 0.35rem 1rem;
  font-size: 0.8rem;
  color: var(--bordeaux-deep);
  border-radius: var(--r-pill);
}

@media (max-width: 640px) {
  .acte {
    grid-template-columns: 1fr;
    gap: 0.2rem;
    padding: 1.3rem 0;
  }
  .acte .label {
    font-size: 1.5rem;
  }
}
</style>
