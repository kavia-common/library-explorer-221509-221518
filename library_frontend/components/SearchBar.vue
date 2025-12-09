<template>
  <form class="search" role="search" @submit.prevent="onSubmit" aria-label="Book search">
    <label :for="id" class="sr-only">Search books</label>
    <div class="field card">
      <span class="icon" aria-hidden="true">🔎</span>
      <input
        :id="id"
        ref="inputEl"
        class="input"
        type="search"
        :placeholder="placeholder"
        :value="modelValue"
        @input="onInput"
        @keydown.escape="clear"
        autocomplete="off"
        aria-describedby="search-help"
      />
      <button
        v-if="modelValue"
        type="button"
        class="clear"
        @click="clear"
        aria-label="Clear search"
        title="Clear search"
      >✕</button>
    </div>
    <p id="search-help" class="help">Type to filter by title, author, or tags.</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  modelValue: string;
  placeholder?: string;
  id?: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string]
  submit: []
}>();

const inputEl = ref<HTMLInputElement | null>(null);

// PUBLIC_INTERFACE
function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
}
function clear() {
  emit('update:modelValue', '');
  inputEl.value?.focus();
}
function onSubmit() {
  emit('submit');
}
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0);
  white-space: nowrap; border: 0;
}
.search { width: 100%; }
.field {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.5rem 0.35rem 0.5rem;
  border-radius: 14px;
}
.icon {
  margin-left: 0.4rem;
  color: #475569;
}
.input {
  width: 100%;
  border: none;
  background: transparent;
  padding: 0.6rem 0.4rem;
  font-size: 1rem;
  color: var(--text);
}
.input::placeholder { color: #64748b; }
.input:focus { outline: none; }
.clear {
  background: transparent;
  border: none;
  color: #475569;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  cursor: pointer;
}
.clear:hover { background: rgba(2,6,23,0.06); }
.help {
  margin: 0.4rem 0 0 0.2rem;
  font-size: 0.85rem;
  color: #64748b;
}
</style>
