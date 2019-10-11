<template>
    <b-container class="featured-container">
        <b-row>
            <b-col sm="12">
                <p>Destacados</p>
            </b-col>
            <b-col sm="12" class="featured-item">
                <div class="item"></div>
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped>
    .featured-container {
       margin-bottom: 3rem;
    }

    p {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 500;
    }

    .item {
        width: 100%;
        height: 500px;
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 10px;
        /* margin: -4.5rem auto 0 auto; */
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
</style>