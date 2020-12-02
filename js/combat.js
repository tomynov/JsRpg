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


    /// FONCTION COMBAT ///
$("#atk").click(function(){
    // let archer = new Archer();
    // let ninja = new Ninja();
    // let magicien = new Magician();
    // let gobelin = new Gobelin();
    // let esprit = new Esprit();
        Attaque();
})

    /// FONCTION ATTAQUE ///
    function Attaque(){
        let guerrier = new Guerrier();
        let orgre = new Ogre();
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

