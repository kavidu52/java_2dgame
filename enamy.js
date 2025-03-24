var zombie1 = document.getElementById("boy1");
var zombie2 = document.getElementById("boy2");
var zombie3 = document.getElementById("boy3");
var zombie4 = document.getElementById("boy4");
var zombie5 = document.getElementById("boy5");
var boy_margin_left = 500;
var zombie_margin_left = 500;



///////////////////////walk/////////////////////////////////////////////////////

//zombei 1

var ZWimage = 1;
var z1ombieidleAnimationStartnumber = 0;
function z1ombieidleAnimation() {
    zombie1.src = "anime/Zombie1/animation/Walk" + ZWimage + ".png";
    ZWimage++;
    if (ZWimage == 4) {
        ZWimage = 1;
    }
    console.log(boy_margin_left);
    console.log(zombie1_margin);
}
function z1ombieidleAnimationStart() {
    z1ombieidleAnimationStartnumber = setInterval(z1ombieidleAnimation, 1000);

}
//zombei 2

var ZWimage = 1;
var z2ombieidleAnimationStartnumber = 0;
function z2ombieidleAnimation() {
    zombie2.src = "anime/Zombie2/animation/Walk" + ZWimage + ".png";
    ZWimage++;
    if (ZWimage == 4) {
        ZWimage = 1;
    }
}
function z2ombieidleAnimationStart() {
    z2ombieidleAnimationStartnumber = setInterval(z2ombieidleAnimation, 1000);

}
//zombei 3

var ZWimage = 1;
var z3ombieidleAnimationStartnumber = 0;
function z3ombieidleAnimation() {
    zombie3.src = "anime/Zombie1/animation/Walk" + ZWimage + ".png";
    ZWimage++;
    if (ZWimage == 4) {
        ZWimage = 1;
    }
}
function z3ombieidleAnimationStart() {
    z3ombieidleAnimationStartnumber = setInterval(z3ombieidleAnimation, 1000);

}
//zombei 4

var ZWimage = 1;
var z4ombieidleAnimationStartnumber = 0;
function z4ombieidleAnimation() {
    zombie4.src = "anime/Zombie3/animation/Walk" + ZWimage + ".png";
    ZWimage++;
    if (ZWimage == 4) {
        ZWimage = 1;
    }
}
function z4ombieidleAnimationStart() {
    z4ombieidleAnimationStartnumber = setInterval(z4ombieidleAnimation, 1000);

}
//zombei 5

var ZWimage = 1;
var z5ombieidleAnimationStartnumber = 0;
function z5ombieidleAnimation() {
    zombie5.src = "anime/Zombie1/animation/Walk" + ZWimage + ".png";
    ZWimage++;
    if (ZWimage == 4) {
        ZWimage = 1;
    }
}
function z5ombieidleAnimationStart() {
    z5ombieidleAnimationStartnumber = setInterval(z5ombieidleAnimation, 1000);

}
////////////////////////////////////////////////////////movement//////////////////////////////////////////////////////////////////////

//zombie movment



///zombie1

var zombie1_margin = 1750;
var zombie1_movmentStartNumber = 0;
function zombie1_movment() {

    

        runAnimationStartNumber >= 1 ? zombie1_margin -= 20 : zombie1_margin -= 5 ;
        BackrunAnimationStartNumber >= 1 ? zombie1_margin += 10 : zombie1_margin -= 5 ;

    



    

    
    zombie1.style.marginLeft = zombie1_margin + "px";
    if (600 > zombie1_margin) {

        clearInterval(zombie1_movmentStartNumber);
        clearInterval(z1ombieidleAnimationStartnumber);
        if (zombeiattackStartNumber == 0) {
            zombeiattackStart();

        }




    }

}
function zombie1_movmentStart() {

    zombie1_movmentStartNumber = setInterval(zombie1_movment, 200);


}
///zombie2

