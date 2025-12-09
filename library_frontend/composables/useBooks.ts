import { ref, computed } from 'vue';

export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  year?: number;
  cover?: string;
  tags: string[];
};

// Placeholder dataset (in-memory)
const initialBooks: Book[] = [
  {
    id: '1',
    title: 'The Ocean at the End of the Lane',
    author: 'Neil Gaiman',
    description:
      'A haunting and beautiful tale of memory and magic that explores childhood and the power of stories.',
    year: 2013,
    tags: ['Fiction', 'Fantasy', 'Bestseller'],
  },
  {
    id: '2',
    title: 'Deep Work',
    author: 'Cal Newport',
    description:
      'Rules for focused success in a distracted world, exploring strategies for mastering deep work.',
    year: 2016,
    tags: ['Non-fiction', 'Productivity', 'Focus'],
  },
  {
    id: '3',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    description:
      'A handbook of agile software craftsmanship that teaches writing clean, maintainable code.',
    year: 2008,
    tags: ['Programming', 'Best Practices', 'Software'],
  },
  {
    id: '4',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    description:
      'Timeless practical advice on the craft of software development.',
    year: 1999,
    tags: ['Programming', 'Career', 'Craft'],
  },
  {
    id: '5',
    title: 'Atomic Habits',
    author: 'James Clear',
    description:
      'An easy and proven way to build good habits and break bad ones through small, incremental changes.',
    year: 2018,
    tags: ['Self-help', 'Habits', 'Behavior'],
  },
];

const booksRef = ref<Book[]>(initialBooks);

// PUBLIC_INTERFACE
export function useBooks() {
  /**
   * Provides reactive access to the list of books and filtering utilities.
   * Reads public environment variables for future API integration without depending on a backend.
   */
  const runtimeConfig = useRuntimeConfig();
  const apiBase = runtimeConfig.public?.apiBase || process.env.NUXT_PUBLIC_API_BASE || '';
  const backendUrl = runtimeConfig.public?.backendUrl || process.env.NUXT_PUBLIC_BACKEND_URL || '';
  const wsUrl = runtimeConfig.public?.wsUrl || process.env.NUXT_PUBLIC_WS_URL || '';

  const all = computed(() => booksRef.value);

  // PUBLIC_INTERFACE
  function search(term: string) {
    const q = term.trim().toLowerCase();
    if (!q) return all.value;
    return all.value.filter((b) => {
      return (
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }

  // PUBLIC_INTERFACE
  function byId(id: string) {
    return all.value.find((b) => b.id === id) || null;
  }

  return {
    apiBase,
    backendUrl,
    wsUrl,
    books: all,
    search,
    byId,
  };
}
