$(document).ready(function(){
    $(".header__search-link").click(function(){
        $("#dropdown-menu").slideToggle();
    });

    $("#my-account").click(function(){
        $("#dropdown-my-account").toggle();
    })

    $("#my-account2").click(function(){
        $("#dropdown-my-account2").toggle();
    })

    $("#my-account3").click(function(){
        $("#dropdown-my-account3").toggle();
    })

    $("#input-search").focus(function(){
        $("#suggest-search").show();
    })

    $("#input-search").focusout(function(){
        $("#suggest-search").hide();
    })
});
            
$(document).mouseup(function(e) 
{
    var container = $("#dropdown-menu, #dropdown-my-account, #dropdown-my-account2,#dropdown-my-account3");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});