var zombie2_margin = 2300;
var zombie2_movmentStartNumber = 0;
function zombie2_movment() {

    runAnimationStartNumber >= 1 ?  zombie2_margin -= 20 : zombie2_margin -= 5 ;
    BackrunAnimationStartNumber >= 1 ? zombie2_margin += 10 : zombie2_margin -= 5 ;
    zombie2.style.marginLeft = zombie2_margin + "px";
    if (600 > zombie2_margin) {

        clearInterval(zombie2_movmentStartNumber);
        clearInterval(z2ombieidleAnimationStartnumber);
        if (z2ombeiattackStartNumber == 0) {
            z2ombeiattackStart();

        }



    }
}
function zombie2_movmentStart() {
    zombie2_movmentStartNumber = setInterval(zombie2_movment, 200);
}
///zombie3

var zombie3_margin = 2600;
var zombie3_movmentStartNumber = 0;
function zombie3_movment() {

    runAnimationStartNumber >= 1 ?  zombie3_margin -= 20 : zombie3_margin -= 5 ;
    BackrunAnimationStartNumber >= 1 ? zombie3_margin += 10 : zombie3_margin -= 5 ;
    zombie3.style.marginLeft = zombie3_margin + "px";
    if (600 > zombie3_margin) {

        clearInterval(zombie3_movmentStartNumber);
        clearInterval(z3ombieidleAnimationStartnumber);
        if (z3ombeiattackStartNumber == 0) {
            z3ombeiattackStart();

        }

    }
}
function zombie3_movmentStart() {
    zombie3_movmentStartNumber = setInterval(zombie3_movment, 200);
}
///zombie4

var zombie4_margin = 3000;
var zombie4_movmentStartNumber = 0;
function zombie4_movment() {

    runAnimationStartNumber >= 1 ?  zombie4_margin -= 20 : zombie4_margin -= 5 ;
    BackrunAnimationStartNumber >= 1 ? zombie4_margin += 10 : zombie4_margin -= 5 ;
    zombie4.style.marginLeft = zombie4_margin + "px";
    if (600 > zombie4_margin) {


        clearInterval(zombie4_movmentStartNumber);
        clearInterval(z4ombieidleAnimationStartnumber);
        if (z4ombeiattackStartNumber == 0) {
            z4ombeiattackStart();

        }
    }
}
function zombie4_movmentStart() {
    zombie4_movmentStartNumber = setInterval(zombie4_movment, 200);
}
///zombie5

var zombie5_margin = 3200;
var zombie5_movmentStartNumber = 0;
function zombie5_movment() {

    runAnimationStartNumber >= 1 ?  zombie5_margin -= 20 : zombie5_margin -= 5 ;
    BackrunAnimationStartNumber >= 1 ? zombie5_margin += 10 : zombie5_margin -= 5 ;
    zombie5.style.marginLeft = zombie5_margin + "px";
    console.log("${zombie5_margin}");
    console.log(zombie5_margin);
    console.log("${zombie5_margin}");
    if (600 > zombie5_margin) {

        clearInterval(zombie5_movmentStartNumber);
        clearInterval(z5ombieidleAnimationStartnumber);
        if (z5ombeiattackStartNumber == 0) {
            z5ombeiattackStart();

        }

    }
}
function zombie5_movmentStart() {
    zombie5_movmentStartNumber = setInterval(zombie5_movment, 200);
}
//////////////////////////////////////////////////////////////////////zombei attack//////////////////////////////////////////////////////////////

//zombie 1

{
    var zimage = 1;
    var zombeiattackStartNumber = 0;
    function zombeiattack() {

        zombie1.src = "anime/Zombie1/animation/Attack" + zimage + ".png";
        zimage++;
        if (zimage == 6) {
            zimage = 1;
        }
    }
    function zombeiattackStart() {
        zombeiattackStartNumber = setInterval(zombeiattack, 500);
    }
}
//zombie 2

{
    var z2image = 1;
    var z2ombeiattackStartNumber = 0;
    function z2ombeiattack() {

        zombie2.src = "anime/Zombie2/animation/Attack" + z2image + ".png";
        z2image++;
        if (z2image == 6) {
            z2image = 1;
        }
    }
    function z2ombeiattackStart() {
        z2ombeiattackStartNumber = setInterval(z2ombeiattack, 500);
    }
}
//zombie 3

