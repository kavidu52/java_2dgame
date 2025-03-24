var boy = document.getElementById("boy");
var Margin_Top = 590;
var Margin_Left = 100;
var kunai_margin_left = 150;
var boy_margin_left = 500;
var zombie_margin_left = 750;



////////////////////key press////////////////////////////////////////////////////
function keyPress(event) {
    // alert(event.key);


    var key = event.key;


    //run

    if (key == "d") {
       
        if (runAnimationStartNumber == 0) {
            runAnimationStart();
            clearInterval(idleAnimatonStartNumber);
            moveBacgroundStart();
          






            //z1
            if (zombie1_movmentStartNumber == 0) {
                zombie1_movmentStart();

            }

            //z2
            if (zombie2_movmentStartNumber == 0) {
                zombie2_movmentStart();

            }
            //z3
            if (zombie3_movmentStartNumber == 0) {
                zombie3_movmentStart();

            }
            //z4
            if (zombie4_movmentStartNumber == 0) {
                zombie4_movmentStart();

            }
            //z5
            if (zombie5_movmentStartNumber == 0) {
                zombie5_movmentStart();

            }

        }







    }

    // run back
    if (key == "a") {
        if (BackrunAnimationStartNumber == 0) {
            BackrunAnimationStart(),
                clearInterval(idleAnimatonStartNumber);
            bmovebacgroundStart();


        }
    }
    //throw

    if (key == "e") {
        if (throwAnimatnStartNumber == 0) {
            clearInterval(idleAnimatonStartNumber);
            throwAnimatnStart();
            image = 0;

        }




    }
    //attack
    if (key == "f") {
        if (attackAnimationStartNumber == 0) {
            clearInterval(idleAnimatonStartNumber);
            attackAnimationStart();
            image = 0;
            if (600 > zombie1_margin) {

                clearInterval(zombeiattackStartNumber);
                ZdeathAnimationStart();
                
               

            }
            if (600 > zombie2_margin) {

                clearInterval(z2ombeiattackStartNumber);
                Z2deathAnimationStart();

            }
            if (600 > zombie3_margin) {

                clearInterval(z3ombeiattackStartNumber);
                Z3deathAnimationStart();

            }
            if (600 > zombie4_margin) {

                clearInterval(z4ombeiattackStartNumber);
                Z4deathAnimationStart();

            }
            if (600 > zombie5_margin) {

                clearInterval(z5ombeiattackStartNumber);
                Z5deathAnimationStart();

            }

        }

    }
    //jumping Atack
    if (key == "r") {
        if (jumpingAtackAnimationStartNumber == 0) {

            clearInterval(idleAnimatonStartNumber);

            jumpingAtackAnimationStart();

            image = 0;
            moveBacgroundStart();
        }
    }
    if (key == "c") {
        if (slideAnimationStartNumber == 0) {
            clearInterval(idleAnimatonStartNumber);
            slideAnimationStart();
            moveBacgroundStart();

        }
    }



}

////////////////////end key////////////////////////////////////////////////////

////////////////////key up ////////////////////////////////////////////////////
{
    function keyup(event) {
        // alert(event.key);


        var Ukey = event.key;


        //run

        if (Ukey == "d") {

            clearInterval(runAnimationStartNumber);

            idleAnimatonStart();
            runAnimationStartNumber = 0;
            clearInterval(moveBacgroundStartNumber);
            








        }
        //back run
        if (Ukey == "a") {

            clearInterval(BackrunAnimationStartNumber);
            idleAnimatonStart();
            BackrunAnimationStartNumber = 0;
            clearInterval(movebackground_stop);

        }
        //throw
        if (Ukey == "e") {

            clearInterval(throwAnimatnStartNumber);
            throwAnimatnStartNumber = 0;
            idleAnimatonStart();





        }
        //attack
        if (Ukey == "f") {
            clearInterval(attackAnimationStartNumber);
            attackAnimationStartNumber = 0;
            idleAnimatonStart();
        }
        //jumping Attak
        if (Ukey == "r") {
            clearInterval(jumpingAtackAnimationStartNumber);
            clearInterval(moveBacgroundStartNumber);
            jumpingAtackAnimationStartNumber = 0;
            idleAnimatonStart();
        }
        //slide
        if (Ukey == "c") {
            clearInterval(slideAnimationStartNumber);
            clearInterval(moveBacgroundStartNumber);
            idleAnimatonStart();
            slideAnimationStartNumber = 0;
        }



    }

}



////////////////////end key up////////////////////////////////////////////////////




////////////////////////////////////////////////idle//////////////////////////////////////////////////

{
    var image = 0;
    var idleAnimatonStartNumber = 0;
    function idleAnimaton() {

        boy.src = "images/idle/Idle__00" + image + ".png";
        image++;
        if (image == 10) {
            image = 0;
        }
    }
    function idleAnimatonStart() {
        idleAnimatonStartNumber = setInterval(idleAnimaton, 75);
    }
}

