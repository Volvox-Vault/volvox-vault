<template>
<body>
    <a href="/tsff"><img src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276" class="logo" /></a>

    <h1>I Am</h1>
    <br />
    <p style="font-family: hersheyFut">
        A film by
        <a href="https://instagram.com/shexinli" target="_blank">Xinli She</a> (She/Her).
    </p>
    <br />

    <div class="youtube">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ShvcNB7bJak?si=-MSkm6nQMvux1h-r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="ts-contain">
        <div class="ts-box">
            <h2 style="color: #664c71">
                <span style="background: #f3f9e6; padding: 5px">ABOUT</span>
            </h2>
            <br />
            <p>
                Exploration of the contradiction between the physical world and inner being.    
            </p>
            <br />
            <h3>XINLI SHE</h3>
            <p>
                shirleyshe.xinli@gmail.com
                <br> Echappe is a film that captures the feeling of misaligning with the rest of the world. In one way or another, I think we are constantly compromising within every decision we make, whether it be the subway's schedule, the biological clock, or expectations from others. I want to try and demonstrate this forever battle of fighting for our desires.
            </p>
        </div>

        <div class="ts-box credits">
            <h2 style="color: #664c71">
                <span style="background: #f3f9e6; padding: 5px">CREDITS</span>
            </h2>
            <br />
            <p>Director: Xinli She</p>
        </div>

        <div class="ts-box">
            <h2 style="color: #664c71">
                <span style="background: #f3f9e6; padding: 5px">Q&A WITH XINLI</span>
            </h2>
            <br />

            <p>
                <strong>How does your true self shine through in your film?</strong>
                <br /><br /> Echappe represents the person I was a year ago, specifically the feeling of being stuck and wanting to break free. I was never a rule follower since I was a kid, but I would always try to hide it to avoid confrontations and judgments. Slowly I’ve gotten better at running away from things, and from life itself. Taking on the role of a filmmaker provided me with an outlook on life, and a safety nest to express myself. However, in the process of pursuing arts, I realized that there are logistics and limitations to the practice and the medium. Only this time, I won’t be a coward anymore, I will face whatever obstacles there might be, and learn from them. <br /><br />
                <strong>Who are some of your inspirations as a filmmaker and how might their impact show up in your film?</strong>
                <br /><br />
                Of all the filmmakers that I admire, Edward Yang and Eric Rohmer are always the first two names that pop into my head. When I watched their films at the age of fifteen, I felt seen and understood. And that is the art of filmmaking to me, to connect people, and unite us as a whole.   Now that almost a decade has passed, and filmmaking has become my life passion, I realize that their influences are there all along. The day-to-day life stories, the grounded cinematography style, the use of amateur actors, and the middle-class characters.
                <br /><br />
                <strong>What emotion or human experience were you most drawn to in the making of this film and why?</strong>
                <br /><br /> There haven't been many people who understand the message behind Echappe fully. When I first had the idea and told a friend about it, he encouraged me to explore more. And so that’s what I did for the next six weeks, only to find that I was complicating rather than elevating the original idea, which I feel deeply related to in the first place. Moreover, I had trouble trying to pitch it or explain it to people. I don’t think even my crew related to the film as much as I do. The feeling of isolation hoovered over the process of planning, making, and finishing of the project. The more feedback I received, the more I realized that the “box” can mean different things, it can be societal expectations on women, depression, or past traumas. No one shares the exact same experiences, and it is inevitable that we see the world through our lenses. Maybe the journey of creating art is meant to be isolated and alone, but our collective experience as humans will always connect us together.  
            </p>
        </div>
    </div>

    <div class="chat" style="border: 1px dotted #212121; padding: 30px; height: 400px">
        <script type="application/javascript" id="cid0020000363485653376" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width: 100%; height: 100%">
            {
                "handle": "echappexinli",
                "arch": "js",
                "styles": {
                    "a": "f3f9e6",
                    "b": 100,
                    "c": "000000",
                    "d": "000000",
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

    <br />
    <p>
        Follow
        <a href="https://instagram.com/volvox.observer">@volvox.observer</a> on
        instagram and
        <router-link to="/support">subscribe to our newsletter</router-link> for
        updates.
    </p>
</body>
</template>

<script>
export default {
    name: "she",
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

.youtube {
    border: 1px dotted #212121;
    padding: 30px;
    margin-bottom: 10px;
    height: 55vh;
    min-height: 350px;
}

.chat {
    margin-top: 10px;
    display: block;
}

@media only screen and (max-width: 600px) {
    .ts-contain {
        grid-template-columns: 1fr;
        row-gap: 20px;
    }

    .ts-box {
        height: 300px;
    }

    .youtube {
        height: 200px;
        margin-bottom: 20px;
    }

    .chat {
        display: none;
    }

    .credits {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 3;
    }
}
</style>
