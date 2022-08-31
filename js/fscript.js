$(".logo_b").hide()
let slide8_Num = 0;

$("#fullpage").fullpage({
    menu: ".topMenu",
    anchors: ["m1st", "m2st", "m3st", "m4st", "m5st", "m6st", "m7st", "m8st", "m9st"],
    navigation:false,
    css3:true,
    //scrollOverflow:true,
    responsiveWidth:1000,
    navigationTooltips:['home','company','product','cummunity'],
    showActiveTooltip:true,
    afterLoad:function(anchorslink,index){
        console.log(index)
        if(index == 1){
            $(".logo_b").show()
            $(".t1").addClass("move");
            $(".navbar .gnb ul").removeClass("view")
            $(".scene").css("opacity",0)
        }else{
            $(".t1").removeClass("move")
        }

        if(index==2){
            $(".navbar .gnb ul").addClass("view")
            $(".logo_b").hide()
            $(".scene").css("opacity",0)
        }
        if(index>=3){
            $(".navbar").addClass("white")
            $(".navbar .gnb ul").addClass("view");
            $(".scene").css("opacity",1)
            $(".back03 .txt1,.back03 .txt2,.back03 .txt3").addClass("view");
        }else{
            $(".back03 .txt1,.back03 .txt2,.back03 .txt3").removeClass("view");
            // $(".scene").css("opacity",0)
        }

        if(index==4){
            $(".scene.back03").addClass("fade");
            $(".navbar").removeClass("white");
            $(".scene.back04 .text-view01").addClass("view01Move")
            $(".scene.back04 .viewTxtWrap").addClass("txtMove")
            $(".scene.back04 .product1").addClass("p1view")
        }else{
            $(".scene.back03").removeClass("fade");

            $(".scene.back04 .text-view01").removeClass("view01Move")
            $(".scene.back04 .viewTxtWrap").removeClass("txtMove")
            $(".scene.back04 .product1").removeClass("p1view")
            // $(".scene.back03").removeClass("tAdd01").removeClass("tAdd02")
        }

        if(index==5){
            $(".scene.back03").css("opacity",0);
            $(".navbar").removeClass("white");


            $(".scene.back05 .conWrap").addClass("conMove");
            $(".scene.back05 .product1").addClass("p1view");

        }else{
            //$(".scene.back03").removeClass("tAdd01").removeClass("tAdd02");
            $(".scene.back05 .conWrap").removeClass("conMove")
            $(".scene.back05 .product1").removeClass("p1view")
        }

        if(index==6){
            $(".scene.back03").css("opacity",0);
            $(".scene.back07").css("opacity",0);
            $(".navbar").removeClass("white");

            $(".scene.back06 .conWrap").addClass("conMove");
            $(".scene.back06 .product1").addClass("p1view");
            $(".scene.back07").removeClass("scMove");

        }else{
            //$(".scene.back03").removeClass("tAdd01").removeClass("tAdd02");
            $(".scene.back06 .conWrap").removeClass("conMove")
            $(".scene.back06 .product1").removeClass("p1view")
        }

        if(index==7){
            $(".scene.back03").css("opacity",0);
            $(".navbar").addClass("white");

            $(".scene.back07").addClass("scMove");

        }else{
            //$(".scene.back03").removeClass("tAdd01").removeClass("tAdd02");
           //$(".scene.back07").removeClass("scMove");
           
        }

        if(index==8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15){
            $(".scene.back03").css("opacity",0);
            $(".navbar").removeClass("white");
            $(".scene.back08").addClass("scMove");
            slide8_Num = 0;
            slide8_move(slide8_Num);
            
        }else{
             $(".scene.back08").removeClass("scMove");
        }


        if(index==9){

            slide8_Num = 1;
            slide8_move(slide8_Num);
        }

        if(index==10){

            slide8_Num = 2;
            slide8_move(slide8_Num);
        }

        if(index==11){

            slide8_Num = 3;
            slide8_move(slide8_Num);
        }

        if(index==12){

            slide8_Num = 4;
            slide8_move(slide8_Num);
        }

        if(index==13){

            slide8_Num = 5;
            slide8_move(slide8_Num);
        }

        if(index==14){

            slide8_Num = 6;
            slide8_move(slide8_Num);
        }

        if(index==15){
            $(".scene.back03").css("opacity",0);
            $(".scene.back07").css("opacity",0);
            $(".navbar").removeClass("white");
            $(".scene.back08 > .wrap").css("background","white")
            $(".scene.back08").css("opacity",0);
            $(".page15 .phone").addClass("hide");
            $(".page15 .sea").addClass("show");
            $(".page15 .txtWrap").addClass("move");
         
        }else{
            $(".page15 .sea").removeClass("show");
            $(".page15 .phone").removeClass("hide");
            $(".page15 .txtWrap").removeClass("move");
        }







      
    },
    onLeave:function(index){
        console.log(index)
        if(index==1){
            $(".logo_b").addClass("after");
        }else{
            $(".logo_b").removeClass("after");
        }

        // if(index == 8 || index==6){
        //     $(".scene.back07").removeClass("scMove");
        // }

    }

    
})


