<template>
    
    <body>
        <img src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276" class="logo"/>

        <h1>true self film fest</h1>
        <br>
        <p style="font-family: hersheyFut;">presented by <router-link to="/">volvox observer</router-link>
        <br>
        hosted by <a href="https://tiana.computer">tiana dueck</a> & <a href="http://kalilhaddad.com">kalil haddad</a>
        </p>
        <br>
        <hr>
        <br>
        <h2 style="color:#664c71;"><span style="background:#f3f9e6; padding: 5px;">ABOUT</span></h2>
        <br>
        <p>
        We’re interested in short films that are made from the heart. We want to see what artists like you are drawn to create from their core, with less focus on the technical details, and more on communicating a feeling that naturally pours from you. Filmmaking can be daunting and overwhelming, so we intend to practice a slower, more compassionate, artist-driven approach through this quaint fest.
        </p>
        <br>
        <hr>
        <br>
        <h2 style="color:#664c71;"><span style="background:#f3f9e6; padding: 5px;">SUBMIT YOUR FILM</span></h2>
        <br>
        <p>
        Send your submission to hello@volvox.observer with the subject "true self" for a chance to be featured in the fest.
        <br>
        Submissions are due on June 1st, 2023. Early submissions are encouraged.
        </p>
<br>
<hr>
<br>
<h2 style="color:#664c71;"><span style="background:#f3f9e6; padding: 5px;">GUIDELINES</span></h2>
        <ul>
        <li>run time must be between 4-10 min</li>
        <li>the production must be independent</li>
        <li>all content must be original; with the exception of unoriginal content used for quotation, criticism, or review</li>
        </ul>
<br>
        <hr>
        <br>
        <h2 style="color:#664c71;"><span style="background:#f3f9e6; padding: 5px;">THE FEST</span></h2>
        <br>
        <p>
        The festival will be published online at this url. Each selected film will have its own webpage that showcases the film as well as special features (so document your production process!) like photos, Q&As, a director's statement, and more. 
<br><br>
We are also planning to host an in person festival in Toronto, and hopefully somewhere in the Netherlands — details TBD. We will also likely host an online live premiere of the fest. Ticket sale profits will be distributed to contributing artists.
</p>
<br>
<hr>
<br>
<p>
Follow <a href="https://instagram.com/volvox.observer">@volvox.observer</a> on instagram and <router-link to="/support">subscribe to our newsletter</router-link> for updates.
        </p>

        <br>

        <img src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/000028.JPG?v=1673388199088" style="width: 100%;"/>
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
    line-height: 1.6;
    background: #664c71;
    font-family: hersheyOld;
    height: 100%;
    color: #f3f9e6;
    padding: 30px;
    overscroll-behavior: none;
}

h1, p {
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

.logo {
    width: 250px;
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

</style>