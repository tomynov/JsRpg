// import {Personnage} from './Personnage.js';

$("#creaPerso").click(function(){
    var guerrier = new Guerrier();
    var ogre = new Ogre();
    console.log(guerrier);
    console.log(ogre);
})

$("#atk").click(function(){
    let guerrier = new Guerrier();
    let orgre = new Ogre();
    while (guerrier.pv >0 && orgre.pv >0)
    {
        console.log(guerrier);
        console.log(orgre);
        guerrier.pv -= orgre.mp;
        orgre.pv -= guerrier.mp;
        if (guerrier.pv <= 0){
            console.log("Loose");
        }
        else if (orgre.pv<=0){
            console.log("Win");
            guerrier.levelUp();
            console.log(guerrier);
        }
    }
})