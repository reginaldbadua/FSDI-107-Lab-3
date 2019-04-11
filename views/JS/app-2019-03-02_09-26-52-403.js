// this file contains the actual logic for the store
//put here distnct category

var categories = []; //monitor should appear only once 

//loop over
//ask if it has the 

function displayCatalog(){
    // get data
    //(no need for now, data is on DB variable)

    // loop over the data 
    for(var i=0; i<DB.length; i++){
        //display the item
        var theItem = DB[i];
        displayItem(theItem);
    /* 
    loop over the data
    ask (categories do you contain this theItem.category), if not (push it) 

    //display each category for 
    */
   if(categories.indexOf(theItem.category)<0){ //ask if its in the array
    categories.push(theItem.category);  //add the category
    }
    //display each category
   
    }
  console.log(categories);
}
// should display the item on the screen...create the DOM element for the item
function displayItem(item){
    var itemHtml = `<div class="item">
                        <img src="${item.image}">
                        <h6>${item.name}</h6>
                        <p>${item.desc}</p>
                    </div>`;
    $("#item-list").append(itemHtml);
}
//JQ
/*
$(document).ready(function(){

});



//JS
*/
function search(){
    //clear everything
    $("#item-list").html('');
    // get search text
    var text = $("#txtSearch").val();
    text = text.toLowerCase(); //to make it all lower

    //how to filter
    /*
        cycle over all the items
        ask (your name contains the text OR your desc contains the text??)
    */
   for (var i=0; i<DB.length; i++){
        var item = DB[i];
        if(
            item.name.toLowerCase().indexOf(text) >= 0
            ||
            item.desc.toLowerCase().indexOf(text) >= 0
            ||
            item.id == text
            ||
            item.category.toLowerCase().indexOf(text) >= 0
        ){
            //text inside of name
            displayItem(item);
        }
    }   
}

function init(){
    //hook events
    //1 = click on button
    $("#btnSearch").click(search);
    //2 = enter key pressed on field
    $("#txtSearch").keypress(function(e){
        if(e.keyCode == 13){
            search();
        }
    });
    //initialize stuff

    displayCatalog();


}

window.onload = init;