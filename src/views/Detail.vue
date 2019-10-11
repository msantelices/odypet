<template>
    <main>
        <topnavbar></topnavbar>
        <profile></profile>
        <bottomnavbar></bottomnavbar>
    </main>
</template>

<script>
import topnavbar from '@/components/TopNav.vue'
import profile from '@/components/Profile.vue'
import bottomnavbar from '@/components/BottomNav.vue'
export default {
    components: { topnavbar, profile, bottomnavbar },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>