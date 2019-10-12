<template>
    <footer>
        <router-link to="/" class="primary-color">
            <i class="fas fa-home"></i>            
        </router-link>

        <router-link to="/directorio">
            <i class="fas fa-store-alt"></i>
        </router-link>

        <router-link to="/mapa">
            <i class="fas fa-map-marker-alt"></i>
        </router-link>

        <router-link to="/contacto">
            <i class="fas fa-user"></i>
        </router-link>
    </footer>
</template>

<style scoped>
    footer {
        background: #fff;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-top: 1px solid #ccc;
        position: sticky;
        bottom: 0;
        z-index: 10;
    }

    footer a {
        font-size: 1.2rem;
        color: #5d5d5d;
    }
</style>