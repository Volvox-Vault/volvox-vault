<template>
    <body>
        <img src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276" class="logo" />
    
        <h1>your film's title</h1>
        <br>
        <p style="font-family: hersheyFut;">a film by you.
        </p>
        <br>
    

        <div style="border: 1px dotted #212121; padding: 30px;"><iframe width="100%" height="auto" src="https://www.youtube.com/embed/nXdEZWfARJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    
        <div class="ts-contain">
    
            <div class="ts-box">
                <h2 style="color:#664c71;"><span style="background:#f3f9e6; padding: 5px;">ABOUT</span></h2>
                <br>
                <p>
                    Your artist's statement and film synopsis will go here.
                </p>
                <br>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/nXdEZWfARJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
    
            <div class="ts-box">
                <h2 style="color:#664c71;"><span style="background:#f3f9e6; padding: 5px;">CREDITS</span></h2>
                <br>
                <p>
                    You, your friend, your enemy, your cousin, a stranger.
                </p>
            </div>
    
            <div class="ts-box">
                <h2 style="color:#664c71;"><span style="background:#f3f9e6; padding: 5px;">PHOTOS</span></h2>
                <p>Photos from your production will go here.</p>
    
            </div>
    
        </div>
    
        <br>
        <p>
            Follow <a href="https://instagram.com/volvox.observer">@volvox.observer</a> on instagram and
            <router-link to="/support">subscribe to our newsletter</router-link> for updates.
        </p>
    
    </body>
</template>


<script>
export default {
    name: "trueselftemplate",
    components: {},
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

a:hover {
    text-decoration: none;
    background: #f3f9e6;
    color: #664c71;
}

.ts-contain {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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