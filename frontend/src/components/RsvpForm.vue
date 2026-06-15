<template>
  <section id="rsvp" class="section-centered reveal">
    <p class="eyebrow">{{ $t('rsvp_eyebrow') }}</p>
    <h2>{{ $t('rsvp_h2') }}</h2>
    <p class="section-intro">{{ $t('rsvp_intro') }}</p>
    <div class="form-card">
      <form @submit.prevent="submitRsvp">
        <div class="field">
          <label for="r-nom">{{ $t('f_nom') }}</label>
          <input type="text" id="r-nom" v-model="form.nom" :placeholder="$t('f_nom_ph')" required>
        </div>
        <div class="field">
          <label>{{ $t('f_presence') }}</label>
          <div class="choices">
            <label class="choice">
              <input type="radio" v-model="form.presence" value="oui">
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                {{ $t('f_oui') }}
              </span>
            </label>
            <label class="choice">
              <input type="radio" v-model="form.presence" value="non">
              <span>{{ $t('f_non') }}</span>
            </label>
          </div>
        </div>

        <Transition name="slide">
          <div v-if="form.presence === 'oui'" class="conditional-fields">
            <div class="field">
              <label for="r-nb">{{ $t('f_nb') }}</label>
              <input type="number" id="r-nb" v-model="form.nb" min="1" max="10">
            </div>
            <div class="field">
              <label for="r-regime">{{ $t('f_regime') }}</label>
              <input type="text" id="r-regime" v-model="form.regime" :placeholder="$t('f_regime_ph')">
            </div>
            <div class="field">
              <label for="r-msg">{{ $t('f_msg') }}</label>
              <textarea id="r-msg" v-model="form.message" :placeholder="$t('f_msg_ph')"></textarea>
            </div>
          </div>
        </Transition>

        <button class="btn" type="submit" :disabled="sending || !form.presence">
          {{ sending ? $t('f_btn_sending') : $t('f_btn') }}
        </button>
        
        <Transition name="slide">
          <div v-if="feedback.show" :class="['feedback', feedback.type]">{{ feedback.msg }}</div>
        </Transition>
        <p class="privacy">{{ $t('f_privacy') }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sending = ref(false)
const feedback = ref({ show: false, type: '', msg: '' })

const form = ref({ nom: '', presence: '', nb: 1, regime: '', message: '' })

const submitRsvp = () => {
  if (!form.value.nom) return showFeedback('err', t('fb_need_name'))
  if (!form.value.presence) return showFeedback('err', t('fb_need_presence'))
  sending.value = true
  setTimeout(() => {
    sending.value = false
    showFeedback('ok', t('fb_ok').replace('{n}', form.value.nom.split(' ')[0]))
    form.value = { nom: '', presence: '', nb: 1, regime: '', message: '' }
  }, 1000)
}
const showFeedback = (type, msg) => {
  feedback.value = { show: true, type, msg }
  setTimeout(() => feedback.value.show = false, 5000)
}
</script>

<style scoped>
.choices {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.choice {
  flex: 1;
  min-width: min(160px, 100%);
  position: relative;
}
.choice input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.choice span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  text-align: center;
  border: 1.5px solid var(--or-pale);
  padding: 1.1rem 1.2rem;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 400;
  transition: all 0.5s var(--ease-elegant);
  background: var(--ivoire);
  border-radius: var(--r-pill);
}
.choice span svg {
  flex-shrink: 0;
  transition: all 0.5s var(--ease-elegant);
}
.choice input:checked + span {
  background: var(--bordeaux);
  color: var(--creme);
  border-color: var(--bordeaux);
  box-shadow: var(--shadow-hover);
  transform: scale(1.02);
}
.choice input:checked + span svg {
  stroke: var(--creme);
}
.choice input:focus-visible + span {
  outline: 2px solid var(--or);
  outline-offset: 3px;
}

.conditional-fields {
  overflow: hidden;
}

.feedback {
  margin-top: 1.4rem;
  padding: 1.1rem 1.4rem;
  font-size: 0.95rem;
  border-radius: var(--r-md);
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
.privacy {
  font-size: 0.8rem;
  color: #9A8385;
  margin-top: 1.2rem;
  text-align: center;
}

@media (max-width: 500px) {
  .choices {
    flex-direction: column;
    gap: 0.8rem;
  }
  .choice {
    min-width: 100%;
  }
}
</style>
