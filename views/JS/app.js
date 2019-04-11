// this file contains the actual logic for the store
//put here distnct category

var categories = []; //monitor should appear only once 
var url = "http://localhost:8080";
var DB = [];//array to contain my items
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
    ;
    }
    //display each category on to the UL
    }
    
  console.log(categories);
  for(var j=0; j<categories.length; j++){
      var catString = categories[j];
      $("#cat-list").append("<li>" + catString + "</li>")
      //$("#cat-list").append(`<li>" + catString + "</li>`)
  }
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
//display items with price lower or equal to 100
//display name and price
// var pNumber = p * 1; 


function lowerThan100(){
    // for each item
    for(var i=0; i<DB.length; i++){
        var item = DB[i];
        //ask if the price is lower or equal to 100
        if(item.price <= 100){
            //if so, print the name and price on the console
            console.log(item.name + " - $" + item.price);
        }
    }
}


function lowerThan100(){
    // for each item
    for(var i=0; i<DB.length; i++){
        var item = DB[i];
        //ask if the price is lower or equal to 100
        if(item.price <= 100){
            //if so, print the name and price on the console
            console.log(item.name + " - $" + item.price);
        }
    }
}

// get the items catalog from the server

function getCatalog() {
    //var theObjects = JSON.parse(theStringHere)
    $.ajax({    
        url:  url + '/API/points',
        type: 'GET',
        //data: theObjects,
        //contentType: 'application/json',
    success: function (res){
        // loop of res array
        for(var i=0; i<res.length; i++){
            var item = res[i];
        // ask if the item.user == 'yourname'
        if(item.user == 'Reggie'){
        // push the item into DB array
            DB.push(item);
            }
        }   
        displayCatalog();    
    },
    error: function (errorDetail){
    console.error('Has been an error', errorDetail);
    alert('communication error');
        }
    });

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
    getCatalog();
//test function

    //testAjax();

}

//this is just a test for ajax calls

/* AJAX: asynchronous javascript xml
a communications protocol to send and received data to/from backed without doing a hard refresh on the client page
*/

function testAjax(){
    var endPoint = url + '/API/test';
    $.ajax({
        url: endPoint, //can modify
        type:'GET', //can modify
    success: function (response, status){
    console.log('All good', response);
    console.log('status', status);
},
    error: function (response, status){
    console.log('ERROR***', response)
    console.log('status', status);
        }
    });

}



window.onload = init;