/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Brian D. Weber");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio = {
  "name": formattedName,
  "role": formattedRole,
  "contactInfo": {
    "mobile": "402-304-5267",
    "email": "briandweber@gmail.com",
    "github": "briandweber",
    "twitter": "@briandweber",
    "location": "Phoenix"
  },
  "pictureURL": "images/bdwPicture.jpeg",
  "welcomeMessage": "It's howdy doody time",
  "skills": ["resurections", "hostage situations", "aviation distaster nullifications"]
};
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").prepend(formattedPic);
var work = {
  "jobs": [
      {
        "employer": "Lincoln Family Medical Group",
        "title": "Medical Records Supervisor",
        "location": "Lincoln",
        "dates": "July 2007 - Present",
        "description": "Responsibilities include working closely with physicians and office/business manager for overall management of clinic’s patient record keeping system in order to facilitate the efficient and thorough medical treatment of patients."
      }
    ]
};

var education = {};
education["name"] = "University of Nebraska at Lincoln";
education["years"] = "2011 - 2013";
education["city"] = "Lincoln";


var education = {
  "schools": [
    {
      "name": "University of Nebraska",
      "city": "Lincoln",
      "major": "Economics",
      "graduation": "May 2013",
      "online": "https://www.unl.edu"
    },
    {
      "name": "Udacity",
      "city": "San Francisco",
      "major": "Front-End Developer",
      "graduation": "August 2017",
      "online": "https://www.udacity.com"
    }
  ]
}



if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0])
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
}
//location dates description
function displayWork(){
    for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();

$("#main").append(internationalizeButton);
function inName(name){
  var arr = name.split(" ");
  var lastName = arr[1].toUpperCase();
  return arr[0] + " " + lastName;
}

