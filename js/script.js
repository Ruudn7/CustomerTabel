(function () {
    


var tab = document.querySelector("#myTable"),
    ths = tab.querySelectorAll("thead th"),
    trs = tab.querySelectorAll("tbody tr");
    
/* 

    for(i=0; i < trs.length ; i++){
        if( i % 2 == 0){
            trs[i].classList.add("color1"); 
        } else {
            trs[i].classList.add("color2"); 
        }

    }

*/    

function clearclassName(nodeList){

    for (i = 0 ; i < nodeList.length; i++){

        nodeList[i].className = " ";

    } 
}



    console.log(ths);
    function makeArray (nodeList){

        var arr = [];
        for (var i = 0 ; i < nodeList.length; i++) {

            arr.push(nodeList[i]);
        }

        return arr;

    }

    function sortBy(e) {
        var target = e.target,
            thsArr = makeArray(ths),
            trsArr = makeArray(trs),
            index = thsArr.indexOf(target),
            df = document.createDocumentFragment(),
            order = (target.className === "" || target.className === "desc") ? "asc" : "desc" ;



            console.log(order);
        trsArr.sort(function(a, b){
            
        var tdA = a.children[index].textContent,
            tdB = b.children[index].textContent;

            if(tdA < tdB){
                return (target.className === "asc") ? -1 : 1;
            } else if(tdA > tdB){
                return (target.className === "asc") ? 1 : -1;
            } else {
                return 0;
            }
            
          
         
        });

         clearclassName(ths);

            trsArr.forEach(function(tr){
                df.appendChild(tr);

            })
            target.className = order;
            tab.querySelector("tbody").appendChild(df);
     /*       console.log(trsArr); */




    }

    for(var j = 0; j < ths.length; j++) {

        ths[j].onclick = sortBy;
        console.log(tab);

    }







})();