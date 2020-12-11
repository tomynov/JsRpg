var esquive_random;

////////////////
/// Retrait des boutons permettant de combattre un ennemi, possibilité d'utiliser la boutique et de lancer un autre combat
////////////////
function FinCombat(){
    inGame = false;
    $(".section_btnPerso").css({display: 'none'});
    $(".btn_combat").css({display: 'none'});
    $(".div-btn-pre-combat").css({display : 'block'});
    $(".p-div-infos").remove();
    PlayerInfo();
}


//////////////
///Fonction déterminant si le joueur subit des degats ou esquive l'attaque
//////////////

//Random nombre
function getRandomInt(max) {
    esquive_random = Math.floor(Math.random() * Math.floor(max));
    return esquive_random;
}

//Calculer si le joueur esquive l'attaque du monstre
function EsquiveJoueur(max){
    getRandomInt(max);
    if (classe_perso.esquive < esquive_random){
        classe_perso.pv -= Math.abs(class_monstre.atk - classe_perso.prot);
        Hist.push(" " + " L'ennemi attaque : "+ classe_perso.nom + " à " + classe_perso.pv + " pv");
    }
    else{
        Hist.push("L'ennemi a raté son attaque !")
    }
}

//Calculer si le monstre esquive l'attaque du joueur
function EsquiveMonstre(max){
    getRandomInt(max);
    if (class_monstre.esquive < esquive_random){
        class_monstre.pv -= Math.abs(classe_perso.atk - class_monstre.prot); 
        Hist.push(" " + " Vous attaquez : "+ class_monstre.nom + " à " + class_monstre.pv + " pv");
    }
    else{
        Hist.push("Vous avez raté votre attaque !")
    }
}

//Calculer si le monstre esquive le sort du joueur
function EsquiveMpMonstre(max){
    getRandomInt(max);
    if (class_monstre.esquive < esquive_random){
        class_monstre.pv -= Math.abs(classe_perso.mag - class_monstre.prot); 
        Hist.push(" " + " Vous attaquez : "+ class_monstre.nom + " à " + class_monstre.pv + " pv");
    }
    else{
        Hist.push("Vous avez raté votre sort !")
    }
}


///////////////
///Vérification de la fin de comabt (pv <= 0 pour joueur et monstres)
///////////////
function verif(){
    if (classe_perso.pv <= 0){ //Cas où le joueur perd
        FinCombat();
        localStorage.clear();
        document.location.reload();
    }
    else if (class_monstre.pv<=0){ //Cas où le joueur gagne
        classe_perso.levelUp();
        classe_perso.or +=30;
        FinCombat();
        if(i_boss == 5){
            Hist.shift();
            Hist.push("Vous êtes une légende !");
            document.location.reload();
        }
    }
}


////////////////
///Les attaques ou intéractions via les boutons (Attaquer, Compétences, Abandonner)
////////////////

    //Attaque simple
$("#atk").click(function (){
    if (classe_perso.vitesse >= class_monstre.vitesse){
        EsquiveMonstre(100);
        verif();
        if (inGame == true){
            EsquiveJoueur(100);
        }
    }
    else{
        EsquiveJoueur(100);
        verif();
        EsquiveMonstre(100);
    }
    AfficheHistoriqueCombat();
    $(".p-div-infos").remove();
    PlayerInfo();
})

    //Attaque magique
$("#srt").click(function(){
    if (classe_perso.mp > 0){
        if (classe_perso.vitesse >= class_monstre.vitesse){
            EsquiveMpMonstre(100);
            verif();
            if (inGame == true){
                EsquiveJoueur(100);
            }
            classe_perso.mp -= 1;
        }
        else{
            EsquiveJoueur(100);
            verif();
            EsquiveMpMonstre(100);
            classe_perso.mp -= 1;
        }
        AfficheHistoriqueCombat();
        $(".p-div-infos").remove();
        PlayerInfo();
    }
    else{
        alert("Vous n'avez pas assez de mp");
    }
})

    //Bouton abandonner (rafraichi la page lors de l'banadon)
$("#run").click(function (){
    document.location.reload();
    localStorage.clear()
})