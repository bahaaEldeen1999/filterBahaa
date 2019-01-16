
function beFilter(arr, filterAll,animateCss){
    function show(elem,style){
        elem.style.display = "block";
        if( style ){
            elem.classList.add(style);
            setTimeout(()=>{
                elem.classList.remove(style);
             },1000)
           
        }else{
            elem.style.opacity = "1";
           
        }
        
    }
    function showAll(elemsObj,style){
        for( let elems of elemsObj ){
            let arr = elems.elemsArr;
            for(let elem of arr){
               
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
            setTimeout(()=>{
                elem.classList.remove(style);
            },1000)
        }else{
            elem.style.opacity = "0";
                elem.style.display = "none";
        }
    }
    function hideAll(elemsObj,style){
        for( let elems of elemsObj ){
            let arr = elems.elemsArr;
           
            for(let elem of arr ){
                if( style ){
                    hide(elem,style)
                }else{
                    hide(elem);
                }
            }
        }
    }
    //the filter buttons array
    let buttons = [];
    //the elements that will be filtered
    let elements = [];
    //fill in the array and object
    for(let id of arr){
        buttons.push( document.getElementById(id) );
        elements.push(
           {
               id : id,
               elemsArr : document.querySelectorAll('.'+id)
           } 
            );
    }
    //if there is a filter all button give it a show all method
    if(filterAll){
        let filterAllBtn = document.getElementById(filterAll);
        filterAllBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            showAll(elements,animateCss)
        })
    }
  
    //add the event listner for buttons to filter their specific elements
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
