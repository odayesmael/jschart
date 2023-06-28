
//IDs
 const element = document.getElementById("txt");
 const element1 = document.getElementById("txt1");
 const element2 = document.getElementById("txt2");
 const element3 = document.getElementById("txt3");
 const element4 = document.getElementById("txt4");  
 const element5 = document.getElementById("txt5");  
 const element6 = document.getElementById("txt6");
 const element7 = document.getElementById("main");
  
 //Main//
function Main() {
if(document.getElementById("Maintext").className == "hide")
{ //if
 document.getElementById("Maintext").className = "show";
 
 document.getElementById("GDPR").className = "hide";
 
 document.getElementById("UKGDPR").className = "hide";
document.getElementById("test").className = "hide";
   
 document.getElementById("test1").className = "hide";
document.getElementById("test2").className = "hide";
   
document.getElementById("test3").className = "hide";

document.getElementById("test4").className = "hide";
   
}//endif

}//end main func

// Active main
 function mainActive() {
     
 if(element7.classList.contains("mainactive"))
 {
     element.classList.remove("active");
     element1.classList.remove("active");
     element2.classList.remove("active");
     element3.classList.remove("active");
     element4.classList.remove("active");
     element5.classList.remove("active");
     element6.classList.remove("active");
 }
 
else{

  element7.classList.add("mainactive");
  element.classList.remove("active");
  element1.classList.remove("active");
  element2.classList.remove("active");
  element3.classList.remove("active");
  element4.classList.remove("active");
  element5.classList.remove("active");
  element6.classList.remove("active");

}
 }
 //end main active
 


 //icon 1//
function myFunction() {
if(document.getElementById("GDPR").className == "hide")
{ //if
   document.getElementById("GDPR").className = "show";
   document.getElementById("UKGDPR").className = "hide";
   document.getElementById("Maintext").className = "hide";
   document.getElementById("test").className = "hide";
   document.getElementById("test1").className = "hide";
   document.getElementById("test2").className = "hide";
   document.getElementById("test3").className = "hide";
   document.getElementById("test4").className = "hide";
   
}//endif

// else
// {
//     document.getElementById("GDPR").className = "hide";
    
// } //endelse
}//endfunc

// Active 
 function makeActive() {
 if(element.classList.contains("active"))
 {
     element1.classList.remove("active");
     element2.classList.remove("active");
     element3.classList.remove("active");
     element4.classList.remove("active");
     element5.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
 }
else{
 element.classList.add("active");
 element1.classList.remove("active");
 element2.classList.remove("active");
 element3.classList.remove("active");
 element4.classList.remove("active");
 element5.classList.remove("active");
 element6.classList.remove("active");
 element7.classList.remove("mainactive");
    
}
 }
 ///////////////////////////
 
 
 //icon 2//
 function myFunction1() {
if(document.getElementById("UKGDPR").className == "hide")
   {
   document.getElementById("UKGDPR").className = "show";
  
    if(document.getElementById("GDPR").className == "show"){
   document.getElementById("GDPR").className = "hide";}
   
   if(document.getElementById("Maintext").className == "show"){
   document.getElementById("Maintext").className = "hide";}
   
    if(document.getElementById("test").className == "show"){
   document.getElementById("test").className = "hide";}
   
    if(document.getElementById("test1").className == "show"){
   document.getElementById("test1").className = "hide";}
   
   if(document.getElementById("test2").className == "show"){
   document.getElementById("test2").className = "hide";}
   
   if(document.getElementById("test3").className == "show"){
   document.getElementById("test3").className = "hide";}
   
   if(document.getElementById("test4").className == "show"){
   document.getElementById("test4").className = "hide";}
   } 
// else
// {
//   document.getElementById("UKGDPR").className = "hide";
// }
}



