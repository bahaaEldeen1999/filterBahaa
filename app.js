/*
[]


*/ 

function filter(arr,animateCss){
    function show(elem,style){
        elem.style.display = "block";
        if( style ){
            elem.classList.add(style)
        }else{
            elem.style.opacity = "1";
        }
    }
    function showAll(elemsObj,style){
        for( let elems of elemsObj ){
            for(let elem of elems.elemsArr){
                if( style ){
                    show(elem,style)
                }else{
                    show(elem);
                }
            }
        }
    }
    function hide(elem,style){
        if( style ){
            elem.classList.add(style);        
                elem.style.display = "none";
        }else{
            elem.style.opacity = "0";
                elem.style.display = "none";
        }
    }
    function hideAll(elemsObj,style){
        for( let elems of elemsObj ){
            let arr = elems.elemsArr;
            //console.log(arr)
            for(let elem of arr ){
                if( style ){
                    hide(elem,style)
                }else{
                    hide(elem);
                }
            }
        }
    }
    
    let buttons = [];
    let elements = [];
    for(let id of arr){
        buttons.push( document.getElementById(id) );
        elements.push(
           {
               id : id,
               elemsArr : document.querySelectorAll('.'+id)
           } 
            );
    }


    for(let button of buttons){
        button.addEventListener('click',(e)=>{
            e.preventDefault();
            let id = e.target.id;
            //console.log(e)
            for(let elem of elements){
                if( elem.id == id ){
                    hideAll(elements,animateCss);
                    for(let element of elem.elemsArr){
                        show(element,animateCss);
                    }
                   
                }
            }


        });
    }







}
//filter( ['filter1','filter2','filter3'] , 'zoomIn')