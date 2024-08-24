<template>
<div class="main">
<img class="star1" src="https://cdn.glitch.global/48b6270f-d761-4f15-89c3-24651ec28511/star.png?v=1723342341788" />
<a href="/ls-bts" title="info + bts"><img class="mask" src="https://cdn.glitch.global/48b6270f-d761-4f15-89c3-24651ec28511/mask.png?v=1723342341390" /></a>
<a href="/ls-ryan" title="note from ryan"><img class="ryan" src="https://cdn.glitch.global/48b6270f-d761-4f15-89c3-24651ec28511/latesummer-head.png?v=1724116787870" /></a>
<a href="/" title="back to volvox"><img class="star2" src="https://cdn.glitch.global/48b6270f-d761-4f15-89c3-24651ec28511/star.png?v=1723342341788" /></a>

<audio autoplay loop controls>
    <source src="https://cdn.glitch.global/48b6270f-d761-4f15-89c3-24651ec28511/Late%20Summer%20Track%202.wav?v=1724013284563" type="audio/mpeg" />
    Your browser does not support the audio element.
</audio>

<div class="mobile">
    <a href="/ls-film" title="watch late summer">
        <img class="drawing firstImage" src="https://cdn.glitch.global/48b6270f-d761-4f15-89c3-24651ec28511/BIGFOOT-DRAWING-CRUMPLE-1a.png?v=1723337914904" />
        <img class="drawing secondImage" src="https://cdn.glitch.global/48b6270f-d761-4f15-89c3-24651ec28511/BIGFOOT-DRAWING-2a.png?v=1723337915361" />
    </a>
    <p class="click1">
        <a href="/ls-film">click to watch film</a>
    </p>
</div>

<div class="desktop">
    <a href="/ls-film" title="watch late summer">
        <img class="drawing" src="https://cdn.glitch.global/48b6270f-d761-4f15-89c3-24651ec28511/BIGFOOT-DRAWING-CRUMPLE-1a.png?v=1723337914904" onmouseover="this.src='https://cdn.glitch.global/48b6270f-d761-4f15-89c3-24651ec28511/BIGFOOT-DRAWING-2a.png?v=1723337915361';" onmouseout="this.src='https://cdn.glitch.global/48b6270f-d761-4f15-89c3-24651ec28511/BIGFOOT-DRAWING-CRUMPLE-1a.png?v=1723337914904';" />
    </a>
    <p class="click2">
        click to watch film
    </p>
</div>

<div class="videoWrapper">
    <video autoplay muted loop id="myVideo">
        <source src="https://cdn.glitch.me/48b6270f-d761-4f15-89c3-24651ec28511/Cloud%20Loop.mp4?v=1724013306066" type="video/mp4" />
        Your browser does not support HTML5 video.
    </video>

    <p class="click">
        click me to watch
    </p>

</div>
</div>
</template>

<script>
export default {
    name: "lsHome",
    components: {},
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: "Late Summer",
    },
};
</script>

<style scoped>
.main {
    height: 100%;
    width: 100vw;
    background: #c1d6fb;
}
body {
    margin: 0px;
    padding: 0px;
}

.drawing {
    display: block;
    margin: 0 auto;
    width: 80vw;
    max-width: 700px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: float 5s infinite;

    -webkit-transition: all 3s ease-in-out;
    -moz-transition: all 3s ease-in-out;
    transition: all 3s ease-in-out;
}

@keyframes float {
    0% {
        top: 52%;
    }

    50% {
        top: 48%;
    }

    100% {
        top: 52%;
    }
}

.click2,
.click1 {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%);
}

.click2 {
    opacity: 0;
}

.desktop:hover .click2 {
    opacity: 1;
    z-index: 100;
}

.videoWrapper {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: -100;
}

#myVideo {
    filter: blur(6px);
    z-index: -100;

    min-width: 105%;
    min-height: 105%;
}

#lateSummer,
iframe {
    position: absolute;
    margin: 0 auto;
    z-index: -5;
    width: 800px;
    max-width: 800px;
    height: auto;
    min-height: 700px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.desktop {
    display: block;
}

.mobile {
    display: none;
}

.star1,
.star2,
.mask,
.ryan {
    width: 100px;
    transition: 0.5s;
    position: fixed;
}

.mask {
    bottom: 10px;
    right: 10px;
}

.ryan {
    top: 10px;
    left: 10px;
}

.mask:hover,
.ryan:hover {
    width: 104px;
}

.star1 {
    top: 10px;
    right: 10px;
}

.star2 {
    bottom: 10px;
    left: 10px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

audio {
    display: block;
    margin: 0 auto;
    width: 50%;
    max-width: 300px;
    height: 20px;
    padding: 10px;
    opacity: 50%;
    position: fixed;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
    z-index: 100;
}

.BTSimg {
    display: block;
    margin: 0 auto;
    max-width: 80%;
    margin-bottom: 20px;
}

h1,
p,
a {
    text-align: center;
    font-weight: normal;
    color: midnightblue;
    font-family: arial, sans-serif;
}

.zoe {
    font-weight: normal;
    color: midnightblue;
    font-family: arial, sans-serif;
    margin: 0 auto;
    max-width: 80%;
    margin-bottom: 20px;
    line-height: 1.6;
}

.zoe div {
    border: 2px solid midnightblue;
    padding: 10px;
    background: rgba(255, 255, 255, 0.3);
}

.zoe summary {
    font-size: 16pt;
}

@media only screen and (max-width: 600px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: block;
    }

    .firstImage {
        animation: firstImage 2s, float 5s infinite;
    }

    .secondImage {
        animation: secondImage 2s, float 5s infinite;
    }

    #lateSummer,
    iframe {
        max-width: 400px;
    }

    .ryanletter {
        width: 100vw;
        max-width: 900px;
    }

    .click1 {
        animation: secondImage 2s;
    }

    @keyframes firstImage {
        0% {
            opacity: 100%;
        }

        70% {
            opacity: 100%;
        }

        100% {
            opacity: 0%;
        }
    }

    @keyframes secondImage {
        0% {
            opacity: 0;
        }

        70% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
}
</style>
