<template>
  <header
    class="ocean-surface header"
    role="banner"
    aria-label="Library header"
  >
    <div class="container">
      <NuxtLink to="/" class="brand" aria-label="Go to library home">
        <span class="logo" aria-hidden="true">📚</span>
        <div class="title-wrap">
          <h1 class="title">Ocean Library</h1>
          <p class="subtitle">Discover. Read. Grow.</p>
        </div>
      </NuxtLink>

      <nav aria-label="Primary navigation" class="nav">
        <a
          class="nav-link"
          href="#content"
          @click.prevent="scrollToMain"
        >
          Skip to content
        </a>
        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
/**
 * PUBLIC_INTERFACE
 * AppHeader renders the site header with title, subtle gradient background,
 * and basic navigation. Includes a skip-to-content accessible link behavior.
 */
function scrollToMain() {
  const el = document.querySelector('main');
  if (el) {
    (el as HTMLElement).focus({ preventScroll: false });
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(2, 6, 23, 0.06);
  backdrop-filter: blur(6px);
}
.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
}
.logo {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 30% 30%, rgba(37, 99, 235, 0.25), transparent 60%),
              linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(245, 158, 11, 0.15));
  border-radius: 12px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 18px rgba(37,99,235,0.18);
}
.title-wrap {
  display: grid;
}
.title {
  font-size: 1.1rem;
  line-height: 1.2;
  margin: 0;
  font-weight: 800;
  letter-spacing: 0.2px;
}
.subtitle {
  margin: 0;
  font-size: 0.8rem;
  color: #475569;
}
.nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.nav-link {
  color: #0f172a;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 0.7rem;
  border-radius: 8px;
}
.nav-link:hover {
  background: rgba(37,99,235,0.08);
}
@media (max-width: 640px) {
  .subtitle { display: none; }
}
</style>
