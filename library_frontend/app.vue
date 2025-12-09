<template>
  <div
    id="app-root"
    class="min-h-screen text-gray-900 bg-[color:var(--bg)]"
    :style="rootStyle"
  >
    <NuxtRouteAnnouncer />
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
// Define CSS variables for theme; values from Ocean Professional style guide
const rootStyle = `
  --primary: #2563EB;
  --secondary: #F59E0B;
  --success: #F59E0B;
  --error: #EF4444;
  --bg: #f9fafb;
  --surface: #ffffff;
  --text: #111827;
`;
</script>

<style>
/* Modern minimalist base */
:root {
  color-scheme: light;
}
html, body, #__nuxt {
  height: 100%;
}
body {
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
    Cantarell, Noto Sans, "Helvetica Neue", Arial, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background: var(--bg);
  color: var(--text);
}

/* Utility-like classes (lightweight, no Tailwind dependency) */
.min-h-screen { min-height: 100vh; }
.mx-auto { margin-left: auto; margin-right: auto; }
.max-w-7xl { max-width: 80rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.sm\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.lg\:px-8 { padding-left: 2rem; padding-right: 2rem; }
.py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }

/* Focus styles for accessibility */
:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--primary) 60%, white);
  outline-offset: 2px;
}

/* Smooth transitions */
* {
  transition: color 150ms ease, background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
}

/* Gradient helper class using style guide */
.ocean-surface {
  background: linear-gradient(135deg, rgba(59,130,246,0.10), #f9fafb 60%);
}

/* Card look */
.card {
  background: var(--surface);
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.06), 0 2px 8px rgba(2, 6, 23, 0.04);
}

/* Button base */
.btn {
  border: none;
  border-radius: 10px;
  padding: 0.6rem 0.9rem;
  font-weight: 600;
  cursor: pointer;
}
.btn-primary {
  background: var(--primary);
  color: white;
}
.btn-primary:hover {
  filter: brightness(1.05);
}
</style>
