<template>
    <div class="contact">
        <ul>
            <li>
                <a href="#" class="primary-color"><i class="fab fa-whatsapp"></i></a>
            </li>
            <li>
                <a href="#" class="primary-color"><i class="far fa-envelope"></i></a>
            </li>
            <li>
                <a href="#" class="primary-color"><i class="fas fa-map-marker-alt"></i></a>
            </li>
            <li>
                <a href="#" class="primary-color"><i class="fas fa-phone"></i></a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .contact {
        width: 50%;
    }

    .contact ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .contact ul li a {
        font-size: 1.5rem;
    }
</style>