// Active 1
 function makeActive1() {

 if(element1.classList.contains("active"))
 {
     element.classList.remove("active");
     element2.classList.remove("active");
     element3.classList.remove("active");
     element4.classList.remove("active");
     element5.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
 }
else{
 element1.classList.add("active");
     element.classList.remove("active");
     element2.classList.remove("active");
     element3.classList.remove("active");
     element4.classList.remove("active");
     element5.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
    
}
 }
 // end Active 1
 
//  function makeActive1() {
//  var element = document.getElementById("txt1");
//  element.classList.toggle("active");
//  }
 
 
 
 //icon 3//
 
 function myFunction2() {
if(document.getElementById("test").className == "hide")
   
    { 
   document.getElementById("test").className = "show";
   
   if(document.getElementById("GDPR").className == "show"){
   document.getElementById("GDPR").className = "hide";}
   
   if(document.getElementById("Maintext").className == "show"){
   document.getElementById("Maintext").className = "hide";}
   
    if(document.getElementById("UKGDPR").className == "show"){
   document.getElementById("UKGDPR").className = "hide";}
   
    if(document.getElementById("test1").className == "show"){
   document.getElementById("test1").className = "hide";}
   
   if(document.getElementById("test2").className == "show"){
   document.getElementById("test2").className = "hide";}
   
   if(document.getElementById("test3").className == "show"){
   document.getElementById("test3").className = "hide";}
   
   if(document.getElementById("test4").className == "show"){
   document.getElementById("test4").className = "hide";}
  }
// else
// {
//   document.getElementById("test").className = "hide";
// }
}

// Active 2
 function makeActive2() {

 if(element2.classList.contains("active"))
 {
     element.classList.remove("active");
     element1.classList.remove("active");
     element3.classList.remove("active");
     element4.classList.remove("active");
     element5.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
 }
else{
 element2.classList.add("active");
     element.classList.remove("active");
     element1.classList.remove("active");
     element3.classList.remove("active");
     element4.classList.remove("active");
     element5.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
    
}
 }
 // end Active 2

 
 //function 4//
  function myFunction3() {
if(document.getElementById("test1").className == "hide")
   {
       
   document.getElementById("test1").className = "show";
 
if(document.getElementById("GDPR").className == "show"){
   document.getElementById("GDPR").className = "hide";}
   
 if(document.getElementById("UKGDPR").className == "show"){
   document.getElementById("UKGDPR").className = "hide";}
   
   if(document.getElementById("Maintext").className == "show"){
   document.getElementById("Maintext").className = "hide";}
   
 if(document.getElementById("test").className == "show"){
   document.getElementById("test").className = "hide";}
   
   if(document.getElementById("test2").className == "show"){
   document.getElementById("test2").className = "hide";}
   
   if(document.getElementById("test3").className == "show"){
   document.getElementById("test3").className = "hide";}
   
   if(document.getElementById("test4").className == "show"){
   document.getElementById("test4").className = "hide";}
   }
   
}

// Active 3
 function makeActive3() {

 if(element3.classList.contains("active"))
 {
     element.classList.remove("active");
     element1.classList.remove("active");
     element2.classList.remove("active");
     element4.classList.remove("active");
     element5.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
 }
else{
 element3.classList.add("active");
     element.classList.remove("active");
     element1.classList.remove("active");
     element2.classList.remove("active");
     element4.classList.remove("active");
     element5.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
    
}
 }
 // end Active 3
 
 //function 5//
    function myFunction4() {
if(document.getElementById("test2").className == "hide")
{
   document.getElementById("test2").className = "show";
   if(document.getElementById("GDPR").className == "show"){
   document.getElementById("GDPR").className = "hide";}
   
   if(document.getElementById("Maintext").className == "show"){
   document.getElementById("Maintext").className = "hide";}
   
    if(document.getElementById("UKGDPR").className == "show"){
   document.getElementById("UKGDPR").className = "hide";}
   
    if(document.getElementById("test1").className == "show"){
   document.getElementById("test1").className = "hide";}
   
   if(document.getElementById("test").className == "show"){
   document.getElementById("test").className = "hide";}
   
   if(document.getElementById("test3").className == "show"){
   document.getElementById("test3").className = "hide";}
   
   if(document.getElementById("test4").className == "show"){
   document.getElementById("test4").className = "hide";}
   }
   
  }
  
  // Active 4
 function makeActive4() {

 if(element4.classList.contains("active"))
 {
     element.classList.remove("active");
     element1.classList.remove("active");
     element2.classList.remove("active");
     element3.classList.remove("active");
     element5.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
 }
else{
 element4.classList.add("active");
     element.classList.remove("active");
     element1.classList.remove("active");
     element2.classList.remove("active");
     element3.classList.remove("active");
     element5.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
    
}
 }
 // end Active 4

  
