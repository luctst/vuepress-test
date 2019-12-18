<template>
    <section>
        <div class="container">
            <h1>Moonshot-internet<br/> notre nouvelle<br/> punchline de fou</h1>
            <h2>La 1ère assurtech qui propose des produits d’assurance customisés et contextualisés de manière simple et accessible !</h2>
            <button>En savoir plus</button>
        </div>
        <div>
            <img src="group-5@2x.png" alt="icone"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-image: linear-gradient(to right, #000dff 0%, rgba(6, 15, 178, 0.99) 100%);
    height: 100vh;
    padding-top: 7em;

    div:first-child {
        h1 {
            color: #fff;
            margin: 0;
        }

        h2 {
            color: #fff;
            font-size: .8em;
            font-weight: normal;
            line-height: 1.5;
            margin: 2em 0;
        }

        button {
            background-image: linear-gradient(to bottom, #1cd9ec, #09c0d3);
            border-radius: 100px;
            box-shadow: 0 4px 10px 0 rgba(40, 40, 40, 0.16);
            background-color: #d8d8d8;
            border: none;
            color: #fff;
            margin: 0;
            padding: 12px 24px;
        }
    }

    div {
        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
}
</style>