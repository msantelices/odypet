<template>
    <b-container class="search-container">
        <b-row>
            <b-col>
                <p>¿Qué estás buscando?</p>
                <input class="primary-border" type="text" placeholder="Buscar...">
            </b-col>
        </b-row>

        <b-row>
            <b-col class="filter-container">
                <a href="#" class="small-card primary-bg">
                    Todos
                </a>
                <a href="#" class="small-card primary-bg">
                    Tiendas
                </a>
                <a href="#" class="small-card primary-bg">
                    Veterinarias
                </a>
                <a href="#" class="small-card primary-bg">
                    Servicios
                </a>
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped>
    .search-container {
        padding: 6rem 1rem 1.5rem 1rem;
    }

    p {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        margin-left: 0.5rem;
        font-weight: normal;
        color: #5d5d5d;
    }

    input {
        width: 100%;
        border: none;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        padding: 0.25rem 1rem;
        color: #5d5d5d;
        margin-bottom: 2rem;
    }

    input:focus,
    input:active {
        outline: none;
    }

    .filter-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .small-card {
        width: 23.5%;
        display: inline-block;
        text-align: center;
        font-size: 14px;
        color: #fff;
        padding: 0.25rem;
        border-radius: 50px;
        font-weight: 500;
    }

    .small-card:hover {
        text-decoration: none;
    }

    @media screen and (max-width: 425px) {
        .filter-container {
            flex-wrap: wrap
        }
        .small-card {
            width: 48%;
            margin-bottom: 0.75rem;
        }
    }
</style>