<template>
    <section>
        <p>For press enquiries or industry comments please email our press team at <a href="">press@moonshot-internet.com</a></p>
    </section>
</template>

<style lang="scss" scoped>
section {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 11px -5px rgba(0, 0, 0, 0.16);

  p {
    color: #38393f;
    font-weight: 600;

    a {
        color: #09c0d3;
    }
  }
}

@media screen and (min-width: 300px) {
    section {
        text-align: center;
        transform: translate(0, -15%);
        padding: 10px 15px;
        width: 85%;

        p {
            font-size: 24px;
        }
    }
}

@media screen and (min-width: 500px) {
    section {
        width: 90%;
    }
}

@media screen and (min-width: 650px) {
    section {
        width: 75%;
    }
}

@media screen and (min-width: 768px) {
    section {
        text-align: left;
        width: 50%;
        transform: translate(0, -20%);
    }
}

@media screen and (min-width: 1200px) {
    section {
        margin-right: auto;
        width: 40%;
    }
}
</style>