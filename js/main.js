// Bloc informations du joueur


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var classe_perso;
var choice_player;

// Variables boutique
var OrRequiredWeapon = 10;
var OrRequiredProtection = 10;
var OrRequiredMagie = 10;
var OrRequiredRest = 20;

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
    var infos2 = ['NOM : ', 'PV : ', 'MP : ', 'OR : '];
    var infos2_nbr = [classe_perso.nom, classe_perso.pv, classe_perso.mp, classe_perso.or];
    for(i=0; i < infos2.length; i++ ){
        $("#text_infos").append(`
            <p class="p-infos"> ${infos2[i]} ${infos2_nbr[i]} </p>
        `)
    } 
})

$("#close").click(function(){
    modal.style.display = "none";
    $(".p-infos").remove();
})


// Gestion interface : suppression des héros après choix de l'un d'entre eux
function startGame(){
    $("#showHeroes").remove();
    $("#section_btnPerso").css({display:'block'});
    $("#combat").css({display : 'flex'});

    /////A REGLER pour affichage des photos en fonction du joueur choisi/////
    //var imageUrl = "../img/" + classe_perso.nom + ".png";
    //$("#player").css("background-image", "url(../img/Guerrier.png)");
    //////////////////

    PlayerInfo();

}

// Création des classes

$("#creaPerso").click(function(){
    classe_perso = new Guerrier();
    console.log(classe_perso);
    startGame();
    choice_player = "guerrier";
})

$("#creaPerso2").click(function(){
    classe_perso = new Archer();
    console.log(classe_perso);
    startGame();
    choice_player = "archer";
})

$("#creaPerso3").click(function(){
    classe_perso = new Ninja();
    console.log(classe_perso);
    startGame();
    choice_player = "Ninja";
})

$("#creaPerso4").click(function(){
    classe_perso = new Magician();
    console.log(choice_player);
    startGame();
    choice_player = "Magician";
})

// Boutique

//Augmentation des stats de l'arme (atk)
$("#WeaponUp").click(function(){
    if(classe_perso.or >= OrRequiredWeapon){
        classe_perso.WeaponUp();
        classe_perso.or -= OrRequiredWeapon;
        OrRequiredWeapon += 10;
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
    }
    else{
        alert("Vous n'avez pas assez d'or");
    }
})

//Restauration des HP (hp)
$("#HpRest").click(function(){
    if (classe_perso.or >= OrRequiredRest){
        classe_perso.HpRest();
        classe_perso.or -= OrRequiredRest;
    }
    else{
        alert("Vous n'avez pas assez d'or");
    }
})

//Restauration des MP (mp)
$("#MpRest").click(function(){
    if (classe_perso.or >= OrRequiredRest){
        classe_perso.MpRest();
        classe_perso.or -= OrRequiredRest;
    }
    else{
        alert("Vous n'avez pas assez d'or");
    }
})