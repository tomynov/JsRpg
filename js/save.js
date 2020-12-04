//localStorage.removeItem("x")
//localStorage.getItem("x",1) attribut a nb with the name "x"
/*
if (localStorage!=undefined){
    var shop = localStorage.username
    username = localStorage["username"]
    localStorage.username = "test"

    //localStorage["username"] --> return "test"
}
*/
function save(){
    var infos2_nbr = [classe_perso.nom, classe_perso.pv, classe_perso.mp, classe_perso.atk, classe_perso.def, classe_perso.mag, classe_perso.protmag, classe_perso.esquive, classe_perso.vitesse, classe_perso.or];
    var infos2 = ["classe_perso.nom", "classe_perso.pv", "classe_perso.mp", "classe_perso.atk", "classe_perso.def", "classe_perso.mag", "classe_perso.protmag", "classe_perso.esquive", "classe_perso.vitesse"," classe_perso.or"];

    for(i=0; i < infos2.length; i++ ){
        localStorage.setItem(infos2[i],infos2_nbr[i])
}
//localStorage.clear()

//delete the history of attack
function clearHistory(){
    for (i ;i<$(".divHistory").children().length;i++){
        $(".divHistory").children()[0].remove();
    }
}

//affiche l'historique des attaques en ajoutant et supprimant une div
 $( ".btnHistory" ).click(function() { 
    $( ".divHistory" ).append('<div ><p> '+classe_perso.nom+' attaque de '+classe_perso.atk+' le monstre.'+'</p></div>');
    if ($(".divHistory").children().length >5){
        $(".divHistory").children()[0].remove();
    }
  });



// requete post

/*$.post(
    'index.php',
    {
        gold: "test"
    },

    function(data){
 
        if(data == 'Success'){
             console.log("Success");
        }
        else{
             console.log("Erreur !!!");
             console.log(data);
        }
 
    },

    'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !
 );
 */

