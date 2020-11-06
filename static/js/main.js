

// var location

// var locationList = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"]

// Populate dropbox with ID Values - ID Values come from Location List
// locationList.forEach((location) => {
//    var dropdownMenu = d3.select("#selDataset");
//    var newoption = dropdownMenu.append("option");
//    newoption.attr("value", location);
//    newoption.text(location);
//    selectedState = dropdownMenu.node().value;
// }); 


// Q1: AGE 

var age = d3.select("input")


console.log(age)


// how many children 

var numkids = ["1", "2", "3", "4", ">4"]

// Populate dropbox with ID Values - ID Values come from Location List
numkids.forEach((num) => {
   var dropdownMenu = d3.select("#selNumKids");
   var newoption = dropdownMenu.append("option");
   newoption.attr("value", num);
   newoption.text(num);
   NumofKids = dropdownMenu.node().value;
}); 

//number of kids function 
function kids(NumofKids) {
  console.log(NumofKids);


};

// highest level of education 

var level_edu = ["none", "High School diploma", "Tertiary education", "Master's or Doctorate"]

// Populate dropbox with ID Values - ID Values come from Location List
level_edu.forEach((edu) => {
   var dropdownMenu = d3.select("#education");
   var newoption = dropdownMenu.append("option");
   newoption.attr("value", edu);
   newoption.text(edu);
   Edu = dropdownMenu.node().value;
}); 

//number of kids function 
function Education(Edu) {
  console.log(Edu);

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
};

//level of employment before first kids

var prekidEmp = ["unemployed", "Casual", "Part-time", "Full-time"]

// Populate dropbox with ID Values - ID Values come from Location List
prekidEmp.forEach((emp) => {
   var dropdownMenu = d3.select("#empLevel");
   var newoption = dropdownMenu.append("option");
   newoption.attr("value", emp);
   newoption.text(emp);
   Emp = dropdownMenu.node().value;
}); 

//number of kids function 
function emplLevel(Emp) {
  console.log(Emp);
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
};

//level of employment before first kids

var prekidEmp = ["unemployed", "Casual", "Part-time", "Full-time"]

// Populate dropbox with ID Values - ID Values come from Location List
prekidEmp.forEach((emp) => {
   var dropdownMenu = d3.select("#empLevel");
   var newoption = dropdownMenu.append("option");
   newoption.attr("value", emp);
   newoption.text(emp);
   Emp = dropdownMenu.node().value;
}); 

//number of kids function 
function Education(Emp) {
  console.log(Emp);
};

//partnered 

var partnered = ["Single", "Partnered"]

// Populate dropbox with ID Values - ID Values come from Location List
partnered.forEach((par) => {
   var dropdownMenu = d3.select("#partner");
   var newoption = dropdownMenu.append("option");
   newoption.attr("value", par);
   newoption.text(par);
   Par = dropdownMenu.node().value;
}); 

//number of kids function 
function partner(Par) {
  console.log(Par);
};

//Maternity leave eligability 

var MatLeav = ["None", "Yes - and we are paying!", "Yes - but unpaid"]

// Populate dropbox with ID Values - ID Values come from Location List
MatLeav.forEach((mat) => {
   var dropdownMenu = d3.select("#matleave");
   var newoption = dropdownMenu.append("option");
   newoption.attr("value", mat);
   newoption.text(mat);
   Mat = dropdownMenu.node().value;
}); 

//number of kids function 
function MatLeave(Mat) {
  console.log(Mat);
};

//Maternity leave eligability 

var css_func = ["Yes", "No"]

// Populate dropbox with ID Values - ID Values come from Location List
css_func.forEach((css) => {
   var dropdownMenu = d3.select("#cssElig");
   var newoption = dropdownMenu.append("option");
   newoption.attr("value", css);
   newoption.text(css);
   Css = dropdownMenu.node().value;
}); 

//number of kids function 
function CssFunc(Css) {
  console.log(Css);
};

//unpaid help  

var unpaid_help = ["Yes-Scheduled", "Yes- As needed", "No"]

// Populate dropbox with ID Values - ID Values come from Location List
unpaid_help.forEach((hel) => {
   var dropdownMenu = d3.select("#help");
   var newoption = dropdownMenu.append("option");
   newoption.attr("value", hel);
   newoption.text(hel);
   Help = dropdownMenu.node().value;
}); 

//number of kids function 
function help(hel) {
  console.log(hel);
};