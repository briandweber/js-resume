/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "Brian Weber",
  "role": "Web Developer",
  "contacts": {
    "mobile": "402-304-5267",
    "email": "briandweber@gmail.com",
    "github": "briandweber",
    "twitter": "@briandweber",
    "location": "Phoenix"
  },
  "welcomeMessage": "Great Scott!! It's howdy doody time!!  -Doc Brown",
  "skills": ["HTML", "CSS", "Javascript"],
  "biopic": "images/bdwPicture.jpeg",
  "display": function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedPic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
  }
};
bio.display();

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
    for (var i = 0; i < education.schools.length; i++){
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      $(".education-entry:last").append(formattedSchoolName);
      $(".education-entry:last").append(formattedSchoolLocation);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      $(".education-entry:last").append(formattedSchoolDates);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
    for (var j = 0; j < education.onlineCourses.length; j++){
      $(".education-entry").append(HTMLonlineClasses);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
      $(".education-entry").append(formattedOnlineTitle + formattedOnlineSchool);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
      $(".education-entry").append(formattedOnlineDates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
      $(".education-entry").append(formattedOnlineURL);
    }
  }
};
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
    for (var i = 0; i < work.jobs.length; i++){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[ i].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};
work.display();

var projects = {
  "projects": [
    {
      "title": "YelpCamp",
      "dates": "2017",
      "description": "A list of campsites for users to browse/comment.  Also allows users to post campsites.",
      "images": ["images/ycImages/yelpcamp1.png", "images/ycImages/yelpcamp2.png"]
    }
  ],
  "display": function(){
    for (var i = 0; i < projects.projects.length; i++){
      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      $(".project-entry").append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry").append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry").append(formattedProjectDescription);
      for (var k = 0; k < projects.projects[i].images.length; k++){
        var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[k]);
        $(".project-entry").append(formattedProjectImages);
      }
    }
  }
  //Link to deployed app - https://hidden-everglades-42703.herokuapp.com/
};
projects.display();

$("#mapDiv").append(googleMap);

if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
}
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);




// $("#main").append(internationalizeButton);
// function inName(name){
//   var arr = name.split(" ");
//   var lastName = arr[1].toUpperCase();
//   return arr[0] + " " + lastName;
// }