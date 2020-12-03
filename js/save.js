//localStorage.removeItem("x")
//localStorage.getItem("x",1) attribut a nb with the name "x"

if (localStorage!=undefined){
    var shop = localStorage.username
    username = localStorage["username"]
    localStorage.username = "test"

    //localStorage["username"] --> return "test"
}

//localStorage.clear()


//affiche l'historique des attaques en ajoutant et supprimant une div
 $( ".button" ).click(function() { 
    $( ".divHistory" ).append('<div ><p>',classe_perso.atk,'</p></div>');
    if ($(".divHistory").children().length >5){
        $(".divHistory").children()[0].remove();
    }
  });



// requete post

/*$.post(
    'index.php', // Un script PHP que l'on va créer juste après
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

