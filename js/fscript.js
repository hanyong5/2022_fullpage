$(".logo_b").hide()

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
           //$(".scene.back07").removeClass("scMove")
        }

        if(index==8){
            $(".scene.back03").css("opacity",0);
            $(".navbar").removeClass("white");
            $(".scene.back08").addClass("scMove");
        }else{
             $(".scene.back08").removeClass("scMove");
        }





      
    },
    onLeave:function(index){
        console.log(index)
        if(index==1){
            $(".logo_b").addClass("after");
        }else{
            $(".logo_b").removeClass("after");
        }

        if(index == 8 || index==6){
            $(".scene.back07").removeClass("scMove");
        }


    }


    
})


