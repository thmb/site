<template>
    <footer class="body-font bg-slate-800">
        <div class="container px-4 py-6 mx-auto flex items-center flex-col sm:flex-row justify-between">
            <div class="flex items-center justify-center md:justify-start">
                <span class="text-white font-bold">Thiago Madureira Braga © {{ year }}</span>
            </div>
            <div class="text-slate-500">
                <span>v1.0.0</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
