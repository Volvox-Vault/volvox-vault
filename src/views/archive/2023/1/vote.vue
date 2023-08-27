<template>
    <body>
        <img src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276" class="logo" />
    
        <h1>true self film fest</h1>
        <br>
        <p style="font-family: hersheyFut;">presented by
            <router-link to="/">volvox observer</router-link> | <a href="https://ko-fi.com/volvoxobserver">support us on ko-fi</a>
            <br> hosted by <a href="https://tiana.computer">tiana dueck</a> & <a href="http://kalilhaddad.com">kalil haddad</a>
        </p>
        <br>

        <hr>

        <br>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe3ikgMzpEYPoDDbd8xkLeLwNMQjKgqWVJ9uQBcehLpBoIjCA/viewform?embedded=true" width="640" height="1696" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>    

    
    </body>
</template>


<script>
export default {
    name: "vote",
    components: {},
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: "True Self Film Fest | Audience Vote",
    },
};
</script>

<style scoped>
@font-face {
    font-family: hersheyOld;
    src: url(https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/Hershey-Noailles-OldFrench-Bold.ttf?v=1673385487640);
}

body {
    line-height: 1.6;
    background: #664c71;
    font-family: hersheyOld;
    height: 100%;
    color: #f3f9e6;
    padding: 30px;
    overscroll-behavior: none;
}

h1,
p {
    padding: 0px;
    margin: 0px;
}

h1 {
    line-height: 1;
    font-size: 45pt;
}

h2 {
    padding: 0px;
    margin: 0px;
    line-height: 1;
}

ul {
    font-size: 15pt;
}

.logo {
    width: 150px;
    float: right;
    padding-left: 10px;
    padding-bottom: 10px;
}

a {
    color: #f3f9e6;
    transition: 1s;
    text-decoration: underline;
}

a:hover, .ok {
    text-decoration: none;
    background: #f3f9e6;
    color: #664c71;
}

.ts-contain {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
}

.ts-box {
    border: 1px dotted #212121;
    padding: 30px;
    height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
}

@media only screen and (max-width: 600px) {
    .ts-contain {
        grid-template-columns: 1fr;
    }
    .logo {
        width: 200px;
    }
}
</style>