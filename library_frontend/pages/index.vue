<template>
  <section aria-labelledby="library-title">
    <header class="section-header">
      <h2 id="library-title" class="section-title">Browse Library</h2>
      <p class="section-subtitle">Find your next favorite read.</p>
    </header>

    <div class="card toolbar">
      <SearchBar v-model="query" placeholder="Search by title, author, or tag…" @submit="noop" />
      <div class="count" role="status" aria-live="polite">
        <strong>{{ filtered.length }}</strong> result{{ filtered.length === 1 ? '' : 's' }}
      </div>
    </div>

    <TransitionGroup name="grid" tag="div" class="grid">
      <BookCard v-for="b in filtered" :key="b.id" :book="b" />
    </TransitionGroup>

    <p v-if="!filtered.length" class="empty" role="status" aria-live="polite">
      No books match your search. Try a different term.
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SearchBar from '~/components/SearchBar.vue';
import BookCard from '~/components/BookCard.vue';
import { useBooks } from '~/composables/useBooks';

definePageMeta({
  layout: 'default',
});

useHead({
  title: 'Ocean Library',
  meta: [
    { name: 'description', content: 'Browse a curated collection of books in the Ocean Library.' },
  ],
});

const { books, search } = useBooks();
const query = ref('');

const filtered = computed(() => search(query.value));

function noop() {
  // Submit on search is a no-op since filtering is live.
}
</script>

<style scoped>
.section-header {
  margin-bottom: 0.8rem;
}
.section-title {
  font-size: 1.4rem;
  margin: 0;
  font-weight: 800;
}
.section-subtitle {
  margin: 0.2rem 0 0 0;
  color: #475569;
}
.toolbar {
  display: grid;
  gap: 0.5rem;
  padding: 0.8rem;
  margin: 0.8rem 0 1.2rem 0;
  border: 1px solid rgba(2,6,23,0.06);
}
.count {
  font-size: 0.95rem;
  color: #334155;
}
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
}
.grid > * {
  grid-column: span 12;
}
@media (min-width: 640px) {
  .grid > * { grid-column: span 6; }
}
@media (min-width: 1024px) {
  .grid > * { grid-column: span 3; }
}

/* Transitions */
.grid-enter-active, .grid-leave-active {
  transition: all 180ms ease;
}
.grid-enter-from, .grid-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(0.98);
}

.empty {
  margin-top: 1rem;
  color: #475569;
}
</style>
