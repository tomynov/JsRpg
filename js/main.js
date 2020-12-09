// Bloc informations du joueur
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var inGame = false;

var classe_perso; //classe perso est la variables stockant les infos du perso choisi (classeperso.or permet de voir l'or du perso)
var class_monstre;
var choice_player; // donne le nom du perso choisi

// Variables boutique
var OrRequiredWeapon = 25;
var OrRequiredProtection = 25;
var OrRequiredMagie = 25;
var OrRequiredRest = 100;

//Numéro de l'ennemi a faire spawn
var nbr_ennemi = 0;
var i_boss = 0;

//Tableau hsitorique action combat
var Hist = [];

function PlayerInfo(){
    var infos = ['NOM : ', 'PV : ', 'MP : ', 'OR : '];
    var infos_nbr = [classe_perso.nom, classe_perso.pv, classe_perso.mp, classe_perso.or];
    for (i = 0; i< infos.length; i++){
        $("#div_infos").append(`<p class="p-div-infos"> ${infos[i]} ${infos_nbr[i]} </p>`);
    }
}

//Modal informations player
$("#div_infos").click(function(){
    modal.style.display = "block";
    var infos2 = ['NOM : ', 'PV : ', 'MP : ', 'ATK : ', 'DEF : ', 'DEF MAG : ', 'MAG : ', 'ESQ : ', 'VIT : ', 'OR : '];
    var infos2_nbr = [classe_perso.nom, classe_perso.pv, classe_perso.mp, classe_perso.atk, classe_perso.def, classe_perso.mag, classe_perso.protmag, classe_perso.esquive, classe_perso.vitesse, classe_perso.or];
    for(i=0; i < infos2.length; i++ ){
        $("#text_infos").append(`
            <p class="p-infos"> ${infos2[i]} ${infos2_nbr[i]} </p>
        `)
        if(choice_player == "guerrier"){
            document.getElementById('myModal').className = "modal show-is-img-guerrier"; 
        }
        else if(choice_player == "archer"){
            document.getElementById('myModal').className = "modal show-is-img-archer"; 
        }
        else if(choice_player == "ninja"){
            document.getElementById('myModal').className = "modal show-is-img-ninja"; 
        }
        else if(choice_player == "magicien"){
            document.getElementById('myModal').className = "modal show-is-img-magicien"; 
        }
    }
})

$("#close").click(function(){
    modal.style.display = "none";
    $(".p-infos").remove();
})

// Création des classes

$("#creaPerso").click(function(){
    classe_perso = new Guerrier();
    console.log(classe_perso);
    choice_player = "guerrier";
    startGame(); 
})

$("#creaPerso2").click(function(){
    classe_perso = new Archer();
    console.log(classe_perso);
    choice_player = "archer";
    startGame();
})

$("#creaPerso3").click(function(){
    classe_perso = new Ninja();
    console.log(classe_perso);
    choice_player = "ninja";
    startGame();
})

$("#creaPerso4").click(function(){
    classe_perso = new Magician();
    console.log(classe_perso);
    choice_player = "magicien";
    startGame();
})


        /////////////////////
        // Boutique
        /////////////////////

//Augmentation des stats de l'arme (atk)
$("#WeaponUp").click(function(){
    if(inGame == false){
        if (classe_perso.or >= OrRequiredWeapon){
            classe_perso.WeaponUp();
            classe_perso.or -= OrRequiredWeapon;
            OrRequiredWeapon += 10;
            $(".p-div-infos").remove();
            PlayerInfo();
        }
        else{
            alert("Vous n'avez pas assez d'or !");
        }
    }
    else{
        alert("Vous êtes en combat, GAGNEZ-LE et vous pourrez utiliser ma boutique");
    }
})

//Augmentation des stats de protection (prot)
$("#ProtUp").click(function(){
    if (inGame == false){
        if (classe_perso.or >= OrRequiredProtection){
            classe_perso.ProtUp();
            classe_perso.or -= OrRequiredProtection;
            OrRequiredProtection += 10;
            $(".p-div-infos").remove();
            PlayerInfo();
        }
        else{
            alert("Vous n'avez pas assez d'or"); 
        }
    }
    else{
        alert("Vous êtes en combat, GAGNEZ-LE et vous pourrez utiliser ma boutique");
    }   
})

//Augmentation des stats de magie (mag)
$("#MagUp").click(function(){
    if(inGame == false){
        if (classe_perso.or >= OrRequiredMagie){
            classe_perso.MagUp();
            classe_perso.or -= OrRequiredMagie;
            OrRequiredMagie += 10;
            $(".p-div-infos").remove();
            PlayerInfo();
        }
        else{
            alert("Vous n'avez pas assez d'or");   
        }
    }
    else{
        alert("Vous êtes en combat, GAGNEZ-LE et vous pourrez utiliser ma boutique");
    }
})

//Restauration des HP (hp)
$("#HpRest").click(function(){
    if (inGame == false){
        if(classe_perso.pv != classe_perso.maxpv){
            if (classe_perso.or >= OrRequiredRest){
                classe_perso.HpRest();
                classe_perso.or -= OrRequiredRest;
                $(".p-div-infos").remove();
                PlayerInfo();
            }
            else{
                alert("Vous n'avez pas assez d'or");   
            }
        }
        else{
            alert("Vous êtes deja full hp");
        }
    }
    else{
        alert("Vous êtes en combat, GAGNEZ-LE et vous pourrez utiliser ma boutique");
    }
})

