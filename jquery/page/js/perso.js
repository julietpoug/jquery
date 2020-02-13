$(function(){
    $('aside a').click(function(event){
        // alert('js ok');
        //j'annule le clic sur le lien
        event.preventDefault();
        // console.log($(this).attr('href'));
        var moHref = $(this).attr('href');
        $('main').find('img').attr('src', moHref); 
        
        $('aside a').click(function(){
            console.log($(this).attr('title'));
            var monAlt = $(this).attr('title');
            $('main').find('figcaption h3').text(monAlt);
         });
        
    });
   
   
});