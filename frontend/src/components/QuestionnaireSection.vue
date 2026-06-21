<template>
  <section id="cuestionario" class="section-centered reveal">
    <div class="quest-container">
      <div class="quest-header-ornament">
        <span class="flourish-left"></span>
        <div class="quest-icon-wrapper">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
            <path d="M12 18h.01M9 6h6M9 10h6M9 14h3"/>
          </svg>
        </div>
        <span class="flourish-right"></span>
      </div>

      <p class="eyebrow subtitle">{{ $t('quest_eyebrow') }}</p>
      <h2>{{ $t('quest_h2') }}</h2>
      
      <div class="divider">
        <svg width="60" height="30" viewBox="0 0 60 30">
          <path d="M0 24 Q30 0 60 24" stroke="currentColor" stroke-width="1.4" fill="none"/>
          <circle cx="0" cy="24" r="2.2" fill="currentColor"/>
          <circle cx="30" cy="6.8" r="2.2" fill="currentColor"/>
          <circle cx="60" cy="24" r="2.2" fill="currentColor"/>
        </svg>
      </div>

      <!-- Facade Line Art -->
      <div class="facade-art">
        <svg viewBox="0 0 400 130" width="100%" height="auto" fill="none" stroke="var(--or-decorative)" stroke-width="0.8">
          <!-- Foundation -->
          <line x1="20" y1="120" x2="380" y2="120" stroke-width="1.5" />
          <line x1="30" y1="115" x2="370" y2="115" />
          
          <!-- Pillars & Bays -->
          <rect x="50" y="60" width="30" height="55" />
          <rect x="95" y="60" width="30" height="55" />
          <rect x="140" y="60" width="30" height="55" />
          <rect x="185" y="60" width="30" height="55" />
          <rect x="230" y="60" width="30" height="55" />
          <rect x="275" y="60" width="30" height="55" />
          <rect x="320" y="60" width="30" height="55" />

          <!-- Arches -->
          <path d="M50 60 Q65 45 80 60 M95 60 Q110 45 125 60 M140 60 Q155 45 170 60 M185 60 Q200 45 215 60 M230 60 Q245 45 260 60 M275 60 Q290 45 305 60 M320 60 Q335 45 350 60" />
          
          <!-- Upper Frieze & Cornice -->
          <rect x="40" y="35" width="320" height="15" />
          <line x1="35" y1="35" x2="365" y2="35" stroke-width="1.2" />
          <line x1="35" y1="50" x2="365" y2="50" />

          <!-- Dome (Palais Garnier style) -->
          <path d="M150 35 C150 10 250 10 250 35 Z" stroke-width="1.2" />
          <path d="M190 12 C190 2 210 2 210 12" />
          <circle cx="200" cy="2" r="1.5" fill="var(--or-decorative)" />
          
          <!-- Decorative statues/pediments -->
          <polygon points="50,35 65,22 80,35" />
          <polygon points="140,35 155,22 170,35" />
          <polygon points="230,35 245,22 260,35" />
          <polygon points="320,35 335,22 350,35" />
        </svg>
      </div>

      <div class="quest-content">
        <p class="quest-intro">{{ $t('quest_intro1') }}</p>
        <p class="quest-intro">{{ $t('quest_intro2') }}</p>
        
        <div class="heart-symbol">♥</div>

        <div class="form-card">
          <Transition name="fade" mode="out-in">
            <form v-if="!submitted" @submit.prevent="submitQuest">
              <!-- Question 1: Need tablet -->
              <div class="field">
                <label class="question-label">{{ $t('q_need_tablet') }}</label>
                <div class="choices-row">
                  <label class="choice-box" :class="{ selected: form.needTablet === 'yes' }">
                    <input type="radio" v-model="form.needTablet" value="yes">
                    <span class="choice-content">
                      <span class="check-dot"></span>
                      {{ $t('q_yes') }}
                    </span>
                  </label>
                  <label class="choice-box" :class="{ selected: form.needTablet === 'no' }">
                    <input type="radio" v-model="form.needTablet" value="no">
                    <span class="choice-content">
                      <span class="check-dot"></span>
                      {{ $t('q_no') }}
                    </span>
                  </label>
                </div>
              </div>

              <!-- Question 2: Language (conditional) -->
              <Transition name="slide">
                <div v-if="form.needTablet === 'yes'" class="field">
                  <label for="q-lang" class="question-label">{{ $t('q_lang_title') }}</label>
                  <p class="sub-label">{{ $t('q_lang_sub') }}</p>
                  <div class="select-wrapper">
                    <select id="q-lang" v-model="form.language" required>
                      <option value="" disabled selected>{{ $t('q_lang_placeholder') }}</option>
                      <option value="es">{{ $t('lang_es') }}</option>
                      <option value="fr">{{ $t('lang_fr') }}</option>
                      <option value="en">{{ $t('lang_en') }}</option>
                      <option value="de">{{ $t('lang_de') }}</option>
                      <option value="it">{{ $t('lang_it') }}</option>
                    </select>
                    <span class="select-arrow"></span>
                  </div>
                </div>
              </Transition>

              <!-- Question 3: Full Name -->
              <div class="field">
                <label for="q-name" class="question-label">{{ $t('q_name_title') }}</label>
                <p class="sub-label">{{ $t('q_name_sub') }}</p>
                <div class="input-icon-wrapper">
                  <span class="input-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </span>
                  <input type="text" id="q-name" v-model="form.name" :placeholder="$t('q_name_placeholder')" required>
                </div>
              </div>

              <button class="btn-pill" type="submit" :disabled="sending || !form.needTablet">
                <span class="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </span>
                {{ sending ? $t('q_btn_sending') : $t('q_btn') }}
              </button>

              <Transition name="slide">
                <div v-if="feedback.show" :class="['feedback', feedback.type]">{{ feedback.msg }}</div>
              </Transition>
            </form>

            <!-- Success Card -->
            <div v-else class="success-card">
              <div class="success-icon-container">
                <div class="success-circle">
                  <span class="heart-icon">♥</span>
                  <div class="sparkles">
                    <span>✦</span><span>✦</span><span>✦</span><span>✦</span>
                  </div>
                </div>
              </div>
              <h3>{{ $t('q_success_title') }}</h3>
              <p class="success-msg">{{ $t('q_success_msg1') }}</p>
              <p class="success-sub">{{ $t('q_success_msg2') }}</p>
              <div class="success-heart">♥</div>
            </div>
          </Transition>
        </div>

        <p class="privacy-note">
          🔒 {{ $t('quest_privacy') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sending = ref(false)
const submitted = ref(false)
const feedback = ref({ show: false, type: '', msg: '' })

const form = ref({
  needTablet: '',
  language: '',
  name: ''
})

const submitQuest = async () => {
  if (form.value.needTablet === 'yes' && !form.value.language) {
    showFeedback('err', t('q_err_lang'))
    return
  }
  if (!form.value.name.trim()) {
    showFeedback('err', t('q_err_name'))
    return
  }

  sending.value = true
  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL

  // If the script URL is the placeholder, fallback to simulated success for testing
  if (!scriptUrl || scriptUrl.includes('REEMPLAZAR_CON_TU_ID_DE_SCRIPT')) {
    console.warn('VITE_GOOGLE_SCRIPT_URL no configurada. Simulando envío local.')
    setTimeout(() => {
      sending.value = false
      submitted.value = true
    }, 1200)
    return
  }

  try {
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify({
        type: 'cuestionario',
        name: form.value.name,
        needTablet: form.value.needTablet === 'yes' ? 'Sí' : 'No',
        language: form.value.needTablet === 'yes' ? t(`lang_${form.value.language}`) : '-'
      })
    })

    // Con 'no-cors' la respuesta es opaca y no podemos leer response.json() ni verificar el resultado en JS.
    // Asumimos éxito si la promesa de fetch se resuelve sin lanzar un error de red.
    submitted.value = true
  } catch (error) {
    console.error('Error enviando datos:', error)
    showFeedback('err', t('q_err_conexion', 'Error de conexión. Inténtelo de nuevo.'))
  } finally {
    sending.value = false
  }
}

