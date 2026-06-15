<template>
  <section id="opera" class="section-centered reveal">
    <p class="eyebrow">{{ $t('op_eyebrow') }}</p>
    <h2>{{ $t('op_h2') }}</h2>
    <p class="section-intro">{{ $t('op_intro') }}</p>
    <div class="infos">
      <div class="info-card stagger-child" v-for="i in 4" :key="i">
        <h4>{{ $t(`op_c${i}_t`) }}</h4>
        <p>{{ $t(`op_c${i}_p`) }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.infos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin-top: 0.5rem;
}
.info-card {
  background: var(--creme);
  border: 1px solid var(--or-pale);
  padding: 1.8rem;
  position: relative;
  border-radius: var(--r-md);
  transition: all 0.5s var(--ease-elegant);
  box-shadow: var(--shadow-subtle);
}
.info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
.info-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 1.8rem;
  right: 1.8rem;
  height: 3px;
  background: linear-gradient(90deg, var(--rose), var(--or-decorative), var(--sauge));
  border-radius: 3px;
}
.info-card h4 {
  font-size: 1.25rem;
  color: var(--bordeaux);
  margin-bottom: 0.5rem;
}

@media (max-width: 640px) {
  .infos {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
