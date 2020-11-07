
// Q1: AGE 

var age_input = d3.select("#formGroupExampleInput")
var age = age_input.property('value');



// how many children 

var numkids = ["1", "2", "3", "4", ">4"]

// Populate dropbox with ID Values - ID Values come from Location List
numkids.forEach((num) => {
   var DDkids = d3.select("#selNumKids");
   var newoption = DDkids.append("option");
   newoption.attr("value", num);
   newoption.text(num);
   NumofKids = DDkids.node().value;
}); 



// highest level of education 

var level_edu = ["none", "High School diploma", "Tertiary education", "Master's or Doctorate"]

// Populate dropbox with ID Values - ID Values come from Location List
level_edu.forEach((edu) => {
   var DDedu = d3.select("#education");
   var newoption = DDedu.append("option");
   newoption.attr("value", edu);
   newoption.text(edu);
   Edu = DDedu.node().value;
}); 




//level of employment before first kids

var prekidEmp = ["unemployed", "Casual", "Part-time", "Full-time"]

// Populate dropbox with ID Values - ID Values come from Location List
prekidEmp.forEach((emp) => {
   var DDemp = d3.select("#empLevel");
   var newoption = DDemp.append("option");
   newoption.attr("value", emp);
   newoption.text(emp);
   Emp = DDemp.node().value;
}); 



//partnered 

var partnered = ["Single", "Partnered"]

// Populate dropbox with ID Values - ID Values come from Location List
partnered.forEach((par) => {
   var DDpar = d3.select("#partner");
   var newoption = DDpar.append("option");
   newoption.attr("value", par);
   newoption.text(par);
   Par = DDpar.node().value;
}); 



//Maternity leave eligability 

var MatLeav = ["None", "Yes - and we are paying!", "Yes - but unpaid"]

// Populate dropbox with ID Values - ID Values come from Location List
MatLeav.forEach((mat) => {
   var DDmat = d3.select("#matleave");
   var newoption = DDmat.append("option");
   newoption.attr("value", mat);
   newoption.text(mat);
   Mat = DDmat.node().value;
}); 



//Maternity leave eligability 

var css_func = ["Yes", "No"]

// Populate dropbox with ID Values - ID Values come from Location List
css_func.forEach((css) => {
   var DDcss = d3.select("#cssElig");
   var newoption = DDcss.append("option");
   newoption.attr("value", css);
   newoption.text(css);
   Css = DDcss.node().value;
}); 

//unpaid help  

var unpaid_help = ["Yes-Scheduled", "Yes- As needed", "No"]

// Populate dropbox with ID Values - ID Values come from Location List
unpaid_help.forEach((hel) => {
   var DDhel = d3.select("#help");
   var newoption = DDhel.append("option");
   newoption.attr("value", hel);
   newoption.text(hel);
   Help = DDhel.node().value;
}); 




var button= d3.select("#clicked");



function optionChanged() {
  

  // Age 
var age_input = d3.select("input")
var age = age_input.property('value');


// Number of kids 
var DDkids = d3.select("#selNumKids");

NumofKids = DDkids.node().value;

console.log(age, NumofKids); 


// level of education

var DDedu = d3.select("#education");
Edu = DDedu.node().value;

switch (Edu){
    case "none":
      none = 1,
      High_School = 0,
      Uni = 0,
      Masters = 0
    
      break; 

    case "High School diploma": 
    none = 0,
    High_School = 1,
    Uni = 0,
    Masters = 0
  
    break; 

    case "Tertiary education": 
    none = 0,
    High_School = 0,
    Uni = 1,
    Masters = 0
  
    break; 

    case "Master's or Doctorate": 
    none = 0,
    High_School = 0,
    Uni = 0,
    Masters = 1
  
    break; 

  }

  console.log(Edu); 
  console.log(High_School, Masters, none, Uni)



  //level of employment before first kids
  var DDemp = d3.select("#empLevel");
  Emp = DDemp.node().value;

    switch (Emp){
    case "unemployed":
      unemployed = 1,
      casual = 0,
      part_time = 0,
      full_time = 0
    
      break; 

    case "Casual": 
    unemployed = 0,
    casual = 1,
    part_time = 0,
    full_time = 0
  
    break; 

    case "Part-time": 
    unemployed = 0,
    casual = 0,
    part_time = 1,
    full_time = 0
  
    break; 

    case "Full-time": 
    unemployed = 0,
    casual = 0,
    part_time = 0,
    full_time = 1
  
    break; 
  }

  console.log(Edu); 
  console.log(High_School, Masters, none, Uni)

  // partnered
  var DDpar = d3.select("#partner");
  Par = DDpar.node().value;

    switch (Par){
    case "Single":
      Single = 1,
      Partnered = 0
    
      break; 

    case "Partnered": 
    Single = 1,
    Partnered = 0
  
    break; 
   }


   // mat leave eligability
   var DDmat = d3.select("#matleave");
   Mat = DDmat.node().value;


     switch (Mat){
    case "None":
      None = 1,
      Yes_paying = 0,
      Yes_unpaid = 0
    
      break; 

    case "Yes - and we are paying!": 
    None = 0,
    Yes_paying = 1,
    Yes_unpaid = 0
  
    break; 

    case "Yes - but unpaid": 
    None = 0,
    Yes_paying = 0,
    Yes_unpaid = 1
  
    break; 
   }


   // css eligability

   var DDcss = d3.select("#cssElig");
   Css = DDcss.node().value;

  switch (Css){
    case "Yes":
      Yes = 1,
      No = 0
    
      break; 

    case "No": 
    Yes = 0,
    No = 1
  
    break; 

   }

   //help 

    var DDhel = d3.select("#help");
    Help = DDhel.node().value;

   switch (hel){
    case "Yes-Scheduled":
      Yes = 1,
      No = 0
    
      break; 

    case "Yes - As needed": 
    Yes = 0,
    No = 1
  
    break; 

    case "No": 
    Yes = 0,
    No = 1
  
    break; 


}






button.on("click", optionChanged); 