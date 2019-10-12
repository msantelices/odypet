<template>
    <nav :class="{open}">
        <ul>
            <li>
                <router-link to="/" class="active primary-color primary-border">Home</router-link>
            </li>
            <li>
                <router-link to="/directorio">Directorio</router-link>
            </li>
            <li>
                <router-link to="/mapa">Mapa</router-link>
            </li>
            <li>
                <router-link to="/contacto">Contacto</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['open']
}
</script>

<style scoped>
    nav {
        background: #fff;
        position: fixed;
        top: 54px;
        bottom: 0;
        left: 0;
        width: 50%;
        border-right: 1px solid rgba(0, 0, 0, 0.15);
        z-index: 5;
        transform: translateX(-100%);
        transition: all 0.15s ease-in-out;
    }

    nav.open {
        transform: translateX(0)
    }

    ul {
        padding: 3rem 1.5rem;
        list-style: none;
    }

    ul li {
        padding-bottom: 1rem;
    }

    ul li a {
        color: #1c1c1c;
    }

    ul li a:hover {
        text-decoration: none;
    }

    ul li a.active {
        border-bottom: 2px solid;
        font-weight: 500;
    }
</style>