 $(document).ready(function(){
    //mostrar e ocultar NAV
    $( ".nav-toggle-btn" ).click(function() {
      
        $( ".main-menu" ).toggleClass( "active-nav" );
        $(".nav-toggle-btn").toggleClass("pintBotao");
        removeClassCSS(".nav-ano", "active-nav-ano");
        removeClassCSS(".nav-historico", "active-nav-historico");
        removeClassCSS(".nav-relatorio", "active-nav-relatorio");

    });
    $(".content").click(function(){
            $(".main-menu").removeClass("active-nav");
            $(".nav-ano").removeClass("active-nav-ano");
            $(".nav-historico").removeClass("active-nav-historico");
            $(".nav-relatorio").removeClass("active-nav-relatorio");
        });
//fim mostrar e ocultar NAV

//mostrar e ocultar menu ano
    $(".ano").click(function(){
        $(".nav-ano").toggleClass("active-nav-ano");
        removeClassCSS(".nav-historico","active-nav-historico");
        removeClassCSS(".nav-relatorio","active-nav-relatorio")
        removeClassCSS(".main-menu","active-nav");
        //Function remoceClassCSS recebe dois parametos 
    });

    $(".historico").click(function(){
        $(".nav-historico").toggleClass("active-nav-historico");
        removeClassCSS(".nav-ano", "active-nav-ano");
        removeClassCSS(".nav-relatorio","active-nav-relatorio");
        removeClassCSS(".main-menu", "active-nav");       
    });

    $(".relatorio").click(function(){
        $(".nav-relatorio").toggleClass("active-nav-relatorio");
        removeClassCSS(".nav-ano", "active-nav-ano");
        removeClassCSS(".nav-historico", "active-nav-historico");
        removeClassCSS(".main-menu", "active-nav");
    })

//Mostrar e ocultar sub menu

    $(function() {
    $( "#accordion" ).accordion();
    });

        $(function() {
    $( "#accordion-historico" ).accordion();
    });

    function removeClassCSS (class1, class2) {
         $(class1).removeClass(class2);
    }//remove uma Class CSS

});