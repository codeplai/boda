<template>
  <section id="livredor" class="section-centered reveal">
    <p class="eyebrow subtitle">{{ $t('lo_eyebrow') }}</p>
    <h2>{{ $t('lo_h2') }}</h2>
    <p class="section-intro">{{ $t('lo_intro') }}</p>
    
    <div class="form-card">
      <Transition name="fade" mode="out-in">
        <form v-if="!submitted" @submit.prevent="submitGuestbook">
          <div class="field">
            <label for="g-nom">{{ $t('lo_nom') }}</label>
            <input type="text" id="g-nom" v-model="form.nom" :placeholder="$t('lo_nom_ph')" required>
          </div>
          <div class="field">
            <label for="g-msg">{{ $t('lo_msg') }}</label>
            <textarea id="g-msg" v-model="form.msg" :placeholder="$t('lo_msg_ph')" required></textarea>
          </div>
          
          <button class="btn-pill" type="submit" :disabled="sending">
            <span v-if="sending" class="spinner-icon">
              <!-- Inline loading spinner SVG -->
              <svg class="spinner" width="16" height="16" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              </svg>
            </span>
            {{ sending ? $t('lo_btn_sending') : $t('lo_btn') }}
          </button>
          
          <Transition name="slide">
            <div v-if="feedback.show" :class="['feedback', feedback.type]">{{ feedback.msg }}</div>
          </Transition>
        </form>

        <!-- Success Animation Card (Slide 5) -->
        <div v-else class="success-card">
          <div class="success-icon-container">
            <div class="success-circle">
              <span class="heart-icon">♥</span>
              <div class="sparkles">
                <span>✦</span><span>✦</span><span>✦</span><span>✦</span>
              </div>
            </div>
          </div>
          <h3>{{ $t('lo_success_title') }}</h3>
          <p class="success-msg">{{ $t('lo_success_msg1') }}</p>
          <p class="success-sub">{{ $t('lo_success_msg2') }}</p>
          <div class="success-heart">♥</div>
        </div>
      </Transition>
    </div>

    <!-- Confidentiality note below card (Slide 5) -->
    <p class="privacy-note">
      🔒 {{ $t('lo_privacy') }}
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sending = ref(false)
const submitted = ref(false)
const feedback = ref({ show: false, type: '', msg: '' })
const form = ref({ nom: '', msg: '' })

const submitGuestbook = async () => {
  if (!form.value.nom.trim() || !form.value.msg.trim()) {
    showFeedback('err', t('lo_need'))
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
      form.value = { nom: '', msg: '' }
    }, 1500)
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
        type: 'libro_de_oro',
        name: form.value.nom,
        message: form.value.msg
      })
    })

    // Con 'no-cors' la respuesta es opaca y no podemos leer response.json() ni verificar el resultado en JS.
    // Asumimos éxito si la promesa de fetch se resuelve sin lanzar un error de red.
    submitted.value = true
    form.value = { nom: '', msg: '' }
  } catch (error) {
    console.error('Error enviando firma:', error)
    showFeedback('err', t('lo_err_conexion', 'Error de conexión. Inténtelo de nuevo.'))
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
.subtitle {
  color: var(--or);
  font-weight: 500;
}

.form-card {
  background: var(--creme);
  border: 1px solid var(--or-pale);
  padding: clamp(1.6rem, 4vw, 3rem);
  box-shadow: var(--shadow-card);
  border-radius: var(--r-md);
  text-align: left;
  max-width: 580px;
  margin: 0 auto;
}

label {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--bordeaux);
  margin-bottom: 0.5rem;
  font-weight: 500;
  display: block;
}

input[type=text], textarea {
  width: 100%;
  border: 1px solid var(--or-pale);
  background: var(--ivoire);
  padding: 0.85rem 1rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: var(--ink);
  border-radius: var(--r-sm);
  transition: all 0.3s;
}

input:focus, textarea:focus {
  outline: 2px solid var(--or);
  outline-offset: 1px;
}

textarea {
  min-height: 120px;
  resize: vertical;
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
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
}

.btn-pill:hover:not(:disabled) {
  background: var(--bordeaux);
  box-shadow: var(--shadow-hover);
}

.btn-pill:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner-icon {
  display: inline-flex;
}

.spinner {
  animation: rotate 2s linear infinite;
}

.spinner .path {
  stroke: var(--creme);
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}

@keyframes dash {
  0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
}

.privacy-note {
  font-size: 0.8rem;
  color: #9A8385;
  margin-top: 1.4rem;
  text-align: center;
}

.feedback {
  margin-top: 1.2rem;
  padding: 0.9rem 1.2rem;
  font-size: 0.92rem;
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
</style>
