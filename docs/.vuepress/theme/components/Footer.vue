<template>
    <footer class="container">
        <div class="footer--logo">
            <img src="logo-moonshot-footer@2x.png" alt="">
        </div>
        <section class="footer--content">
            <div>
                <h4>Tour montparnasse</h4>
                <p>Mornin coworking</p>
                <p>33 avenue du Maine</p>
                <p>75010 Paris</p>
                <span>+33 1 86 91 96 62 </span>
            </div>
            <div>
                <h4>Produits</h4>
                <p>Voyage</p>
                <p>E-commerce</p>
                <p>Paiement</p>
                <p>Mobile</p>
                <p>Entertainment</p>
            </div>
            <div>
                <h4>Solutions</h4>
                <p>API documentation</p>
                <p>White label</p>
            </div>
            <div>
                <h4>Moonshot-Internet</h4>
                <p>Qui sommes-nous ?</p>
                <p>Espace média</p>
                <p>Recrutement</p>
                <p>Blog Moonshot</p>
                <p>Contact</p>
            </div>
        </section>
        <section class="footer--legales">
            <select>
                <option v-for="langue in languages">{{langue}}</option>
            </select>
            <p>Conditions Generales</p>
            <p>Politiques de confidentialité</p>
            <p>Mentions légales</p>
            <div class="footer--legales--social-media">
                
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    data () {
        return {
            languages: [
                "Français"
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    .footer-logo {
        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
}
</style>