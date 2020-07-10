var welcome = "❤️ WELCOME TO OUR BUNNY MATCHMAKER! HERE YOU CAN FIND OUT WHETHER YOUR BUNNIES ARE DESTINED TO BE TOGETHER! ❤️"

alert(welcome);

var bunnyname = prompt("Please enter your bunny's name!");
var bunnycrush = prompt("Please enter the bunny your hope to match up with!");

var slicefname1 = bunnyname.slice(0,1).toUpperCase(); 
var slicerestname1 = bunnyname.slice(1,35).toLowerCase(); 
var slicefname2 = bunnycrush.slice(0,1).toUpperCase();  
var slicerestname2 = bunnycrush.slice(1,35).toLowerCase(); 
var numbersthatarerandom = (Math.random() * 100 );  
var rounded = Math.round(numbersthatarerandom); 

if(rounded < 40){
    alert("YIKES! (❀♥╭╮♥) \n \n We're sorry " + slicefname1 + slicerestname1  + ", but you are only a " + rounded + " % match with " + slicefname2 + slicerestname2 + ". \n \n This probably isn't going to work...");
}
else if(rounded >=40 && rounded < 70){
    alert( "Hmmm.. 💬 \n \n" + slicefname1 + slicerestname1 + ", you are a decent " + rounded + " %  match with "+ slicefname2 + slicerestname2 + ". \n \n You could work with this! ");
}

else if(rounded >=70 && rounded < 99){
    alert ("Wow, love is in the air!! 💗ヽ（♡ω♡）ﾉ💗  \n \n" + slicefname1 + slicerestname1 + ", you are a near perfect " + rounded + "% match with " + slicefname2 + slicerestname2 + ". \n \n  There's a spark! ");
}

else{
    alert("HURRAY! ❤️ \n \n" + slicefname1 + slicerestname1 + ", you are an " + rounded + "% match with " + slicefname2 + slicerestname2 + ". \n \n You are made for eachother!");
}