////////////////////////////////end idle ////////////////////////////////////////////////////////////////////

////////////////////////////////////////run ////////////////////////////////////////////////////////////////////


{
    var Rimage = 0;
    var runAnimationStartNumber = 0;
    function runAnimation() {
        boy.src = "images/walk/Run__00" + Rimage + ".png";
        Rimage++;
        if (Rimage == 10) {
            Rimage = 0;
        }
    }
    function runAnimationStart() {
        runAnimationStartNumber = setInterval(runAnimation, 75);

    }


}
//////////////////////////////////end run //////////////////////////////////////////////////////////////////////
//////////////////////////////////back run //////////////////////////////////////////////////////////////////////
{
    var RBimage = 0;
    var BackrunAnimationStartNumber = 0;
    function BackrunAnimation() {
        boy.src = "images/walk/flip/image (" + RBimage + ").png";
        RBimage++;
        if (RBimage == 10) {
            RBimage = 0;
        }
    }
    function BackrunAnimationStart() {
        BackrunAnimationStartNumber = setInterval(BackrunAnimation, 75);

    }


}


//////////////////////////////////end back run //////////////////////////////////////////////////////////////////////


//////////////////////////////////move background //////////////////////////////////////////////////////////////////////
var backgroundPositionXimage = 0;
var moveBacgroundStartNumber = 0;
var background = document.getElementById("background");
function moveBacground() {

    backgroundPositionXimage -= 20;
    background.style.backgroundPositionX = backgroundPositionXimage + "px";
}
function moveBacgroundStart() {
    moveBacgroundStartNumber = setInterval(moveBacground, 75);
}
//back
var backgroundPositionXimg = 0;
var movebackground_stop = 0;
function bmovebacground() {
    backgroundPositionXimage += 20;
    background.style.backgroundPositionX = backgroundPositionXimage + "px";
}
function bmovebacgroundStart() {
    movebackground_stop = setInterval(bmovebacground, 75);

}




///////////////////////////////end move background //////////////////////////////////////////////////////////////////////
////////////////////////////////// throw //////////////////////////////////////////////////////////////////////

function throwAnimatn() {


    var kunai = document.getElementById("kunai");




    boy.src = "images/trow/Throw__00" + image + ".png";
    image++;
    console.log(image);

    if (image > 3) {
        kunai.style.visibility = "visible";

        for (var i = 0; 100 > i; i++) {
            kunai_margin_left += 5;
            kunai.style.marginLeft = kunai_margin_left + "px";
            console.log(kunai_margin_left);
        }



    }

    if (image == 9) {
        image = 0;
    }



}
var throwAnimatnStartNumber = 0;
function throwAnimatnStart() {
    throwAnimatnStartNumber = setInterval(throwAnimatn, 80);
}

//////////////////////////////////end throw //////////////////////////////////////////////////////////////////////
////////////////////////////////// attack //////////////////////////////////////////////////////////////////////

function attackAnimation() {

    boy.src = "images/atak/Attack__00" + image + ".png";
    image++;
    if (image == 10) {
        image = 1;
    }
}
var attackAnimationStartNumber = 0;
function attackAnimationStart() {
    attackAnimationStartNumber = setInterval(attackAnimation, 100);
}

//////////////////////////////////end attack //////////////////////////////////////////////////////////////////////
//////////////////////////////////jumpimg attack //////////////////////////////////////////////////////////////////////

function jumpingAtackAnimation() {


    boy.src = "images/atak/jumping/Jump_Attack__00" + image + ".png";
    image++;



    if (image <= 4) {
        boy.style.marginTop = Margin_Top - 40 + "px";
    }
    if (image > 5) {
        boy.style.marginTop = Margin_Top + 10 + "px";
    }



    if (image == 9) {
        image = 0;
    }
}
var jumpingAtackAnimationStartNumber = 0;
function jumpingAtackAnimationStart() {
    jumpingAtackAnimationStartNumber = setInterval(jumpingAtackAnimation, 75);
}





// /////////////////////////////end jumpimg attack //////////////////////////////////////////////////////////////////////
// ///////////////////////////// slid //////////////////////////////////////////////////////////////////////
var slideAnimationStartNumber = 0;

function slideAnimation() {

    boy.src = "images/slide/Slide__00" + image + ".png";
    image++;
    if (image > 1) {
        boy.style.height = 180 + "px";

    }
    if (image == 10) {
        image = 1
    }
}
function slideAnimationStart() {
    slideAnimationStartNumber = setInterval(slideAnimation, 75);
}


// /////////////////////////////end slid //////////////////////////////////////////////////////////////////////



//enamy




