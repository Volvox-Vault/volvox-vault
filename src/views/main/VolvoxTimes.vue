<template>
    <MainLayout>
        <div id="blocks-About">
            <!-- ABOUT -->
            <div class="block-About">
                <p class="block-About-header">VOLVOX TIMES</p>
                <p class="block-About-link" style="text-align: center">
                    a global creative community newspaper.<br>
                    community entries, interviews, crosswords, sudoku, and more.<br>
                    1 tabloid sheet. text on the front, poster on the back.
                </p>
    
                <div style="
                    text-align: center;
                    max-width: 650px;
                    margin: 40px auto;
                    padding: 50px;
                    background: #fbfdf7;
                    border-radius: 100px;
                    color: #212121;
                  ">
                    <h2>SUBSCRIBE (CLOSED)</h2>
                    <p>
                    The newspaper is currently on hiatus.
                    </p>
    
                    <div style="height: 500px; overflow: scroll; border: 1px dotted #212121;">
                        <h2 style="padding-top: 10px;">POSTER ARCHIVE</h2>
                        <hr/>
    
                        <p>FALL 2022<br> tiana dueck</p>
                        <img class="vtposter" src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/vt7.jpg?v=1672508428254" />
    
                        <p>SUMMER 2022<br> lisa gal</p>
                        <img class="vtposter" src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/vt5.jpg?v=1672507669674" />
    
                        <p>SPRING 2022<br> megan pai</p>
                        <img class="vtposter" src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/vt4.jpg?v=1672507667857" />
    
                        <p>WINTER 2021/22<br> sam kotrba</p>
                        <img class="vtposter" src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/VT6.jpg?v=1672508016599" />
    
                        <p>FALL 2021<br> romina malta</p>
                        <img class="vtposter" src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/vt3.jpg?v=1672507667144" />
    
                        <p>SUMMER 2021<br> jonah grindler</p>
                        <img class="vtposter" src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/vt2.jpg?v=1672509117129" />
    
                        <p>SPRING 2021<br> john bengtsson</p>
                        <img class="vtposter" src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/vt1.jpg?v=1672507664223" />
    
    
                        <br><br>
                    </div>
    
                </div>
    
                <div style="
                    text-align: center;
                    max-width: 650px;
                    margin: 40px auto;
                    padding: 50px;
                    background: #fbfdf7;
                    border-radius: 100px;
                    color: #212121;
                  ">
                    <h2>CONTRIBUTE</h2>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd4VM4g0Oqtj28jdn-J9yg3T0UEu0EPrY8BwnI26GYMVx1r1g/viewform?embedded=true" width="100%" height="2200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
    
    
                <br />
    
    
    
            </div>
    
        </div>
    
        <br /><br /><br />
    </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";

export default {
    name: "VolvoxTimes",
    components: {
        MainLayout,
    },
};
</script>



<style scoped>
/* BLOCKS */

#blocks-About {
    margin: 0px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 0;
    grid-gap: 10px;
}

.vtposter {
    border: 1px solid #cbbad2;
    border-radius: 30px;
    height: 350px;
    width: auto;
}

.block-About {
    background-color: #f3f9e6;
    color: #212121;
    border-collapse: collapse;
    overflow: auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8;
}

.block-About-header {
    font-size: 20pt;
    font-weight: bold;
    color: #212121;
    font-family: hersheyTrip;
    text-align: center;
    background-color: #cbbad2;
    padding: 15px;
    margin: 0px;
    border-bottom: 1px dotted #212121;
    align-items: center;
}

.block-About-link {
    font-size: 15pt;
    padding: 15px;
    align-items: center;
}

.block-About-link img {
    float: right;
    max-width: 250px;
    padding-bottom: 15px;
    padding-left: 25px;
}

.block-About-link a,
.block-shop a {
    color: #9879a6;
    text-decoration: none;
}

.block-About-link a:hover,
.block-shop a:hover,
a:hover {
    text-decoration: underline;
    cursor: pointer;
}

.block-About-shop {
    text-align: center;
    text-decoration: none;
    margin-top: 35%;
    margin-bottom: 45%;
    font-size: 10vh;
    max-height: 50vh;
}

.block-About-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 800px) {
    .block-About-link img {
        width: 35%;
    }
}

@media only screen and (max-device-width: 566px) {
    .block-About-link img {
        width: 35%;
    }
}
</style>