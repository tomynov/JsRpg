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

function FinCombat(){
    inGame = false;
    $(".section_btnPerso").css({display: 'none'});
    $(".btn_combat").css({display: 'none'});
    $(".div-btn-pre-combat").css({display : 'block'});
}

    //Combat
$("#atk").click(function (){
        classe_perso.pv -= Math.abs(class_monstre.atk - classe_perso.prot);
        class_monstre.pv -= Math.abs(classe_perso.atk - class_monstre.prot); 

        AfficheHistoriqueCombat();
        // console.log("Vous avez " + classe_perso.pv + " pv");
        // console.log("L'adversaire à encore " + class_monstre.pv + "pv !");
        $(".p-div-infos").remove();
        PlayerInfo();

        if (classe_perso.pv <= 0){ //Cas où le joueur perd
            console.log("Loose");
            FinCombat();
            document.location.reload();
        }
        else if (class_monstre.pv<=0){ //Cas où le joueur gagne
            console.log("Win");
            classe_perso.levelUp();
            classe_perso.or +=30;
            console.log(classe_perso);
            FinCombat();
            ClearHistorique();
        }
})

$("#srt").click(function(){
    if (classe_perso.mp > 0){
        classe_perso.pv -= Math.abs(class_monstre.atk - classe_perso.prot);
        class_monstre.pv -= Math.abs(classe_perso.mag - class_monstre.prot);
        classe_perso.mp -= 1;

        AfficheHistoriqueCombat();
        // console.log("Vous avez " + classe_perso.pv + " pv");
        // console.log("L'adversaire à encore " + class_monstre.pv + " pv !");
        $(".p-div-infos").remove();
        PlayerInfo();        

        if (classe_perso.pv <= 0){
            console.log("Loose");
            FinCombat();
            document.location.reload();
        }
        else if (class_monstre.pv<=0){
            console.log("Win");
            classe_perso.levelUp();
            classe_perso.or +=30;
            console.log(classe_perso);
            FinCombat();
            ClearHistorique();
        }
    }
    else{
        alert("Vous n'avez pas assez de mp");
    }
    
})

//Donne les infos du personnages
$("#info").click(function (){
    console.log(classe_perso);
})

    //Rafraichit la page lorsque l'utisateur abandonne
$("#run").click(function (){
    document.location.reload();
})
