// import {Personnage} from './Personnage.js';

    //// CREATION DES PERSO (console) ////

// $("#creaPerso").click(function(){
//     var guerrier = new Guerrier();
//     console.log(guerrier);
// })

$("#creaMonstre").click(function(){
    var ogre = new Ogre();
    console.log(ogre);
})

$("#creaMonstre2").click(function(){
    var gobelin = new Gobelin();
    console.log(gobelin);
})

$("#creaMonstre3").click(function(){
    var esprit = new Esprit();
    console.log(esprit);
})

    /// FONCTION ATTAQUE ///
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