//function 6//
     function myFunction5() {
if(document.getElementById("test3").className == "hide")
{
   document.getElementById("test3").className = "show";
  
   if(document.getElementById("GDPR").className == "show"){
   document.getElementById("GDPR").className = "hide";}
   
    if(document.getElementById("UKGDPR").className == "show"){
   document.getElementById("UKGDPR").className = "hide";}
   
    if(document.getElementById("test1").className == "show"){
   document.getElementById("test1").className = "hide";}
   
   if(document.getElementById("Maintext").className == "show"){
   document.getElementById("Maintext").className = "hide";}
   
   if(document.getElementById("test2").className == "show"){
   document.getElementById("test2").className = "hide";}
   
   if(document.getElementById("test").className == "show"){
   document.getElementById("test").className = "hide";}
   
   if(document.getElementById("test4").className == "show"){
   document.getElementById("test4").className = "hide";}
}

}

// Active 5
 function makeActive5() {

 if(element5.classList.contains("active"))
 {
     element.classList.remove("active");
     element1.classList.remove("active");
     element2.classList.remove("active");
     element4.classList.remove("active");
     element3.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
 }
else{
 element5.classList.add("active");
     element.classList.remove("active");
     element1.classList.remove("active");
     element2.classList.remove("active");
     element4.classList.remove("active");
     element3.classList.remove("active");
     element6.classList.remove("active");
      element7.classList.remove("mainactive");
    
}
 }
 // end Active 5
   
//function 7//
 
      function myFunction6() {
if(document.getElementById("test4").className == "hide")
{
   document.getElementById("test4").className = "show";
   
   if(document.getElementById("GDPR").className == "show"){
   document.getElementById("GDPR").className = "hide";}
   
    if(document.getElementById("UKGDPR").className == "show"){
   document.getElementById("UKGDPR").className = "hide";}
   
    if(document.getElementById("test1").className == "show"){
   document.getElementById("test1").className = "hide";}
   
   if(document.getElementById("Maintext").className == "show"){
   document.getElementById("Maintext").className = "hide";}
   
   if(document.getElementById("test2").className == "show"){
   document.getElementById("test2").className = "hide";}
   
   if(document.getElementById("test3").className == "show"){
   document.getElementById("test3").className = "hide";}
   
   if(document.getElementById("test").className == "show"){
   document.getElementById("test").className = "hide";}
}
else{
   document.getElementById("test4").className = "hide";
}
}

// Active 6
 function makeActive6() {

 if(element6.classList.contains("active"))
 {
     element.classList.remove("active");
     element1.classList.remove("active");
     element2.classList.remove("active");
     element4.classList.remove("active");
     element5.classList.remove("active");
     element3.classList.remove("active");
      element7.classList.remove("mainactive");
 }
else{
 element6.classList.add("active");
     element.classList.remove("active");
     element1.classList.remove("active");
     element2.classList.remove("active");
     element4.classList.remove("active");
     element5.classList.remove("active");
     element3.classList.remove("active");
      element7.classList.remove("mainactive");
    
}
 }
 // end Active