const showFeedback = (type, msg) => {
  feedback.value = { show: true, type, msg }
  setTimeout(() => feedback.value.show = false, 4000)
}
</script>

<style scoped>
.quest-container {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}

.quest-header-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--or-decorative);
}

.quest-icon-wrapper {
  background: var(--creme);
  border: 1px solid var(--or-pale);
  padding: 0.8rem;
  border-radius: 50%;
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

.facade-art {
  margin: 1.6rem auto;
  max-width: 380px;
  opacity: 0.75;
}

.quest-intro {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  line-height: 1.6;
  color: var(--bordeaux-deep);
  max-width: 580px;
  margin: 0 auto 0.8rem;
}

.heart-symbol {
  color: var(--or-decorative);
  font-size: 1.4rem;
  margin: 1rem 0;
}

.form-card {
  background: var(--creme);
  border: 1px solid var(--or-pale);
  padding: clamp(1.6rem, 4vw, 3rem);
  box-shadow: var(--shadow-card);
  border-radius: var(--r-md);
  text-align: left;
  max-width: 580px;
  margin: 1.5rem auto;
}

.question-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.35rem;
  color: var(--bordeaux);
  text-transform: none;
  letter-spacing: normal;
  margin-bottom: 0.4rem;
  font-weight: 500;
}

