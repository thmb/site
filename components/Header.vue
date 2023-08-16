<template>
    <nav class="fixed w-full top-0 left-0 z-20 bg-thau">
        <div class="container flex flex-wrap items-center justify-between mx-auto px-4 py-6 lg:py-5">

            <div
                class="flex items-center text-xl sm:text-2xl lg:text-4xl lg:tracking-tight xl:tracking-normal text-slate-300 hover:text-slate-100">
                <button type="button" @click="toggle">
                    <i class="i-carbon-menu inline-block flex lg:hidden mr-2"></i>
                </button>
                <nuxt-link :to="localePath('/')">
                    THIAGO MADUREIRA BRAGA
                </nuxt-link>
            </div>

            <div class="flex items-center lg:order-2">
                <ColorMode/>
                <LocaleMenu/>
            </div>

            <div class="items-center w-full lg:flex lg:w-auto lg:order-1" :class="menu ? 'flex' : 'hidden'">
                <ul>
                    <nuxt-link :to="localePath('#skills')">
                        <li>{{ $t("component.header.skills") }}</li>
                    </nuxt-link>
                    <nuxt-link :to="localePath('#experience')">
                        <li>{{ $t("component.header.experience") }}</li>
                    </nuxt-link>
                    <nuxt-link :to="localePath('#education')">
                        <li>{{ $t("component.header.education") }}</li>
                    </nuxt-link>
                    <nuxt-link :to="localePath('#posts')">
                        <li>{{ $t("component.header.posts") }}</li>
                    </nuxt-link>
                </ul>
            </div>

        </div>
    </nav>
</template>

<style scoped>
button {
    --at-apply: align-middle text-slate-300 hover:text-slate-100 focus:text-slate-100 focus:outline-none
}

ul {
    --at-apply: flex-col mt-8 space-x-4 space-y-8 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:mt-0 xl:space-x-8
}

li {
    --at-apply: text-base text-slate-300 font-bold xl:text-lg hover:text-slate-100
}
</style>

<script setup lang="ts">
import { ref } from "vue";
const localePath = useLocalePath()

let menu = ref(false);
const toggle = () => (menu.value = !menu.value);
</script>
