<template>
  <section id="livredor" class="section-centered reveal">
    <p class="eyebrow">{{ $t('lo_eyebrow') }}</p>
    <h2>{{ $t('lo_h2') }}</h2>
    <p class="section-intro">{{ $t('lo_intro') }}</p>
    <div class="form-card">
      <form @submit.prevent="submitGuestbook">
        <div class="field">
          <label for="g-nom">{{ $t('lo_nom') }}</label>
          <input type="text" id="g-nom" v-model="form.nom" :placeholder="$t('lo_nom_ph')" required>
        </div>
        <div class="field">
          <label for="g-msg">{{ $t('lo_msg') }}</label>
          <textarea id="g-msg" v-model="form.msg" :placeholder="$t('lo_msg_ph')" required></textarea>
        </div>
        <button class="btn gold" type="submit" :disabled="sending">{{ sending ? $t('lo_btn_sending') : $t('lo_btn') }}</button>
        <Transition name="slide">
          <div v-if="feedback.show" :class="['feedback', feedback.type]">{{ feedback.msg }}</div>
        </Transition>
      </form>
    </div>
    <div class="guest-entries">
      <p v-if="entries.length === 0" class="empty-state">{{ $t('lo_empty') }}</p>
      <div v-for="entry in entries" :key="entry.id" class="entry stagger-child">
        <div class="who">{{ entry.nom }}</div>
        <p>{{ entry.msg }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sending = ref(false)
const feedback = ref({ show: false, type: '', msg: '' })
const form = ref({ nom: '', msg: '' })
const entries = ref([])

const submitGuestbook = () => {
  if (!form.value.nom || !form.value.msg) return showFeedback('err', t('lo_need'))
  sending.value = true
  setTimeout(() => {
    sending.value = false
    entries.value.unshift({ id: Date.now(), nom: form.value.nom, msg: form.value.msg })
    showFeedback('ok', t('lo_ok'))
    form.value = { nom: '', msg: '' }
  }, 800)
}
const showFeedback = (type, msg) => {
  feedback.value = { show: true, type, msg }
  setTimeout(() => feedback.value.show = false, 5000)
}
</script>

<style scoped>
.guest-entries {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  gap: 1.2rem;
  margin-top: 2.8rem;
}
.entry {
  background: var(--creme);
  border: 1px solid var(--or-pale);
  padding: 1.8rem 1.8rem 1.4rem;
  position: relative;
  border-radius: var(--r-md);
  transition: all 0.5s var(--ease-elegant);
  box-shadow: var(--shadow-subtle);
}
.entry:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
.entry::before {
  content: "\275d";
  position: absolute;
  top: 0.6rem;
  right: 1.2rem;
  font-size: 2.4rem;
  color: var(--rose-pale);
  font-family: serif;
}
.entry .who {
  font-family: 'Pinyon Script', cursive;
  font-size: 1.7rem;
  color: var(--bordeaux);
  margin-bottom: 0.3rem;
}
.empty-state {
  font-style: italic;
  color: #9A8385;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.15rem;
  text-align: center;
  grid-column: 1 / -1;
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
</style>
