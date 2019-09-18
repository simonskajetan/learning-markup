$(document).ready(function(){
    $("#menu-toggle").click(function(){
        $("#header--menu").toggleClass("menu-open");
        $("#menu-toggle > i").toggleClass("icon-cross");
    });
});