<template>
    <div id="app">

        <div id="cafeDoorStyle">

        <p class="cafeDoorP">✧ volvox cafe<br>
        welcome. what's the password?</p>
        <br>
        <input class="cafeDoorInput" type="text" id="fname" name="fname">
        <a class="cafeEnter"><router-link to="/toronto">enter</router-link></a>
        <br><br>
        <p class="cafeDoorP">subscribe to our <a class="cafeDoorP" style="text-decoration: underline;"><router-link to="/support">newsletter</router-link></a> for the password</p>

        </div>
        
        <slot/>
    </div>
</template>

<style>
#cafeDoorStyle {
    margin: 0;
    color: saddlebrown;
    background-color: honeydew;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;
    padding: 30px;
    line-height: 2;
}

.cafeDoorP, .cafeDoorP a {
    font-family: sans-serif;
    color: saddlebrown;
    font-size: 14px;
}

.cafeDoorP a:hover {
    font-style: italic;
}

.cafeDoorInput {
    height: 23px;
    border: 1px solid saddlebrown;
}

.cafeEnter a {
    border: 1px solid saddlebrown;
    font-family: sans-serif;
    color: saddlebrown;
    margin-left: 10px;
    padding: 5px;
}

</style>