$("document").ready(function(){
    
    $('#thumbs #on').css("border-color" ,"#119F37");
    
    $('#thumbs img').click(function(){
    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
    $('#description').html($(this).attr('alt'));
});
})