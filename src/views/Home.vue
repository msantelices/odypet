<template>
    <main>
        <topnavbar></topnavbar>
        <search></search>
        <featured></featured>
        <bottomnavbar></bottomnavbar>
    </main>
</template>

<script>
import topnavbar from '@/components/TopNav.vue'
import search from '@/components/Search.vue'
import featured from '@/components/Featured.vue'
import bottomnavbar from '@/components/BottomNav.vue'
export default {
    components: { topnavbar, search, featured, bottomnavbar },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>