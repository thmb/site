<template>
<select v-model="$colorMode.preference">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
</select>
</template>

<style scoped>
select {
    --at-apply: bg-transparent text-lg text-slate-300 hover:text-slate-100
}
</style>

<script setup lang="ts">

</script>