<template>
  <NuxtLink
    class="card book-card"
    :to="`/books/${book.id}`"
    :aria-label="`View details for ${book.title} by ${book.author}`"
  >
    <div class="cover" :style="coverStyle" role="img" :aria-label="`${book.title} cover`"></div>
    <div class="content">
      <h3 class="title">{{ book.title }}</h3>
      <p class="author">by {{ book.author }}</p>
      <div class="meta">
        <span class="badge" v-for="tag in book.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
/**
 * PUBLIC_INTERFACE
 * BookCard presents a book summary as a navigable card.
 */
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  year?: number;
  cover?: string;
  tags: string[];
}

const props = defineProps<{
  book: Book
}>();

const coverStyle = computed(() => {
  const bg = props.book.cover
    ? `url('${props.book.cover}')`
    : `linear-gradient(135deg, rgba(37,99,235,0.12), rgba(245,158,11,0.10)), radial-gradient(circle at 30% 20%, rgba(37,99,235,0.18), transparent 50%)`;
  return `
    background-image: ${bg};
    background-size: cover;
    background-position: center;
  `;
});
</script>

<style scoped>
.book-card {
  display: grid;
  grid-template-rows: 180px 1fr;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  border: 1px solid rgba(2,6,23,0.06);
}
.book-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(2,6,23,0.1);
  border-color: rgba(37,99,235,0.2);
}
.cover {
  width: 100%;
}
.content {
  padding: 0.9rem 1rem 1rem 1rem;
}
.title {
  font-size: 1.05rem;
  margin: 0 0 0.2rem 0;
  font-weight: 800;
}
.author {
  margin: 0;
  color: #475569;
}
.meta {
  margin-top: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: rgba(37,99,235,0.10);
  color: #1e40af;
  border: 1px solid rgba(37,99,235,0.18);
  border-radius: 999px;
}
</style>
