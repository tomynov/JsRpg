// Bloc informations du joueur
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var classe_perso; //classe perso est la variables stockant les infos du perso choisi (classeperso.or permet de voir l'or du perso)
var class_monstre;
var choice_player; // donne le nom du perso choisi

// Variables boutique
var OrRequiredWeapon = 10;
var OrRequiredProtection = 10;
var OrRequiredMagie = 10;
var OrRequiredRest = 20;

//Numéro de l'ennemi a faire spawn
var nbr_ennemi = 1;
var i_boss = 0;

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
    console.log(choice_player);
    choice_player = "magicien";
    startGame();
})


        /////////////////////
        // Boutique
        /////////////////////

//Augmentation des stats de l'arme (atk)
$("#WeaponUp").click(function(){
    if(classe_perso.or >= OrRequiredWeapon){
        classe_perso.WeaponUp();
        classe_perso.or -= OrRequiredWeapon;
        OrRequiredWeapon += 10;
        $(".p-div-infos").remove();
        PlayerInfo();
    }
    else{
        alert("Vous n'avez pas assez d'or !")
    }
})

//Augmentation des stats de protection (prot)
$("#ProtUp").click(function(){
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
})

//Augmentation des stats de magie (mag)
$("#MagUp").click(function(){
    if(classe_perso.or >= OrRequiredMagie){
        classe_perso.MagUp();
        classe_perso.or -= OrRequiredMagie;
        OrRequiredMagie += 10;
        $(".p-div-infos").remove();
        PlayerInfo();
    }
    else{
        alert("Vous n'avez pas assez d'or");
    }
})

//Restauration des HP (hp)
$("#HpRest").click(function(){
    if (classe_perso.or >= OrRequiredRest){
        if(classe_perso.pv != classe_perso.maxpv){
            classe_perso.HpRest();
            classe_perso.or -= OrRequiredRest;
            $(".p-div-infos").remove();
            PlayerInfo();
        }
        else{
            alert("Vous êtes deja full hp");
        }
    }
    else{
        alert("Vous n'avez pas assez d'or");
    }
})

//Restauration des MP (mp)
$("#MpRest").click(function(){
    if (classe_perso.or >= OrRequiredRest){
        if (classe_perso.pv != classe_perso.maxpv){
            classe_perso.MpRest();
            classe_perso.or -= OrRequiredRest;
            $(".p-div-infos").remove();
            PlayerInfo();
        }
        else{
            alert("Vous êtes deja full mp");
        }
    }
    else{
        alert("Vous n'avez pas assez d'or");
    }
})

function AttributsEnnemis(){
    
}


function CreaEnnemi(){
   
    if (nbr_ennemi == 0){
        class_monstre = new Ogre();
        nbr_ennemi++;
        if(i_boss == 1){
            class_monstre.levelUp();
        }
    }
    else if( nbr_ennemi == 1){
        class_monstre = new Gobelin();
        console.log(class_monstre);
        nbr_ennemi++;
        if(i_boss == 1){
            class_monstre.levelUp();
        }
    }
    else if( nbr_ennemi == 2){
        class_monstre = new Esprit();
        console.log(class_monstre);
        nbr_ennemi++;
        if(i_boss == 1){
            class_monstre.levelUp();
        }

    }
    else if (nbr_ennemi == 3){
        class_monstre = new Goule();
        console.log(class_monstre);
        nbr_ennemi++;
        if(i_boss == 1){
            class_monstre.levelUp();
        }
    }
    else if (nbr_ennemi == 4){
        class_monstre = new Banshee();
        console.log(class_monstre);
        if(i_boss == 1){
            class_monstre.levelUp();
        }
        else if(i_boss != 2){
            nbr_ennemi = 0;
        }
        else{
            i_boss++;
        }
    }
    if(i_boss==2){
        class_monstre = new Dragon();
        console.log(class_monstre);
        console.log("Vous êtes une légende !");
        returnLobby();
    }
    
}

$("#btn-pre-combat").click(function(){
    CreaEnnemi();
    $(".section_btnPerso").css({display: 'flex'});
    $(".btn_combat").css({display: 'block'});
    $(".div-btn-pre-combat").css({display : 'none'});
})

// Gestion interface : suppression des héros après choix de l'un d'entre eux
function startGame(){
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
    // Creation de l'ennemi
}

function returnLobby(){
    $("#showHeroes").css({display:'flex'});
    $("#section_btnPerso").css({display:'none'});
    $("#combat").css({display : 'none'});
    $(".div-btn-pre-combat").css({display : 'none'});
    $(".p-div-infos").remove();
}