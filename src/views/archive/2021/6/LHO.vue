<template>
  <div id="app">
    <body>
    
    
    <div id="back" style="position: absolute; border: 1px solid midnightblue; padding: 10px;"><a href="../../">back</a></div>
    
    <br> <br> <br>
    <div class="tours">
    <h1 style="font-weight: normal;">Hang out with...</h1>
    <table>
        <tr><td><a href="http://tianasroom.glitch.me/">tiana</a></td><td><a href="http://andreisroom.glitch.me/">andrei</a></td><td><a href="https://madeleinesroom.glitch.me/">madeleine</a></td><td><a href="http://tianasroom.glitch.me/">you?</a></td></tr>
        <tr><td><a href="http://tianasroom.glitch.me/">friend</a></td><td><a href="http://tianasroom.glitch.me/">friend</a><td><a href="http://tianasroom.glitch.me/">friend</a></td><td><a href="http://tianasroom.glitch.me/">friend</a></td></tr>
    </table>
    </div>
    
    <br><br>
    
    <main>
        
    <h1 style="font-weight: normal;">Let's Hang Out</h1>
    
    <p>A community photo gallery project.</p>
    
    <div style="border: 1px dashed midnightblue; padding: 15px;">
   <p style="margin: 0px; padding: 0px;">We are inspired by getting to know each other through our personal environments. Because of the pandemic, we've been stepping into each other's personal bubbles less often unfortunately. The exciting feeling of stepping into a friend’s room for the first time has become somewhat nostalgic. One of the simplest ways to experience another person's world is to hang out in their room. So, let’s learn more about the nice people in our community, and have a chill time.<br>[ A message sent from Tiana's room. ]</p>
</div>


<p>We're excited to hang out with you :)<br>
Check out our intro hang out <a href="letshangout_insta.mp4">here</a>.<br>
Email your room tour to hello@volvoxvault.com<br> by the end of summer to invite us over.<br><br>
Please send us the following to join...</p>


<p><b>Friend Profile</b></p> 

    <p class="indent">○ Your name, pronouns, website, portrait, favourite colour, and bio.</p>

<p><b>Room Tour Gallery</b><br>
<i>Give a tour of your room or most lived in space.<br>
These points are guides more so than strict rules.</i></p>

    <p class="indent">○ <b>6-10 photos/videos</b> of the space we're hanging out in. Show us around ~ What are your favourite parts of/things in the room? Where is a good place to sit and talk?</p>

    <p class="indent">○ <b>A caption for each photo.</b> Have fun and get creative.</p>
    
    <p class="indent">○ <b>Optional: Sound track.</b> What music is playing
    in your room? What ambience can we hear?
    You can submit any audio file/song. Original content is encouraged.</p>
    
    <p class="indent"><b>Update</b> ~ Alternatively, design your own room tour webpage with html and css.</p>
    

<br>

    
    <div class="slide">
    <div class="text">Are you free today?</div>
    <img src="lho_eg.jpg">
    </div>
    
    
    
    </main>
    
    <br><br><br>
    
</body>
  </div>
</template>

<script>
export default {
  name: "LHO",
};
</script>

<style scoped>
body {
            margin: 0px;
            padding: 0px;
            font-family: Helvetica, sans-serif;
            line-height: 1.6;
            color: midnightblue;
             
              background-color: midnightblue;
        }
        
        main {
            padding: 35px;
            padding-top: 10px;
            width: 500px;
            margin-left: auto;
            margin-right: auto;
            background-color: rgb(255,255,255,0.7);
        }
        
        a {
            text-decoration: underline;
            color: midnightblue;
        }
        
        #back {
             background-color: rgb(255,255,255,0.7);
        }
        
        #back a {
             text-decoration: none;
        }
        
        #back:hover {
            background-color: rgb(255,255,255,0.3);
        }
   
        img {
            transition: filter 3s;
            -webkit-transition: filter 3s;
            width: 100%;
        }
        
        img:hover {
            transition: filter 3s;
            -webkit-transition: filter 3s;
            webkit-filter: blur(10px); /* Chrome, Safari, Opera */
            filter: blur(10px);
        }
        
        .tours {
            border: 1px solid midnightblue;
            padding: 35px;
            padding-top: 10px;
            width: 70%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 20px;
            background: url(lho_bg.jpg);
              background-repeat: no-repeat;
              background-size: cover;
              background-color: midnightblue;
        }
        
        td {
            border: 1px solid midnightblue;
            text-align: center;
            padding: 10px;
        }
        
        table a {
            text-decoration: none;
            cursor: pointer;
        }
        
        table a:hover {
            font-style: italic;
        }
        
        table {
            border-collapse: collapse;
            width: 100%;
            background-color: rgb(255,255,255,0.3);
        }
        
        .slide {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                background: transparent;
                width: 100%;
        }
        
        .slide .text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-shadow: 0 0 6px var(--color1);
            font-style: italic;
            font-size: 25px;
            text-align: center;
            filter: blur(10px);
            z-index: 1;
            transition: filter 3s;
            -webkit-transition: filter 3s;
        }
        
        .slide:hover .text  {
            filter: blur(0px);
            transition: filter 1s;
            -webkit-transition: filter 3s;
        }
        
        
        p {
            font-family: sans-serif;
            font-size: 11pt;
        }
        
        .indent {
            margin-left: 20pt;
        }
        
        td {
            width: 25%;
            font-size: 14pt;
        }
        
        tr {
            height: 400px;
        }
        
        @media only screen and (max-width: 1999px) {
            tr {
            height: 200px;
        }
        }
        
        @media only screen and (max-device-width: 566px) {
        
            body {
                margin-bottom: 300px;
            }
            
            main, .tours {
                width: 85%;
            }
            
            .tours {
                margin-top: 50px;
            }
            
            tr {
            height: 200px;
        }
        
        td {
            font-size: 20pt;
        }
        h1 {
            font-size: 40pt;
        }
        
        p, table {
            font-family: sans-serif;
            font-size: 25pt;
        }
        
        .slide .text {
         font-size: 30pt;   
        }
        }
</style>


