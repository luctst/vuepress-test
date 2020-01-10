<template>
    <section>
        <div class="container">
            <h1 v-html="title"></h1>
            <h2>{{description}}</h2>
            <button>En savoir plus</button>
        </div>
        <div>
            <img :src="image" alt="icone"/>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        image: String
    }
}
</script>

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

@media screen and (min-width: 768px) {
    section {
        display: flex;
        padding-top: 5em;

        div:first-child {
            margin-top: 4em;
            margin-left: 4em;
        }
    }
}
</style>