<template>
    <body>
        <router-link to="trueself"><img src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276" class="logo" /></router-link>
    
        <h1>your film's title</h1>
        <br>
        <p style="font-family: hersheyFut;">a film by you.
        </p>
        <br>
    
    
        <div style="border: 1px dotted #212121; padding: 30px; margin-bottom: 10px; height: 55vh; min-height: 350px;">
    
        <script type="application/javascript">
            let capture;

            function setup() {
                createCanvas(390, 240);
                capture = createCapture(VIDEO);
                capture.size(320, 240);
                //capture.hide();
            }

            function draw() {
                background(255);
                image(capture, 0, 0, 320, 240);
            }
        </script>
    
    
           <!-- <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nXdEZWfARJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    -->
        <div class="ts-contain">
    
            <div class="ts-box">
                <h2 style="color:#664c71;"><span style="background:#f3f9e6; padding: 5px;">ABOUT</span></h2>
                <br>
                <p>
                    Your artist's statement and film synopsis.
                </p>
            </div>
    
            <div class="ts-box">
                <h2 style="color:#664c71;"><span style="background:#f3f9e6; padding: 5px;">CREDITS</span></h2>
                <br>
                <p>
                    You, your friend, your enemy, a stranger.
                </p>
            </div>
    
            <div class="ts-box">
                <h2 style="color:#664c71;"><span style="background:#f3f9e6; padding: 5px;">COMMENTS</span></h2>
                <br>
    
                <p>Comments specific for your film will show here. For now, it's our general chat.</p>
    
                <br>
    
<script type="application/javascript" id="cid0020000341434605351" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width: 100%;height: 300px;">
{
    "handle": "trueselfff",
    "arch": "js",
    "styles": {
        "a": "f3f9e6",
        "b": 100,
        "c": "664c71",
        "d": "664c71",
        "k": "f3f9e6",
        "l": "f3f9e6",
        "m": "f3f9e6",
        "p": "10",
        "q": "f3f9e6",
        "r": 100,
        "ab": false,
        "usricon": 0,
        "surl": 0,
        "allowpm": 0,
        "cnrs": "1",
        "fwtickm": 1
    }
}
</script>
    
    
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
    width: 50px;
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
    height: 200px;
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