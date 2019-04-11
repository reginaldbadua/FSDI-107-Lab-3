/*
Project: Online Store
Main Functionality:
    1/2 add items to the catalog (save into a backend server) 
    2/3 display a dynamic catalog of items (from the backend server)
    - display the different categories
    - filter (search by text)
    - add items to a carteh
*/

/*
    - ID (auto generated)
    - Name
    - Description
    - Price
    - Image
    - Category
*/
//store all the items in the array; need to store and OBJECT
var catalog =[];
var uniqueId = 0; //counter
//var url = "http://restclass.azurewebsites.net";

var url = "http://localhost:8080";

//object constructor: used to create instances
function Item(name,desc,price,image,category){
    this.user = 'Reggie';
    this.name =name; //don't use hardcoaded values
    this.desc = desc;
    this.price = price;
    this.image = image;
    this.category = category; 



    //can add functions and behaviors
}

function registerItem(){
    console.log("registering item");
    var isDataValid = true;
    
    // get the inforation that user provided
    // name = document.getElementById("textName").value
    var name = $("#txtName").val();  //jQuery way of reading text
    var desc = $("#txtDesc").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImg").val();
    var category = $("#txtCat").val();


    //perform data validations
    // logical operator || = or
    if(!name || name.length < 10){
        //bad name (if no name or name length lower than 10 characters)
        $("#txtName").addClass('error'); //CSS error class
        isDataValid = false; 
    }
    else{
        $("#txtName").removeClass('error');
    }
    if(!desc || desc.leng < 10){
        $("#txtDesc").addClass('error');
        isDataValid = false;
    }
    else
        $("#textDesc").removeClass('error');

console.log('value', isDataValid);
 if (isDataValid) {
    var theItem = new Item(name, desc, price, image, category);
    console.log(theItem);

    //add the item to the array
    sendToServer(theItem);

    //clear the form
    $("#txtName").val('');
    $("#txtDesc").val('');
    $("#txtPrice").val('');
    $("#txtImg").val('');
    $("#txtCat").val('');
}
} //show success
    $("#alert-saved").removeClass('hidden');

    //timer on JS
    //params: 1 (function to execute), 2 (time in milliseconds)
    setTimeout(function(){
        $("#alert-saved").addClass('hidden');
    }, 3000); 

function sendToServer(item){

    var theString = JSON.stringify(item);
    $.ajax({
        url:  url + '/API/points',
        type: "POST",
        data: theString,
        contentType: 'application/json',
        success: function (res){
            console.log('Done!', res);
        },
        error: function(errorDetail){
            console.error('BAD',errorDetail);
        }
    });
}
function removeOne(){
    var theObject = {
        removeId: $("#txtIdToRemove").val()
    };
    var objString = JSON.stringify(theObject);
    console.log(objString);

    //create the AJAX with the delete type

    $.ajax({
        url:  url + '/API/points',
        type: "DELETE",
        data: objString,
        contentType: 'application/json',
        success: function (res){
            console.log('Item Removed', res);
        },
        error: function(errorDetail){
            console.error('Not Removed',errorDetail);
        }
    });
    //send theObject as the data
}
function removeAll(){
    var theObject = {
        removeUser: 'Reggie'
    };

    var objString = JSON.stringify(theObject);
    console.log(objString);

    $.ajax({
        url:  url + '/API/points/many',
        type: "DELETE",
        data: objString,
        contentType: 'application/json',
        success: function (res){
            console.log('Items Removed', res);
        },
        error: function(errorDetail){
            console.error('Not Removed',errorDetail);
        }
    });
};

//auto executed when browser finished rendering everything
function init(){
    //hook event
    $('#btnSave').click(registerItem);

    $("#btnRemoveOne").click(removeOne);
    $("#btnRemoveAll").click(removeAll);
}

window.onload = init;

