<template>
  <article class="card detail" :aria-labelledby="`title-${book?.id}`">
    <header class="head">
      <NuxtLink class="back" to="/" aria-label="Back to library">
        ← Back
      </NuxtLink>
      <h2 :id="`title-${book?.id}`" class="title">{{ book?.title }}</h2>
      <p class="author">by {{ book?.author }}</p>
    </header>

    <div class="body">
      <div class="cover" :style="coverStyle" role="img" :aria-label="`${book?.title} cover`"></div>
      <div class="info">
        <p class="desc">{{ book?.description }}</p>
        <dl class="facts" v-if="book?.year">
          <dt>Year</dt>
          <dd>{{ book?.year }}</dd>
        </dl>
        <div class="tags" v-if="book?.tags?.length">
          <span class="badge" v-for="tag in book!.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useBooks } from '~/composables/useBooks';

definePageMeta({
  layout: 'default',
});

useHead({
  titleTemplate: (t) => t ? `${t} · Ocean Library` : 'Ocean Library',
});

const route = useRoute();
const { byId } = useBooks();
const book = computed(() => byId(String(route.params.id)));

const coverStyle = computed(() => {
  if (!book.value) return '';
  const bg = book.value.cover
    ? `url('${book.value.cover}')`
    : `linear-gradient(135deg, rgba(37,99,235,0.12), rgba(245,158,11,0.10)),
       radial-gradient(circle at 70% 40%, rgba(37,99,235,0.18), transparent 50%)`;
  return `
    background-image: ${bg};
    background-size: cover;
    background-position: center;
  `;
});
</script>

<style scoped>
.detail {
  border: 1px solid rgba(2,6,23,0.06);
  overflow: hidden;
}
.head {
  padding: 1rem 1rem 0.25rem 1rem;
}
.back {
  display: inline-block;
  text-decoration: none;
  color: #1e3a8a;
  font-weight: 700;
  background: rgba(37,99,235,0.08);
  padding: 0.3rem 0.55rem;
  border-radius: 8px;
}
.back:hover { background: rgba(37,99,235,0.12); }
.title {
  margin: 0.6rem 0 0 0;
  font-size: 1.6rem;
  font-weight: 800;
}
.author {
  margin: 0.2rem 0 0.6rem 0;
  color: #475569;
}
.body {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  padding: 0 1rem 1rem 1rem;
}
.cover {
  height: 220px;
  border-radius: 12px;
}
.info .desc {
  margin: 0.2rem 0 0.8rem 0;
}
.facts {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.25rem 0.8rem;
  margin: 0 0 0.8rem 0;
}
.facts dt {
  color: #475569;
}
.tags {
  display: flex; flex-wrap: wrap; gap: 0.4rem;
}
.badge {
  font-size: 0.78rem;
  padding: 0.28rem 0.6rem;
  background: rgba(37,99,235,0.10);
  color: #1e40af;
  border: 1px solid rgba(37,99,235,0.18);
  border-radius: 999px;
}
@media (min-width: 768px) {
  .body {
    grid-template-columns: 280px 1fr;
    align-items: start;
  }
  .cover {
    height: 320px;
  }
}
</style>
