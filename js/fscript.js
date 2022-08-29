$(".logo_b").hide()
$("#fullpage").fullpage({
    menu: ".topMenu",
    anchors: ["m1st", "m2st", "m3st", "m4st", "m5st", "m6st"],
    navigation:false,
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
            $(".scene").css("display","none")
        }else{
            $(".t1").removeClass("move")
        }

        if(index==2){
            $(".navbar .gnb ul").addClass("view")
            $(".logo_b").hide()
            $(".scene").css("display","none")
        }
        if(index==3){
            $(".navbar .gnb ul").addClass("view");
            $(".scene").css("display","flex")
            $(".back03 .txt1,.back03 .txt2,.back03 .txt3").addClass("view");
        }else{
            //$(".back03 .txt1,.back03 .txt2,.back03 .txt3").removeClass("view");
            // $(".scene").css("display","none")
        }

        if(index==4){
            $(".scene .txt1").addClass("tAdd01")
        }



      
    },
    onLeave:function(index){
        console.log(index)
        if(index==1){
            $(".logo_b").addClass("after");
        }else{
            $(".logo_b").removeClass("after");
        }


    }
})
