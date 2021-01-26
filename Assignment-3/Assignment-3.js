// This is the first Problem of the third assignment.
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];
    
    for(var i=0;i<=2;i++){
    var s1= library[i].author; 
    var s2= library[i].title;    
    
        if(library[i].readingStatus==true){
            console.log("Already read "+"'"+s1+"'" +"by the "+ s2);
        }
        else{ console.log("You still need to read "+s2+"by "+s1); }
    }


    //This is the second problem of the third assignment.

    var age = prompt("Enter Age");
    //console.log(age);
    
    if(age<18){
        alert("Not legal to drive");
    }
    else {
        alert("Drive Safe");
    }



