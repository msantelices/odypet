<template>
    <main>
        <topnavbar></topnavbar>
        <contactform></contactform>
        <bottomnavbar></bottomnavbar>
    </main>
</template>

<script>
import topnavbar from '@/components/TopNav.vue'
import contactform from '@/components/Form.vue'
import bottomnavbar from '@/components/BottomNav.vue'
export default {
    components: { topnavbar, contactform, bottomnavbar },
    mounted() {
        window.scrollTo(0, 0)
    } 
}
</script>