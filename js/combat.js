// import {Personnage} from './Personnage.js';

    //// CREATION DES PERSO (console) ////

// $("#creaPerso").click(function(){
//     var guerrier = new Guerrier();
//     console.log(guerrier);
// })


    /// FONCTION FIGHT ///

    //Lancement
/*
$("#btn-pre-combat").click(function lancement(){
    classe_perso;
    //classe_monstre =new Monstre[Gobelin, Esprit, Goule, Ogre, Banshee, DragonBlancAuxYeuxBleus];
    //let Esprit = Monstre.push(Esprit)
    //let Monstre = [Gobelin, Esprit, Orgre]
});
*/

function attaquetest(){
    if(classe_perso.vitesse < class_monstre.vitesse){
        classe_perso.pv -= (class_monstre.atk - classe_perso.prot);
    }
    else{
        console.log("Vous commencez");
    }
}

function FinCombat(){
    $(".section_btnPerso").css({display: 'none'});
    $(".btn_combat").css({display: 'none'});
    $(".div-btn-pre-combat").css({display : 'block'});
}

    //Combat
$("#atk").click(function (){
    // while (classe_perso.pv >0 && class_monstre.pv >0)
    // {
        classe_perso.pv -= (class_monstre.atk - classe_perso.prot);
        class_monstre.pv -= (classe_perso.atk - class_monstre.prot); 
        console.log("Vous avez " + classe_perso.pv + " pv");
        console.log("L'adversaire à encore " + class_monstre.pv + "pv !");
        $(".p-div-infos").remove();
        PlayerInfo();
        if (classe_perso.pv <= 0){
            console.log("Loose");
            FinCombat();
            returnLobby();
        }
        else if (class_monstre.pv<=0){
            console.log("Win");
            classe_perso.levelUp();
            classe_perso.or +=30;
            console.log(classe_perso);
            FinCombat();
        // }
        }
    //lancement();
})

$("#run").click(function (){
    FinCombat();
    returnLobby();
})
