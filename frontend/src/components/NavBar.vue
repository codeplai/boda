<template>
  <nav class="navbar">
    <div class="mono">E&amp;G</div>
    <div class="actions">
      <div class="lang-switch">
        <button :class="{ active: $i18n.locale === 'fr' }" @click="$i18n.locale = 'fr'">FR</button>
        <button :class="{ active: $i18n.locale === 'es' }" @click="$i18n.locale = 'es'">ES</button>
      </div>
      <button class="burger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Menu">
        <span :class="{ x: menuOpen }"></span>
        <span :class="{ x: menuOpen }"></span>
        <span :class="{ x: menuOpen }"></span>
      </button>
    </div>
    <ul :class="{ open: menuOpen }" @click="menuOpen = false">
      <li><a href="#histoire">{{ $t('nav_histoire') }}</a></li>
      <li><a href="#programme">{{ $t('nav_programme') }}</a></li>
      <li><a href="#opera">{{ $t('nav_opera') }}</a></li>
      <li><a href="#rsvp">RSVP</a></li>
      <li><a href="#livredor">{{ $t('nav_livredor') }}</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(252, 250, 250, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--or-pale);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem clamp(1rem, 4vw, 3rem);
}
.mono {
  font-family: 'Pinyon Script', cursive;
  color: var(--bordeaux);
  font-size: 2rem;
  line-height: 1;
}
.actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.lang-switch {
  display: flex;
  border: 1px solid var(--or-pale);
  border-radius: var(--r-pill);
  overflow: hidden;
}
.lang-switch button {
  background: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 0.45rem 0.85rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  font-weight: 500;
  color: var(--bordeaux);
  cursor: pointer;
  transition: all 0.5s var(--ease-elegant);
}
.lang-switch button.active {
  background: var(--bordeaux);
  color: var(--creme);
}
ul {
  display: flex;
  gap: clamp(0.8rem, 2vw, 1.8rem);
  list-style: none;
  align-items: center;
}
a {
  color: var(--bordeaux);
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 400;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: all 0.5s var(--ease-elegant);
}
a:hover, a:focus-visible {
  border-color: var(--or);
  color: var(--or);
  outline: none;
}
.burger { display: none; }

@media (max-width: 860px) {
  .burger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    padding: 8px;
  }
  .burger span {
    display: block;
    width: 100%;
    height: 1.5px;
    background: var(--bordeaux);
    transition: all 0.4s var(--ease-elegant);
    transform-origin: center;
  }
  .burger span.x:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }
  .burger span.x:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .burger span.x:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }
  ul {
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    background: rgba(252, 250, 250, 0.96);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--or-pale);
    flex-direction: column;
    align-items: center;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s var(--ease-elegant), box-shadow 0.5s var(--ease-elegant);
  }
  ul.open {
    max-height: 400px;
    box-shadow: var(--shadow-elevated);
  }
  ul li { width: 100%; text-align: center; }
  ul a {
    display: block;
    padding: 1.15rem;
    font-size: 0.75rem;
    border-bottom: 1px solid var(--or-pale);
  }
  ul li:last-child a {
    border-bottom: none;
  }
}
</style>