.sub-label {
  font-size: 0.8rem;
  color: #9A8385;
  margin-bottom: 0.6rem;
}

.choices-row {
  display: flex;
  gap: 1rem;
  margin-top: 0.6rem;
}

.choice-box {
  flex: 1;
  cursor: pointer;
  position: relative;
}

.choice-box input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.choice-content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1.5px solid var(--or-pale);
  padding: 1rem 1.2rem;
  background: var(--ivoire);
  border-radius: var(--r-pill);
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: var(--ink);
  transition: all 0.4s var(--ease-elegant);
}

.check-dot {
  width: 14px;
  height: 14px;
  border: 1px solid var(--or);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background: var(--creme);
}

.choice-box input:checked + .choice-content {
  background: var(--bordeaux);
  color: var(--creme);
  border-color: var(--bordeaux);
  box-shadow: var(--shadow-subtle);
}

.choice-box input:checked + .choice-content .check-dot {
  background: var(--or);
  border-color: var(--or);
}

.choice-box input:checked + .choice-content .check-dot::after {
  content: "";
  position: absolute;
  top: 4px; left: 4px;
  width: 4px; height: 4px;
  background: var(--creme);
  border-radius: 50%;
}

.select-wrapper {
  position: relative;
}

.select-wrapper select {
  width: 100%;
  border: 1px solid var(--or-pale);
  background: var(--ivoire);
  padding: 0.85rem 1rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: var(--ink);
  border-radius: var(--r-sm);
  appearance: none;
  cursor: pointer;
}

.select-arrow {
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0; height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid var(--bordeaux);
  pointer-events: none;
}

.input-icon-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--or);
  display: inline-flex;
}

.input-icon-wrapper input {
  padding-left: 2.8rem;
  border-radius: var(--r-sm);
}

.btn-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #a37f59;
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
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
}

.btn-pill:hover:not(:disabled) {
  background: var(--bordeaux);
  box-shadow: var(--shadow-hover);
}

.btn-pill:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.privacy-note {
  font-size: 0.8rem;
  color: #9A8385;
  margin-top: 1.4rem;
}

.feedback {
  margin-top: 1rem;
  padding: 0.8rem 1.1rem;
  font-size: 0.9rem;
  border-radius: var(--r-sm);
}

.feedback.ok {
  background: #EEF5E9;
  border: 1px solid var(--sauge);
  color: #3A5228;
}

.feedback.err {
  background: #FBF0EE;
  border: 1px solid var(--rose);
  color: #6B2F27;
}

/* Success Card CSS */
.success-card {
  text-align: center;
  padding: 1.5rem 0.5rem;
}

.success-icon-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.4rem;
}

.success-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--ivoire);
  border: 1px solid var(--or-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.success-circle .heart-icon {
  color: var(--or);
  font-size: 2.2rem;
}

.sparkles {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
}

.sparkles span {
  position: absolute;
  color: var(--or-decorative);
  font-size: 0.9rem;
  animation: float 2.5s infinite ease-in-out;
}

.sparkles span:nth-child(1) { top: -5px; left: 15px; animation-delay: 0.2s; }
.sparkles span:nth-child(2) { top: 15px; right: -8px; animation-delay: 0.5s; }
.sparkles span:nth-child(3) { bottom: -3px; left: 8px; animation-delay: 0.8s; }
.sparkles span:nth-child(4) { bottom: 12px; right: -5px; animation-delay: 1.1s; }

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
  50% { transform: translateY(-5px) scale(1.2); opacity: 1; }
}

.success-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.2rem;
  color: var(--bordeaux);
  margin-bottom: 0.8rem;
  font-weight: 500;
}

.success-msg {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: var(--bordeaux-deep);
  margin-bottom: 0.3rem;
}

.success-sub {
  font-size: 0.9rem;
  color: #9A8385;
}

.success-heart {
  color: var(--or);
  font-size: 1rem;
  margin-top: 1.5rem;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s var(--ease-elegant);
  max-height: 150px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 500px) {
  .choices-row {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
