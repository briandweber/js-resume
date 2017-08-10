/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Brian Weber");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": formattedName,
  "role": formattedRole,
  "contacts": {
    "mobile": "402-304-5267",
    "email": "briandweber@gmail.com",
    "github": "briandweber",
    "twitter": "@briandweber",
    "location": "Phoenix"
  },
  "welcomeMessage": "It's howdy doody time",
  "skills": ["HTML", "CSS", "Javascript"],
  "biopic": "images/bdwPicture.jpeg",
  "display": function(){}
};

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(formattedPic);

var education = {
  "schools": [
    {
      "name": "University of Nebraska",
      "location": "Lincoln",
      "degree": "Bachelor's of Arts",
      "majors": ["Economics"],
      "dates": "June/2011 - May/2013",
      "url": "https://www.unl.edu",
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Degree",
      "school": "Udacity",
      "dates": "July/2017 - August/2017",
      "url": "https://www.udacity.com"
    }
  ],
  "display": function(){
    for (item in education.schools){
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[item].name);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
      $(".education-entry:last").append(formattedSchoolName);
      $(".education-entry:last").append(formattedSchoolLocation);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
      $(".education-entry:last").append(formattedSchoolDates);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[item].majors);
      $(".education-entry:last").append(formattedSchoolMajor);
      var formattedSchool
    }
  }
}
education.display();

var work = {
  "jobs": [
      {
        "employer": "Lincoln Family Medical Group",
        "title": "Medical Records Supervisor",
        "location": "Lincoln",
        "dates": "July 2007 - Present",
        "description": "Responsibilities include working closely with physicians and office/business manager for overall management of clinic’s patient record keeping system in order to facilitate the efficient and thorough medical treatment of patients."
      }
  ],
  "display": function(){
    for (job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].  employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[ job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};
work.display();

var projects = {
  "projects": [
    {
      "title": "%data%",
      "dates": "%data%",
      "description": "%data%",
      "images": []
    }
  ],
  "display": function(){}
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

// $("#main").append(internationalizeButton);
// function inName(name){
//   var arr = name.split(" ");
//   var lastName = arr[1].toUpperCase();
//   return arr[0] + " " + lastName;
// }