function slide8_move(num){
    let move = num * -500;

    switch(num){
        case 0:
            $(".product img").hide();
            $(".cWrap .card").eq(0).css("opacity",1);
            $(".cWrap .card").eq(1).css("opacity",1);
            $(".cWrap .card").eq(2).css("opacity",1);
            $(".cWrap .card").eq(3).css("opacity",1);
            $(".cWrap .card").eq(4).css("opacity",1);

            $(".cWrap .card").eq(1).removeClass("active");
            $(".cWrap .card").eq(2).removeClass("active");
            $(".cWrap .card").eq(3).removeClass("active");
            $(".cWrap .card").eq(4).removeClass("active");
            $(".back08 .wrap").attr("style","background-image: url(img/sec04_product06_01_img_phone.png)")
        break;
        
        case 1:
            $(".product img").eq(num).fadeIn()
            $(".cWrap .card").eq(0).css("opacity",0);
            $(".cWrap .card").eq(1).css("opacity",1);
            $(".cWrap .card").eq(2).css("opacity",1);
            $(".cWrap .card").eq(3).css("opacity",1);
            $(".cWrap .card").eq(4).css("opacity",1);

            $(".cWrap .card").eq(1).addClass("active");
            $(".cWrap .card").eq(2).removeClass("active");
            $(".cWrap .card").eq(3).removeClass("active");
            $(".cWrap .card").eq(4).removeClass("active");
        break;
        case 2:
            $(".product img").eq(num-1).show()
            $(".product img").eq(num).fadeIn()
            $(".cWrap .card").eq(0).css("opacity",0);
            $(".cWrap .card").eq(1).css("opacity",0);
            $(".cWrap .card").eq(2).css("opacity",1);
            $(".cWrap .card").eq(3).css("opacity",1);
            $(".cWrap .card").eq(4).css("opacity",1);

            $(".cWrap .card").eq(1).addClass("active");
            $(".cWrap .card").eq(2).addClass("active");
            $(".cWrap .card").eq(3).removeClass("active");
            $(".cWrap .card").eq(4).removeClass("active");
        break;

        case 3:
            $(".product img").eq(num-1).show()
            $(".product img").eq(num).fadeIn()
            $(".cWrap .card").eq(0).css("opacity",0);
            $(".cWrap .card").eq(1).css("opacity",0);
            $(".cWrap .card").eq(2).css("opacity",0);
            $(".cWrap .card").eq(3).css("opacity",1);
            $(".cWrap .card").eq(4).css("opacity",1);

            $(".cWrap .card").eq(1).addClass("active");
            $(".cWrap .card").eq(2).addClass("active");
            $(".cWrap .card").eq(3).addClass("active");
            $(".cWrap .card").eq(4).removeClass("active");
        break;
        case 4:
            $(".product img").eq(num-1).show()
            $(".product img").eq(num).fadeIn()
            $(".cWrap .card").eq(0).css("opacity",0);
            $(".cWrap .card").eq(1).css("opacity",0);
            $(".cWrap .card").eq(2).css("opacity",0);
            $(".cWrap .card").eq(3).css("opacity",0);
            $(".cWrap .card").eq(4).css("opacity",1);

            $(".cWrap .card").eq(1).addClass("active");
            $(".cWrap .card").eq(2).addClass("active");
            $(".cWrap .card").eq(3).addClass("active");
            $(".cWrap .card").eq(4).addClass("active");
            $(".back08 .wrap").attr("style","")
        break;

        case 5:
            $(".cardWrap").show()
            $(".product img").eq(num-1).show()
            $(".cWrap .card").eq(0).css("opacity",0);
            $(".cWrap .card").eq(1).css("opacity",0);
            $(".cWrap .card").eq(2).css("opacity",0);
            $(".cWrap .card").eq(3).css("opacity",0);
            $(".cWrap .card").eq(4).css("opacity",0);

            $(".cWrap .card").eq(1).addClass("active");
            $(".cWrap .card").eq(2).addClass("active");
            $(".cWrap .card").eq(3).addClass("active");
            $(".cWrap .card").eq(4).addClass("active");
            $(".scene.back08 > .wrap").css("background","white")
            $(".scene.back08 .product").stop().animate({"left":"50%","margin-left":-560},300)
        break;

        case 6:
            $(".scene.back08 > .wrap").css("background","white")
            $(".product img").eq(4).show()
            $(".cardWrap").hide()
            $(".scene.back08 .product").stop().animate({"left":"50%","margin-left":-245},300)
            break;

        
    }

    // if(num == 1){
    //     $(".cWrap .card").eq(num).css("opacity",0)
    //     $(".cWrap .card").eq(num).addClass("active");
    //     $(".cWrap .card").eq(num).prev().css("opacity",0)
    // }
    // if(num == 2){
    //     $(".cWrap .card").eq(num).addClass("active");
    //     $(".cWrap .card").eq(num).prev().css("opacity",1)
    // }
    $(".cWrap").stop().animate({left:move},300)
}
