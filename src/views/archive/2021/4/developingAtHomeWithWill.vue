<template>

    <body>
    


    <audio  controls>
      <source src="./willGallery.mp3" type="audio/mp3">
    Your browser does not support the audio element.
    </audio> 

  <div class="mySlides" style="width:100vw; height: 100vh; position: relative;">
    <p class="intro"><b>Developing At Home With Will</b><br>
        I began processing images at home over the summer of 2020 — a procedure that started in the darkroom and developing 16mm film in buckets at school, I wanted to tackle colour processing in the comfort of my kitchen to expedite the film photography process and evolve my understanding of the medium.
The therapeutic process of film development (which could also be absolutely heartbreaking) brought some sense of curative routine to my aimless summer.<br>
    I would document every aspect of my time with those I love and see results all the way through to the end with complete control, instilling a physical significance/emotional meaning to the images. I guess you grow an attachment to uncertainty when the results bring so much satisfaction, and that sentiment becomes even more apparent when you fail.
Summer felt much like those I had in high school. Getting baked and swimming in the ocean was our escape from the global pandemic. Plain sailing and enjoyable. I felt like documenting my months back home because it felt nostalgic and rare, especially in keeping a close circle. Most of the photos included are from BC, with some examples of film development that I continue to practice in Toronto. — Will Sheppard<br>
music by <a href="https://noahsauer.bandcamp.com/album/cloud-computer" target="_blank">noah sauer</a> | <a href="../../../">back to volvox vault</a></p>

<img src="./will1.jpeg" style="filter: blur(10px); height: 100%; max-width: 100%;  overflow: hidden; z-index: -10;"></div>

  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will1.jpeg);"><p>Dinner time on Hornby. Due to the pandemic, restaurants were closed to non locals -- so we improvised.</p></div>
  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will2.jpeg);"><p>Andrew and Erik at Jericho Beach.</p></div>
  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will3.jpeg);"><p>St. Clair West. 16mm</p></div>
  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will4.jpeg);"><p>Boys at Tribune Bay. After a psychedelic tour of the Island, we ended our day on the beach to watch a lightning storm hundreds of kilometres away.</p></div>
  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will5.jpeg);"><p>Hotbox middle august, windows rolled up.</p></div>
  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will6.jpeg);"><p>Hayden and Cairns from my bedroom. Shot on 16mm and hand processed.</p></div>
  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will7.jpeg);"><p>Hayden with passion. Downtown Toronto, early September. Shot on Portra 800 and pushed one stop.</p></div>
  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will8.jpeg);"><p>Last day on the Island.</p></div>
  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will9.jpeg);"><p>40 ounce for the beach.</p></div>
  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will10.jpeg);"><p>Myrtle Park baseball diamond. An everyday meeting spot when we weren't quite sure where to go.</p></div>
  <div class="mySlides caption" style="width:100vw; height: 100vh; background-image: url(./will11.jpeg);"><p>Cave smoker Micah. Shot on a Canon 1V @ 17mm.</p></div>
  
  

  <button class="button display-left" style="font-size: 14pt;" onclick="plusDivs(-1)">&#8592;</button>
  <button class="button display-right" style="font-size: 14pt;" onclick="plusDivs(1)">&#8594;</button>


</body>
  
</template>

<script>
var slideIndex = 1;
showDivs(slideIndex);

export function plusDivs(n) {
  showDivs(slideIndex += n);
}

export function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

</script>

<script>

export default {
  name: 'developingAtHomeWithWill',

};
</script>

<style scoped>

body {
  margin: 0;
}

a:hover {
    font-style: italic;
}

.display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}
.display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}

.button{border:none;display:inline-block;padding:8px 12px;vertical-align:middle;overflow:hidden;text-decoration:none;color:darkgreen;background-color:rgb(255,255,255,0.6);text-align:center;cursor:pointer;white-space:nowrap}

.mySlides {
  width: 100%;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  text-align: center;

}

.caption {
    position: relative;
    align-items: center;
}

.caption p {
  position: absolute;
  bottom: 0;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14pt;
}

p {
  margin: 0;
  padding: 10px;
  font-family: Times New Roman, serif;
  background: rgb(255,255,255,0.6);
  filter: blur(0px);
  line-height: 1.6;
}

.intro {
  position: absolute;
  width: 50%;
  z-index:10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  font-size: 13pt;
}

audio {
    position: absolute; z-index: 20; padding: 5px; width: 200px;
}

@media (max-width: 800px) {
  .intro {
    width: 82%;
    font-size: 10.5pt;
  }
  
  .caption p {
      width:82%;
      font-size: 12pt;
  }
  
  .button {
      padding:8px 9px;
  }

  .display-left{
      top:25%;
  }
  .display-right{
      top:25%;
  }

}

@media only screen and (max-device-width: 566px) {
    audio {
        width: 200px;
    }
}

@media (min-width: 2000px) {

    audio {
        width: 280px;
    }
    
    .intro {
        font-size: 14pt;
    }
    
}

</style>