{
    var z3image = 1;
    var z3ombeiattackStartNumber = 0;
    function z3ombeiattack() {

        zombie3.src = "anime/Zombie1/animation/Attack" + z3image + ".png";
        z3image++;
        if (z3image == 6) {
            z3image = 1;
        }
    }
    function z3ombeiattackStart() {
        z3ombeiattackStartNumber = setInterval(z3ombeiattack, 500);
    }
}
//zombie 4

{
    var z4image = 1;
    var z4ombeiattackStartNumber = 0;
    function z4ombeiattack() {

        zombie4.src = "anime/Zombie1/animation/Attack" + z4image + ".png";
        z4image++;
        if (z4image == 6) {
            z4image = 1;
        }
    }
    function z4ombeiattackStart() {
        z4ombeiattackStartNumber = setInterval(z4ombeiattack, 500);
    }
}
//zombie 5

{
    var z5image =1;
    var z5ombeiattackStartNumber = 0;
    function z5ombeiattack() {

        zombie5.src = "anime/Zombie1/animation/Attack" + z5image + ".png";
        z5image++;
        if (z5image == 6) {
            z5image = 1;
        }
    }
    function z5ombeiattackStart() {
        z5ombeiattackStartNumber = setInterval(z5ombeiattack, 500);
    }
}



///////////////////////////////////death//////////////////////////////////////////////////////////////////////



//zombie 1

{
    var zD1image =1;
    var zD1ombeiattackStartNumber = 0;
    function ZdeathAnimation() {

        zombie1.src = "anime/Zombie1/animation/Dead" + zD1image + ".png";
        zD1image++;
        if (zD1image == 4) {
            zombie1.style.visibility = "hidden";
            zombie1.style.marginLeft -= 20 + "px";
        }
    }
    function ZdeathAnimationStart() {
        zD1ombeiattackStartNumber = setInterval(ZdeathAnimation, 500);
    }
}
//zombie 2

{
    var zD2image =1;
    var zD2ombeiattackStartNumber = 0;
    function Z2deathAnimation() {

        zombie2.src = "anime/Zombie2/animation/Dead" + zD2image + ".png";
        zD2image++;
        if (zD2image == 4) {
            zombie2.style.visibility = "hidden";
            zombie2.style.marginLeft -= 20 + "px";
        }
    }
    function Z2deathAnimationStart() {
        zD2ombeiattackStartNumber = setInterval(Z2deathAnimation, 500);
    }
}
//zombie 3

{
    var zD3image =1;
    var zD3ombeiattackStartNumber = 0;
    function Z3deathAnimation() {

        zombie3.src = "anime/Zombie1/animation/Dead" + zD3image + ".png";
        zD3image++;
        if (zD3image == 4) {
            zombie3.style.visibility = "hidden";
            zombie3.style.marginLeft -= 20 + "px";
        }
    }
    function Z3deathAnimationStart() {
        zD3ombeiattackStartNumber = setInterval(Z3deathAnimation, 500);
    }
}
//zombie 4

{
    var zD4image =1;
    var zD4ombeiattackStartNumber = 0;
    function Z4deathAnimation() {

        zombie4.src = "anime/Zombie3/animation/Dead" + zD4image + ".png";
        zD4image++;
        if (zD4image == 4) {
            zombie4.style.visibility = "hidden";
            zombie4.style.marginLeft -= 20 + "px";
        }
    }
    function Z4deathAnimationStart() {
        zD4ombeiattackStartNumber = setInterval(Z4deathAnimation, 500);
    }
}
//zombie5

{
    var zD5image =1;
    var zD5ombeiattackStartNumber = 0;
    function Z5deathAnimation() {

        zombie5.src = "anime/Zombie3/animation/Dead" + zD5image + ".png";
        zD5image++;
        if (zD5image == 4) {
            zombie5.style.visibility = "hidden";
            zombie5.style.marginLeft -= 20 + "px";
        }
    }
    function Z5deathAnimationStart() {
        zD5ombeiattackStartNumber = setInterval(Z5deathAnimation, 500);
    }
}