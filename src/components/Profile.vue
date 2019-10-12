<template>
    <div class="profile-container">
        <parallax :fixed="true" :speedFactor="1" :sectionHeight="10">
            <img src="https://via.placeholder.com/768x300" alt="">
        </parallax>
        <div class="content">
             <div class="profile-pic">
                <img src="https://via.placeholder.com/150x150" alt="">
            </div>
            <div class="desc">
                <h3>Nombre Veterinaria</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit consequatur, molestias alias similique quaerat aliquam, sint, harum maxime temporibus velit corporis dolorum laudantium? Consequuntur error porro aut maiores inventore voluptas nostrum rem eos ipsum repellat fugiat, dignissimos nesciunt ipsa velit nobis officia possimus suscipit voluptatem vel! Vitae ducimus ratione ad.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt molestias asperiores temporibus esse sint soluta aliquam fugit dignissimos maiores, officiis facilis, tenetur reiciendis iusto, est ipsam non voluptas qui quisquam a eligendi eaque voluptatum? Laboriosam fuga recusandae officia quia atque ipsum eius explicabo officiis est vitae quisquam reiciendis enim totam doloribus aliquam provident repellendus tempore quod, ullam similique eos. Asperiores sint officiis quisquam reprehenderit culpa, expedita distinctio itaque ipsum non. Nulla reiciendis veniam unde eum odio facilis delectus inventore nam sapiente ut ipsum nesciunt ullam non, quibusdam sed doloremque. Laudantium atque distinctio soluta placeat! Illum sed placeat neque est nam.</p>
            </div>
            <div class="go-back">
                <span @click="goBack" class="primary-color"><i class="fas fa-long-arrow-alt-left"></i> Volver</span>
            </div> 
            <div class="contact-row">
                <p>Contactanos!</p>
                <contact></contact>
            </div>
        </div>
    </div>
</template>

<script>
import parallax from 'vue-parallaxy'
import contact from './ContactIcons.vue'
export default {
    components: { parallax, contact },
    methods: {
        goBack() {
            window.history.back()
        }
    }
}
</script>

<style scoped>
    .profile-container {
        margin-top: 55px;
    }

    .header img {
        width: 100%;
    }

    .content {
        background: #fff;
        position: relative;
        padding: 4rem 2rem;
    } 

    .profile-pic {
        text-align: center;
    }

    .profile-pic img {
        border: 1px solid #fff;
        border-radius: 50%;
        position: absolute;
        top: -125px;
        transform: translateX(-50%)
    }

    .Masthead {
        min-height: 300px;
    }

    .Masthead__image,
    .Masthead__image.is-fixed>img {
        height: 300px;
    }

    .content h3 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .go-back {
        margin-top: 2rem;
    }

    .go-back span {
        font-weight: 500;
        cursor: pointer;
    }

    .contact-row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
    }
    
    .contact-row p {
        text-transform: uppercase;
        font-size: 0.85rem;
        margin-bottom: 1.5rem;
        font-weight: 700;
    }
</style>