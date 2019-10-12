<template>
    <main>
        <topnavbar></topnavbar>
        <search></search>
        <maplayer></maplayer>
        <bottomnavbar></bottomnavbar>
    </main>
</template>

<script>
import topnavbar from '@/components/TopNav.vue'
import search from '@/components/Search.vue'
import maplayer from '@/components/MapLayer.vue'
import bottomnavbar from '@/components/BottomNav.vue'
export default {
    components: { topnavbar, search, maplayer, bottomnavbar },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>