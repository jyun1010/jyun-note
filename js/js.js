$(document).ready(function () {
    $(".day").on("click",function(){
        $(".left").css("background-color","#D0D5D9");
        $(".left ul li a,.note_list ul li a  ").css("color","#000");
        $(".note_li img").attr("src","images/note.svg");
        $(".hash_li img").attr("src","images/hashtag.svg");
        $(".star_li img").attr("src","images/star.svg");
        $(".del_li img").attr("src","images/delete.svg");
        $(".middle").css("background-color","#E7ECF1");
        $(".note_reading,.right,.title_do_more").css("background-color","#fff");
        $(".note_list ul li").hover(function(){
            $(this).css("background-color","#fff");
        },function(){
            $(this).css("background-color","transparent");
        });
       

        
    });
    $(".night").on("click",function(){
        $(".left").css("background-color","#535953");
        $(".left ul li a,.note_list ul li a  ").css("color","#fff");
        $(".note_li img").attr("src","images/note-white.svg");
        $(".hash_li img").attr("src","images/hashtag-white.svg");
        $(".star_li img").attr("src","images/star-white.svg");
        $(".del_li img").attr("src","images/delete-white.svg");
        $(".middle").css("background-color","#707C74");
        $(".note_reading").css("background-color","#7B90D2");
        $(".note_list ul li").hover(function(){
            $(this).css("background-color","#7B90D2");
        },function(){
            $(this).css("background-color","transparent");
        });
        $(".right,.title_do_more").css("background-color","#4F4F48");
    });



    $(".list_view").on("click",function(){
        $(".note_list ul li a").removeClass("note_list_grid_a").addClass("note_list_li_a");
        $(".note_list ul li").removeClass("note_list_ul_li_gr").addClass("note_list_ul_li");
    });
    $(".grid_view").on("click",function(){
        $(".note_list ul li a").removeClass("note_list_li_a").addClass("note_list_grid_a");
        $(".note_list ul li").removeClass("note_list_ul_li").addClass("note_list_ul_li_gr");
        $(".note_list ul li").append("<br><div class='note_content'></div>")
    });


});