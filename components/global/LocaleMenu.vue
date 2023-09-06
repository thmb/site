<template>
<button id="trigger" data-dropdown-toggle="target" data-dropdown-trigger="hover" class="inline-flex items-center p-2 text-sm font-medium text-center bg-transparent rounded-lg" type="button">
    <!-- material-symbols:translate -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path :fill="currentColor" d="m11.9 22l4.55-12h2.1l4.55 12H21l-1.05-3.05H15.1L14 22h-2.1Zm3.8-4.8h3.6l-1.75-4.95h-.1L15.7 17.2ZM4 19l-1.4-1.4l5.05-5.05q-.95-1.05-1.663-2.175T4.75 8h2.1q.45.9.963 1.625T9.05 11.15q1.1-1.2 1.825-2.463T12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.775-1.425 3.45T10.45 12.6l2.4 2.45l-.75 2.05L9 14l-5 5Z"/>
    </svg>
</button>

<div id="target" class="z-10 hidden bg-white divide-y divide-slate-100 rounded-lg shadow dark:bg-slate-700 dark:divide-slate-600">
    <ul class="py-2 text-sm text-slate-700 dark:text-slate-200" aria-labelledby="trigger">
      <li v-for="{ code, name } in (locales as LocaleObject[])">
        <button @click="localize(code)" class="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white">{{ name }}</button>
      </li>
    </ul>
</div>
</template>

<script setup lang="ts">
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';

const currentColor = "white";
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();

function localize(code: string) {
    router.push({ path: switchLocalePath(code) });
};
</script>