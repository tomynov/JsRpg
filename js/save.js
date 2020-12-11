//affiche l'historique des attaques en ajoutant et supprimant une div
$( ".button" ).click(function() { 
    $( ".divHistory" ).append('<div ><p>',classe_perso.atk,'</p></div>');
    if ($(".divHistory").children().length >5){
        $(".divHistory").children()[0].remove();
    }
  });


function storage(perso){
    localStorage.atk = perso["atk"];
    localStorage.esquive = perso["esquive"];
    localStorage.level = perso["level"];
    localStorage.mag = perso["mag"];
    localStorage.maxmp = perso["maxmp"];
    localStorage.maxpv = perso["maxpv"];
    localStorage.mp = perso["mp"];
    localStorage.nom = perso["nom"];
    localStorage.or = perso["or"];
    localStorage.prot = perso["prot"];
    localStorage.protmag = perso["protmag"];
    localStorage.pv = perso["pv"];
    localStorage.vitesse = perso["vitesse"];
}


function verif_class(nom){
    if (nom=="Ninja"){
        var classe = new Ninja();
        return classe;
    }
    else if (nom=="Magicien"){
        var classe = new Magicien();
        return classe;
    }
    else if (nom=="Guerrier"){
        var classe = new Guerrier();
        return classe;
    }
    else if (nom=="Archer"){
        var classe = new Archer();
        return classe;
    }
}