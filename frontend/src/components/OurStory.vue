<template>
  <section id="histoire" class="section-centered reveal">
    <p class="eyebrow">{{ $t('hist_eyebrow') }}</p>
    <h2>{{ $t('hist_h2') }}</h2>
    <p class="section-intro">{{ $t('hist_intro') }}</p>
    <div class="gallery">
      <figure class="frame stagger-child" v-for="(cap, idx) in ['photo_cap1', 'photo_cap2', 'photo_cap3']" :key="idx">
        <div class="ph">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M3 17l5-5 4 4 3-3 6 6"/></svg>
          <p>{{ $t('photo_placeholder') }}</p>
        </div>
        <figcaption>{{ $t(cap) }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}
.frame {
  background: var(--creme);
  padding: 0.9rem 0.9rem 2.2rem;
  border: 1px solid var(--or-pale);
  box-shadow: var(--shadow-card);
  transform: rotate(var(--tilt, 0deg));
  transition: transform 0.5s var(--ease-elegant), box-shadow 0.5s var(--ease-elegant);
  border-radius: var(--r-sm);
}
.frame:hover {
  transform: rotate(0) scale(1.03);
  box-shadow: var(--shadow-elevated);
}
.frame:nth-child(1) { --tilt: -1.6deg; }
.frame:nth-child(2) { --tilt: 0.8deg; }
.frame:nth-child(3) { --tilt: -1deg; }
.ph {
  aspect-ratio: 4/5;
  background: linear-gradient(150deg, var(--rose-pale), var(--or-pale) 55%, var(--sauge-pale));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  color: var(--bordeaux);
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
}
.ph p {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
figcaption {
  font-family: 'Pinyon Script', cursive;
  font-size: 1.4rem;
  color: var(--bordeaux);
  text-align: center;
  margin-top: 0.7rem;
}

@media (max-width: 700px) {
  .gallery {
    grid-template-columns: 1fr;
    max-width: 320px;
    margin: 0 auto;
    gap: 1.2rem;
  }
  .frame {
    transform: rotate(0) !important;
  }
}
</style>
