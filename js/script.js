(function(){
    let yOffset = 0;
    let prevScrollHeight=0;
    let currentScene=0;

    const sceneInfo = [
        {
            heightNum:2,
            scrollHeight:0,
            objs:{
                container:document.querySelector("#scroll-section-0")
            }
        },
        {
            heightNum:5,
            scrollHeight:0,
            objs:{
                container:document.querySelector("#scroll-section-1")
            }
        },
        {
            heightNum:2,
            scrollHeight:0,
            objs:{
                container:document.querySelector("#scroll-section-2")
            }
        },
        {
            heightNum:2,
            scrollHeight:0,
            objs:{
                container:document.querySelector("#scroll-section-3")
            }
        },
    ];

    function setLayout(){
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }
       // console.log(sceneInfo);

       let totalScrollHeight = 0;
       for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight>=window.yOffset){
                currentScene = i;
                break;
            }       
       }
       document.body.setAttribute("id",`show-section-${currentScene}`)
    }

    function scrollLoop(){
        prevScrollHeight=0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
            
        }
        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene++;
        }
        if(yOffset<prevScrollHeight){
            if(currentScene < 0) return
            currentScene--;
        }
        document.body.setAttribute("id",`show-section-${currentScene}`);
        palyAnimation()
    }

    function palyAnimation(){
        switch(currentScene){
            case 0:
                console.log('0 play');
                break;
            case 1:
                console.log('1 play');
                break;
            case 2:
                console.log('2 play');
                break;
            case 3:
                console.log('3 play');
                break;
        }
    }

    
    window.addEventListener("scroll",()=>{
        yOffset = window.pageYOffset;
        scrollLoop();
    })


    window.addEventListener("resize",setLayout);
    window.addEventListener("load",setLayout)
})();