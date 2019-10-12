<template>
    <div class="form-container">
        <div class="title">
            <h3>Contacto</h3>
            <p>Necesitas ayuda? Quieres incluir tu negocio en Odypet? Ponte en contacto con nosotros!</p>
        </div>

        <div class="contact-form">
            <div class="input-container">
                <label>Nombre</label>
                <input type="text">
            </div>
            <div class="input-container">
                <label>Correo</label>
                <input type="text">
            </div>
            <div class="input-container">
                <label>Teléfono</label>
                <input type="text">
            </div>
            <div class="input-container">
                <label>Área</label>
                <select>
                    <option>Soporte</option>
                    <option>Comercial</option>
                </select>
            </div>
            <div class="input-container">
                <label>Mensaje</label>
                <textarea rows="8"></textarea>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .form-container {
        margin: 6rem auto;
        padding: 0 2rem;
    }

    .title h3 {
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .title p {
        font-size: 15px;
        text-align: center;
        font-weight: 400;
        margin-bottom: 3rem;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
    }

    .input-container label {
        font-weight: 500;
        margin-bottom: 0;
    }

    .input-container input,
    .input-container select {
        border: none;
        border-bottom: 2px solid #ccc;
        padding: 0.25rem 0.15rem;
    }

    .input-container input:focus,
    .input-container input:active,
    .input-container select:focus,
    .input-container select:active {
        outline: none;
    }

    .input-container textarea {
        border: 2px solid #ccc;
        border-radius: 3px;
    }
</style>
