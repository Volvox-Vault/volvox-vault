<template>
    
    <body>
            <img src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/trueself%403x.png?v=1673385928615" class="logo"/>

        <h1>true self film fest</h1>

        <p>
        We’re interested in short films that are made from the heart. We want to see what artists like you are drawn to create from their core, with less focus on the technical details, and more on communicating a feeling that naturally pours from you. Filmmaking can be daunting and overwhelming, so we intend to practice a slower, more compassionate, artist-driven approach through this quaint fest.
        <br><br>
        Submissions are due on June 1st, 2023. Early submissions are encouraged.
        </p>
    </body>

</template>


<script>

export default {
    name: "trueself",
    components: {
    },
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: "True Self Film Fest",
    },
};
</script>

<style scoped>
@font-face {
  font-family: hersheyOld;
  src: url(https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/Hershey-Noailles-OldFrench-Bold.ttf?v=1673385487640);
}

body {
    line-height: 2;
    background: #664c71;
    font-family: hersheyOld;
    height: 100vh;
    color: #f3f9e6;
    padding: 30px;
}

h1 {
    padding: 0px;
    margin: 0px;
}

.logo {
    width: 150px;
    float: right;
}

a {
    color: yellowgreen;
    transition: 1s;
    text-decoration: underline;
}

a:hover {
    color: grey;
    text-decoration: none;
}

</style>