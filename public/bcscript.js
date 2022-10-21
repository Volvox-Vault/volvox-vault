function changeText(value) {
    var div = document.getElementById("para");
    var text = "";
  
    if (value == 1) text += "The collage in the tattoo studio. Artist unknown.";
    if (value == 2)
      text +=
        "Thank you: From me, to me...<br /> Thank you for showing up. Thank you for choosing you. Thank you for being here.";
    if (value == 3)
      text +=
        "Dots on fingers: These are identical on each hand, and mean nothing more than their adornment. They were done by a dear friend. She’s a big part of my life and these are the piece of her I bring with me always.";
    if (value == 4)
      text +=
        "Crow in frame w moon and star: This piece is flush with the curvature of my shoulder, merging into one with the shape of my body. I just like crows and artwork. :)";
    if (value == 5)
      text +=
        "Red heart: Along with the <em>thank you</em>, I got this red heart from me, to me. <br /> I drew it and it’s my only color tattoo. It’s always a lovely reminder and constant friend.";
    if (value == 6)
      text +=
        "Wishbone: My first tattoo, forever a reminder of my eighteen year old self and her life philosophies.";
    if (value == 7)
      text +=
        "Carrot on arm: Remnants of a past life, of a past friendship. This is a matching tattoo with a friend I had long ago, now memorialized on both of our bodies.";
    if (value == 8)
      text +=
        "Butterflies on wrist: I got these butterflies after a tough and magical time. Recovering from an eating disorder, watching little white butterflies in the garden outside the grocery store would calm my brewing anxiety.";
  
    div.innerHTML = text;
  }
  
