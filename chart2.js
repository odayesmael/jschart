
// IDs
const txtElements = [
  document.getElementById("txt"),
  document.getElementById("txt1"),
  document.getElementById("txt2"),
  document.getElementById("txt3"),
  document.getElementById("txt4"),
  document.getElementById("txt5"),
  document.getElementById("txt6")
];
const mainElement = document.getElementById("main");
const MaintextElement = document.getElementById("Maintext");
const GDPRelement = document.getElementById("GDPR");
const UKGDPRelement = document.getElementById("UKGDPR");
const testElements = [
  document.getElementById("test"),
  document.getElementById("test1"),
  document.getElementById("test2"),
  document.getElementById("test3"),
  document.getElementById("test4")
];

// Main function
function showMaintext() {
  if (MaintextElement.classList.contains("hide")) {
    // Show main text
    MaintextElement.classList.remove("hide");
    // Hide other texts
    GDPRelement.classList.add("hide");
    UKGDPRelement.classList.add("hide");
    testElements.forEach(el => el.classList.add("hide"));
  }
}

// Active main
function toggleMainActive() {
  const isActive = mainElement.classList.contains("mainactive");
  // Deactivate all txt elements and main element
  txtElements.forEach(el => el.classList.remove("active"));
  mainElement.classList.remove("mainactive");
  if (!isActive) {
    // Activate main element
    mainElement.classList.add("mainactive");
  }
}

// Icon 1 function
function showGDPR() {
  if (GDPRelement.classList.contains("hide")) {
    // Show GDPR text
    GDPRelement.classList.remove("hide");
    // Hide other texts
    UKGDPRelement.classList.add("hide");
    MaintextElement.classList.add("hide");
    testElements.forEach(el => el.classList.add("hide"));
  }
}

// Active 1
function toggleActive1() {
  const isActive = txtElements[0].classList.contains("active");
  // Deactivate all txt elements and main element
  txtElements.forEach(el => el.classList.remove("active"));
  mainElement.classList.remove("mainactive");
  if (!isActive) {
    // Activate txt element 1
    txtElements[0].classList.add("active");
  }
}
 
 
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





