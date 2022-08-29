(function(){
    let yOffset = 0;
    let preScrollHeight = 0;
    let currentScene = 0;
    let enterNewScene = false;
    let scrollRatio = 0;

    const sceneInfo = [
        {
            heightNum:1,
            scrollHeight:0,
            obj:{
                container:document.querySelector("#scroll-section-0"),
                messageA:document.querySelector("#scroll-section-0 .logo")
            },
            values:{
                messageA_opacity_in:[0,1,{start:0.4,end:0.5}],
                messageA_opacity_out:[1,0,{start:0.6,end:0.7}],
                messageA_translateY_in:[20,0,{start:0.4,end:0.5}],
                messageA_translateY_out:[0,-20,{start:0.6,end:0.7}],
            }
        },
        {
            heightNum:1,
            scrollHeight:0,
            obj:{
                container:document.querySelector("#scroll-section-1"),
            }
        },
        {
            heightNum:10,
            scrollHeight:0,
            obj:{
                container:document.querySelector("#scroll-section-2")
            }
        },
        {
            heightNum:2,
            scrollHeight:0,
            obj:{
                container:document.querySelector("#scroll-section-3")
            }
        },
    ]

    function setLayout() {
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].obj.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }
    }

    function scrollLoop() {
        enterNewScene = false;
        preScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            preScrollHeight += sceneInfo[i].scrollHeight-1;
        }
        if(yOffset >= preScrollHeight+sceneInfo[currentScene].scrollHeight){
            enterNewScene = true;
            currentScene++;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
            scrollRatio = 0;
            
        }
        if(yOffset<preScrollHeight){
            enterNewScene = true;
            if(currentScene<0) return;
            currentScene--;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        document.body.setAttribute("id",`show-section-${currentScene}`);
        if (enterNewScene) return;
        playAnimation();
    }

    function calcValues(values,currentYOffset){
        let rv;
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        let scrollRatio = currentYOffset / scrollHeight;

        if(values.length == 3){
            const pratScrollStart = values[2].start * scrollHeight;
            const partScrollEnd = values[2].end * scrollHeight;
            const partScrollHeight = partScrollEnd - pratScrollStart;

            if(currentYOffset>=pratScrollStart && currentYOffset<=partScrollEnd){
                rv = (currentYOffset - pratScrollStart ) / partScrollHeight * (values[1] - values[0]) + values[0]
            }else if(currentYOffset<pratScrollStart){
                rv = values[0]
            }else if(currentYOffset>partScrollEnd){
                rv = values[1]
            }
            console.log(rv)

        }else{
           
            rv = scrollRatio * (values[1] - values[0]) + values[0]
        }
        return rv;
    }

    function playAnimation() {
        let objs = sceneInfo[currentScene].obj;
        let values = sceneInfo[currentScene].values;
        let currentYOffset = yOffset - preScrollHeight;
        let scrollHeight = sceneInfo[currentScene].scrollHeight;
        let scrollRatio = currentYOffset / scrollHeight;
       
        switch(currentScene){
            case 0:
                console.log("0");
                // let messageA_opacity_in = calcValues(values.messageA_opacity_in,currentYOffset)
                // let messageA_opacity_out = calcValues(values.messageA_opacity_out,currentYOffset)
                // let messageA_translateY_in = calcValues(values.messageA_translateY_in,currentYOffset)
                // let messageA_translateY_out = calcValues(values.messageA_translateY_out,currentYOffset)

                // if(scrollRatio <= 0.55){
                //     objs.messageA.style.opacity = messageA_opacity_in;
                //     objs.messageA.style.transform = `translateX(${messageA_translateY_in}%)`;
                // }else{
                //     objs.messageA.style.opacity = messageA_opacity_out;
                //     objs.messageA.style.transform = `translateX(${messageA_translateY_out}%)`;
                // }
                $(".navbar .gnb>ul").removeClass("nMove");
                $(".navbar .gnb>ul").removeClass("nMove");
                $("#scroll-section-1").removeClass("view");

                break;
            case 1:

                $(".navbar .gnb>ul").addClass("nMove");
                $(".navbar").addClass("white");
                $("#scroll-section-1").addClass("view");

                console.log(view)
                break;
            case 2:
                //$(".navbar").removeClass("white");

                if(scrollRatio>0.1){
                    
                }
                
                console.log("view"+2);
                break;
            case 3:
                console.log("view"+3);
                break;
        }
        
    }

    window.addEventListener("scroll",()=>{
        yOffset = window.pageYOffset;
        scrollLoop();

        if(yOffset > 10){
            $(".logo_b").addClass("after");
        }else{
            $(".logo_b").removeClass("after");
        }
    })


    setLayout();


    

    

})();