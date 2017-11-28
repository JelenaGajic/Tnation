$(document).ready(function() {
    $(".dropdown").hover(
        function(){
        $(this).find(".dropdown-content").show();
        },
        function(){
            $(this).find(".dropdown-content").hide();
        }
    );
    $("#phpDev").on('click', function() {
        $(".programming_image").css("display", "none");
        $(".phpImages").css("display", "block");
    })
});