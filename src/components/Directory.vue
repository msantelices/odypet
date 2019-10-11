<template>
    <b-container class="list-container">
        <b-row>

            <b-col sm="12">
                <div class="card">
                    <img src="https://via.placeholder.com/500x200" alt="">
                    <div class="content">
                        <h3>Nombre veterinaria</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, minus animi numquam ipsam aut doloremque magni obcaecati nesciunt nihil.</p>
                        <div class="icon-row">
                            <span class="primary-color">Ver Más</span>
                            <contact></contact>                            
                        </div>
                    </div>
                </div>

                <div class="card">
                    <img src="https://via.placeholder.com/500x200" alt="">
                    <div class="content">
                        <h3>Nombre veterinaria</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, minus animi numquam ipsam aut doloremque magni obcaecati nesciunt nihil.</p>
                        <div class="icon-row">
                            <span class="primary-color">Ver Más</span>
                            <contact></contact>
                        </div>
                    </div>
                </div>
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
import contact from './ContactIcons.vue'
export default {
    components: { contact }
}
</script>

<style scoped>
    .list-container {
        margin-bottom: 6rem;
    }

    .card {
        margin-bottom: 1.5rem;
        border: none;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .card .content {
        padding: 1rem;
    }

    .card .content h3 {
        font-size: 1.25rem;
    }

    .icon-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.5rem;
    }

    .icon-row span {
        cursor: pointer;
        font-weight: 700;
    }
</style>