//Restauration des MP (mp)
$("#MpRest").click(function(){
    if (inGame == false){
        if (classe_perso.pv != classe_perso.maxpv){
            if (classe_perso.or >= OrRequiredRest){
                classe_perso.MpRest();
                classe_perso.or -= OrRequiredRest;
                $(".p-div-infos").remove();
                PlayerInfo();
            }
            else{
                alert("Vous n'avez pas assez d'or");
            }
        }
        else{
            alert("Vous êtes deja full mp");
        }
    }
    else{
        alert("Vous êtes en combat, GAGNEZ-LE et vous pourrez utiliser ma boutique");
    }
})


function CreaEnnemi(){
   

    if( nbr_ennemi == 0){
        class_monstre = new Gobelin();
        document.getElementById('monster').className = "monster show-is-img-gobelin"; 
        console.log(class_monstre);
        nbr_ennemi++;
        if(i_boss == 2){
            class_monstre.levelUp();
            console.log(class_monstre);
        }
    }
    else if (nbr_ennemi == 1){
        class_monstre = new Goule();
        document.getElementById('monster').className = "monster show-is-img-goule"; 
        console.log(class_monstre);
        nbr_ennemi++;
        if(i_boss == 2){
            class_monstre.levelUp();
        }
    }
    else if (nbr_ennemi == 2){
        class_monstre = new Ogre();
        document.getElementById('monster').className = "monster show-is-img-ogre"; 
        nbr_ennemi++;
        if(i_boss == 2){
            class_monstre.levelUp();
        }
    }
    else if( nbr_ennemi == 3){
        class_monstre = new Esprit();
        document.getElementById('monster').className = "monster show-is-img-esprit"; 
        console.log(class_monstre);
        nbr_ennemi++;
        if(i_boss == 2){
            class_monstre.levelUp();
        }
    }
    else if (nbr_ennemi == 4){
        class_monstre = new Banshee();
        document.getElementById('monster').className = "monster show-is-img-banshee"; 
        console.log(class_monstre);
        if(i_boss == 3){
            class_monstre.levelUp();
            i_boss++;
            nbr_ennemi = 5;
        }
        else if(i_boss != 2){
            nbr_ennemi = 0;
            i_boss++;
            console.log(i_boss);
        }
    }
    if(i_boss==4 || nbr_ennemi == 5){
        console.log("Le BOSS vient d'arriver")
        class_monstre = new Dragon();
        document.getElementById('monster').className = "monster show-is-img-dragon"; 
        console.log(class_monstre);
        if(class_monstre.pv<=0)
        {
            console.log("Vous êtes une légende !");
            document.location.reload();
        }
    }
    
} //End CreaEnnemi

$("#btn-pre-combat").click(function(){
    CreaEnnemi();
    $(".p-hist").remove();
    inGame = true;
    $(".section_btnPerso").css({display: 'flex'});
    $(".btn_combat").css({display: 'block'});
    $(".div-btn-pre-combat").css({display : 'none'});
})

// Gestion interface : suppression des héros après choix de l'un d'entre eux
function startGame(){
    $("#sectInfos").css({display:'flex'});
    $("#showHeroes").css({display:'none'});
    $("#section_btnPerso").css({display:'block'});
    $("#combat").css({display : 'flex'});
    $(".div-btn-pre-combat").css({display : 'block'});
    if(choice_player == "guerrier"){
        document.getElementById('player').className = "player show-is-img-guerrier"; 
    }
    else if(choice_player == "archer"){
        document.getElementById('player').className = "player show-is-img-archer"; 
    }
    else if(choice_player == "ninja"){
        document.getElementById('player').className = "player show-is-img-ninja"; 
    }
    else if(choice_player == "magicien"){
        document.getElementById('player').className = "player show-is-img-magicien"; 
    }
    PlayerInfo();
}

function returnLobby(){
    nbr_ennemi = 0;
    $("#showHeroes").css({display:'flex'});
    $("#section_btnPerso").css({display:'none'});
    $("#combat").css({display : 'none'});
    $(".div-btn-pre-combat").css({display : 'none'});
    $(".p-div-infos").remove();
}

function AfficheHistoriqueCombat(){
    if (Hist.length < 6){
        Hist.push(" " + " L'ennemi attaque : "+ classe_perso.nom + " à encore " + classe_perso.pv + " pv");
        Hist.push(" " + " Vous attaquez : "+ class_monstre.nom + " à encore " + class_monstre.pv + " pv");
        if(class_monstre.pv<=0 && classe_perso.pv>0)
        {
            Hist.shift();
            Hist.push("You Win !");
        }
        else if (classe_perso.pv<=0)
        {
            Hist.shift();
            Hist.push("You loose !");
        }
        console.log(Hist);
        $(".p-hist").remove();
        for (i = 0; i<Hist.length; i++){
            $("#affiche_combat").append(`<p id="affiche_remove" class="p-hist""> ${Hist[i]} </p>`);
        }
        
        console.log(Hist);
    }
    else{
        Hist.shift();
        Hist.shift();
        AfficheHistoriqueCombat();
    }
}

function ClearHistorique(){
    i =0;
    Hist.splice(i, Hist.length)
}