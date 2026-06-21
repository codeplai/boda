<template>
  <section id="regalos" class="section-centered reveal">
    <div class="gifts-container">
      <div class="gift-header-ornament">
        <!-- SVG Gift Box Icon with flourishes -->
        <span class="flourish-left"></span>
        <div class="gift-icon-wrapper">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <path d="M12 2v20M2 11h20" />
            <path d="M12 7a2.5 2.5 0 0 0-2.5-2.5C8 4.5 7 6 12 11c5-5 4-6.5 2.5-6.5A2.5 2.5 0 0 0 12 7z" />
          </svg>
        </div>
        <span class="flourish-right"></span>
      </div>

      <p class="eyebrow subtitle">{{ $t('gifts_eyebrow') }}</p>
      <h2>{{ $t('gifts_h2') }}</h2>
      
      <div class="divider">
        <svg width="60" height="30" viewBox="0 0 60 30">
          <path d="M0 24 Q30 0 60 24" stroke="currentColor" stroke-width="1.4" fill="none"/>
          <circle cx="0" cy="24" r="2.2" fill="currentColor"/>
          <circle cx="30" cy="6.8" r="2.2" fill="currentColor"/>
          <circle cx="60" cy="24" r="2.2" fill="currentColor"/>
        </svg>
      </div>

      <div class="gifts-content">
        <p class="gifts-text">{{ $t('gifts_intro1') }}</p>
        <p class="gifts-text">{{ $t('gifts_intro2') }}</p>

        <button class="btn-pill" @click="showDetails = !showDetails" :aria-expanded="showDetails">
          <span class="btn-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </span>
          {{ showDetails ? $t('gifts_btn_hide') : $t('gifts_btn_show') }}
        </button>

        <Transition name="expand">
          <div v-if="showDetails" class="bank-details-card">
            <div class="bank-row">
              <span class="bank-label">{{ $t('bank_holder') }}</span>
              <span class="bank-value">Emma &amp; Gerhard</span>
            </div>
            <div class="bank-row">
              <span class="bank-label">IBAN</span>
              <div class="value-with-copy">
                <span class="bank-value mono-text">{{ iban }}</span>
                <button class="copy-btn" @click="copyIban" :title="$t('bank_copy')">
                  <span v-if="copied" class="copied-indicator">{{ $t('bank_copied') }}</span>
                  <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="bank-row">
              <span class="bank-label">BIC / SWIFT</span>
              <span class="bank-value mono-text">AGRIBRPPXXX</span>
            </div>
          </div>
        </Transition>

        <p class="secure-footer">
          <span class="lock-icon">🔒</span> {{ $t('gifts_secure') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showDetails = ref(false)
const copied = ref(false)
const iban = 'FR76 3000 2005 5512 3456 7890 123'

const copyIban = () => {
  navigator.clipboard.writeText(iban.replace(/\s+/g, ''))
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}
</script>

<style scoped>
.gifts-container {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}

.gift-header-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--or-decorative);
}

.gift-icon-wrapper {
  background: var(--creme);
  border: 1px solid var(--or-pale);
  padding: 0.8rem;
  border-radius: var(--r-circle, 50%);
  box-shadow: var(--shadow-subtle);
  display: inline-flex;
  color: var(--bordeaux);
}

.flourish-left, .flourish-right {
  display: inline-block;
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--or-decorative));
}

.flourish-right {
  background: linear-gradient(90deg, var(--or-decorative), transparent);
}

.subtitle {
  color: var(--or);
  font-weight: 500;
}

.gifts-content {
  margin-top: 1.5rem;
}

.gifts-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  line-height: 1.7;
  color: var(--bordeaux-deep);
  margin-bottom: 1rem;
}

.btn-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #a37f59; /* Solid brownish gold */
  color: var(--creme);
  border: none;
  padding: 0.95rem 2.2rem;
  border-radius: var(--r-pill);
  font-family: 'Jost', sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s var(--ease-elegant);
  box-shadow: var(--shadow-subtle);
  margin: 1.6rem 0;
}

.btn-pill:hover {
  background: var(--bordeaux);
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.btn-icon {
  display: inline-flex;
}

.secure-footer {
  font-size: 0.8rem;
  color: #9A8385;
  margin-top: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}

.bank-details-card {
  background: var(--creme);
  border: 1px solid var(--or-pale);
  border-radius: var(--r-md);
  padding: 1.6rem;
  max-width: 500px;
  margin: 0 auto 1.5rem;
  box-shadow: var(--shadow-card);
  text-align: left;
}

.bank-row {
  margin-bottom: 1rem;
}

.bank-row:last-child {
  margin-bottom: 0;
}

.bank-label {
  display: block;
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #9A8385;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.bank-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  color: var(--bordeaux);
  font-weight: 500;
}

.mono-text {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 1rem;
  letter-spacing: 0.05em;
}

.value-with-copy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.copy-btn {
  background: none;
  border: 1px solid var(--or-pale);
  color: var(--bordeaux);
  cursor: pointer;
  padding: 0.35rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s;
}

.copy-btn:hover {
  background: var(--rose-pale);
  border-color: var(--rose);
}

.copied-indicator {
  font-size: 0.7rem;
  font-family: 'Jost', sans-serif;
  color: var(--sauge);
  font-weight: 500;
}

/* Transitions */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s var(--ease-elegant);
  max-height: 250px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
</style>
