//file for some exercises

//object constructor: used to create instances
/*function Student(gender,crush,color,){
    this.gender = gender;
    this.crush=crush; 
    this.color = color;
*/
function init(){
    console.log('--Reggie--');
}
    //female (Gender: 'O')
    //create counter (variable) in 0
    //
        function countFemales(){
            var howMany = 0; 
            // for each item
            for(var i=0; i<students.length; i++){
                var person = students[i];
         
                if(person.Gender == 0){
                   howMany +=1;
                  
                }
            }
            console.log("There are"  + howMany +  "females");
        }

        function countMales(){
            var howMany = 0; 
            // for each item
            for(var i=0; i<students.length; i++){
                var person = students[i];
         
                if(person.Gender == 1){
                   howMany +=1;
                  
                }
            }
            console.log("There are"  + howMany +  "males");
        }

        function countCrushes(){
            var howMany = 0; 
            // for each item
            for(var i=0; i<students.length; i++){
                var person = students[i];
         
                if(person.Crush == 1){
                   howMany +=1;
                  
                }
            }
            console.log("There are"  + howMany +  "crushes");
        }

        function displayColors(){
        var howMany = 0
        for (var i=0; i<students.length; i++);
            var students = DB[i];
            displayStudent(students);
        
        if(colors.indexOf(students.color)<0){
            colors.push(students.color);
        }
        console.log(colors);
        for(var j=0; j<colors.length; j++){
            var colorString = colors[j];

        }
        }

        function displayStudent(students){
            var students = `div class = "students"
                            <h1>${students.color}</h1>
                            </div?`;
        }


window.onload = init;