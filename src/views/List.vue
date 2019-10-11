<template>
    <main>
        <topnavbar></topnavbar>
        <search></search>
        <directory></directory>
        <bottomnavbar></bottomnavbar>
    </main>
</template>

<script>
import topnavbar from '@/components/TopNav.vue'
import search from '@/components/Search.vue'
import directory from '@/components/Directory.vue'
import bottomnavbar from '@/components/BottomNav.vue'
export default {
    components: { topnavbar, search, directory, bottomnavbar }
}
</script>