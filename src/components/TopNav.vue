<template>
    <div>
        <header>
            <span class="toggler" @click="toggleMenu">
                <i class="fas fa-bars"></i>
            </span>
            <h1>OdyPet</h1>
        </header>
        <sidenav :open="open"></sidenav>
    </div>

</template>

<script>
import sidenav from './SideNav.vue'
export default {
    components: { sidenav },
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleMenu() {
            this.open = !this.open
        }
    }
}
</script>

<style scoped>
    header {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        padding: 1rem;
        text-align: center;
        position: fixed;
        width: 100%;
        background: #fff;
        top: 0;
        z-index: 10;
    }

    header h1 {
        font-size: 1.25rem;
        margin: 0;
    }

    .toggler {
        cursor: pointer;
        position: absolute;
        left: 1.5rem;
    }

</style>