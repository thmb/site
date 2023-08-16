<template>
<select @change="localize" :value="locale">
    <option v-for="{ code, name } in (locales as LocaleObject[])" :key="code" :value="code">
        {{ name }}
    </option>
</select>
</template>

<style scoped>
select {
    --at-apply: bg-transparent text-lg text-slate-300 hover:text-slate-100
}
</style>

<script setup lang="ts">
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

function localize(event: Event) {
    const target = event.target as HTMLInputElement
    router.push({ path: switchLocalePath(target.value) })
}
</script>