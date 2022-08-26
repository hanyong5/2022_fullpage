(function(){
    let yOffset = 0;
    let preScrollHeight = 0;
    let currentScene = 0;

    const sceneInfo = [
        {
            heightNum:2,
            scrollHeight:0,
            obj:{
                container:document.querySelector("#scroll-section-0")
            }
        },
        {
            heightNum:3,
            scrollHeight:0,
            obj:{
                container:document.querySelector("#scroll-section-1")
            }
        },
        {
            heightNum:2,
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
        preScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            preScrollHeight += sceneInfo[i].scrollHeight;
        }
        if(yOffset > preScrollHeight+sceneInfo[currentScene].scrollHeight){
            currentScene++;
        }
        if(yOffset<preScrollHeight){
            if(currentScene<0) return;
            currentScene--;
        }

        document.body.setAttribute("id",`show-section-${currentScene}`)
        playAnimation();
    }

    function playAnimation() {
        switch(currentScene){
            case 0:
                console.log("view"+0);
                break;
            case 1:
                console.log("view"+1);
                break;
            case 2:
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
    })


    setLayout();


})()