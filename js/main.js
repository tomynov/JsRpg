// Bloc informations du joueur

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

$("#btn_infos").click(function(){
    modal.style.display = "block";
    var infos = ['PV : ', 'MP : ', 'Vitesse : '];
    for(i=0; i < infos.length; i++ ){
        $("#text_infos").append(`
            <p class="p_infos"> ${infos[i]} </p>
        `)
    }  
})

$("#close").click(function(){
    modal.style.display = "none";
    $(".p_infos").remove();
})