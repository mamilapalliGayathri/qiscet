function loadJSON(file,callback) {
  let xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if (xhr.readyState===4 && xhr.status=="200") {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJSON("data.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
  personal(data.personalDetails);
  EducationQualification(data.Qualifications);
  Internship1(data.Internship);
  Project1(data.Project);
  Technicalskills(data.Skills);
  Information(data.Otherinformation);
});
var main=document.querySelector(".main");
function personal(details){
  var left=document.createElement("div");
  left.classList.add("left");
  main.appendChild(left);
  //left1
  var left1=document.createElement("div");
  left1.classList.add("left1");
  left.appendChild(left1);
  //left2
  var left2=document.createElement("div");
  left2.classList.add("left2");
  left.appendChild(left2);
  //right
  var right=document.createElement("div");
  right.classList.add("right");
  left.appendChild(right);
  //image
  let image=document.createElement("img");
  image.src=details.image;
  left1.appendChild(image);
  //name
  let myname=document.createElement("h3");
  myname.textContent=details.myname;
  left1.appendChild(myname);
  //department
  let department=document.createElement("h3");
  department.textContent=details.department;
  left1.appendChild(department);
  //fname
  let fname=document.createElement("h3");
  fname.textContent=details.fname;
  left2.appendChild(fname);
  //email
  let email=document.createElement("h3");
  email.textContent=details.email;
  left2.appendChild(email);
  //phno
  let phno=document.createElement("h3");
  phno.textContent=details.phno;
  left2.appendChild(phno);
  //Address
  let address=document.createElement("h3");
  address.textContent=details.address;
  left2.appendChild(address);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
  function EducationQualification(details1){
    var h2=document.createElement("h2");
    h2.textContent="Qualifications:";
    right.appendChild(h2);
    for (i in details1){
          //ed
    var Qualifications=document.createElement("h2");
    Qualifications.classList.add("Qualifications");
    right.appendChild(Qualifications);
//ob
    //var ob=document.createElement("h2");
    //ob.textContent=details1[i].ob;
    //right.appendChild(ob);
//Qualification
    var Qualification=document.createElement("div");
    Qualification.textContent=details1[i].Qualification;
    right.appendChild(Qualification);
//%
    var percentage=document.createElement("div");
    percentage.textContent=details1[i].percentage;
    right.appendChild(percentage);
    right.appendChild(document.createElement("hr"));
  }}
  function Internship1(details2){

    var Internship=document.createElement("div");
    Internship.classList.add("Internship");
    right.appendChild(Internship);

    var ob1=document.createElement("h2");
    ob1.textContent=details2.ob1;
    right.appendChild(ob1);

    var Internship=document.createElement("div");
    Internship.textContent=details2.Internship;
    right.appendChild(Internship);

    var ins=document.createElement("div");
    ins.textContent=details2.ins;
    Internship.appendChild(ins);
    Internship.appendChild(document.createElement("hr"));
}
  function Project1(details3){

  var Project=document.createElement("div");
  Project.classList.add("Project");
  right.appendChild(Project);

  var ob2=document.createElement("h2");
  ob2.textContent=details3.ob2;
  Project.appendChild(ob2);

  var acheivement=document.createElement("div");
  acheivement.textContent=details3.acheivement;
  Project.appendChild(acheivement);
  Project.appendChild(document.createElement("hr"));
}
  function Technicalskills(details4){
  var Skills=document.createElement("div");
  Skills.classList.add("Skills");
  right.appendChild(Skills);

  var ob3=document.createElement("h2");
  ob3.textContent=details4.ob3;
  Skills.appendChild(ob3);

  var Technicalskills=document.createElement("div");
  Technicalskills.textContent=details4.Technicalskills;
  Skills.appendChild(Technicalskills);
  Skills.appendChild(document.createElement("hr"));
}
function Information(details5){
  var Otherinformation=document.createElement("div");
  Otherinformation.classList.add("Otherinformation");
  right.appendChild(Otherinformation);

  var ob4=document.createElement("h2");
  ob4.textContent=details5.ob4;
  Otherinformation.appendChild(ob4);

  var TrainingsWorkshops=document.createElement("div");
  TrainingsWorkshops.textContent=details5.TrainingsWorkshops;
  Otherinformation.appendChild(TrainingsWorkshops);
  Otherinformation.appendChild(document.createElement("hr"));

  var ob5=document.createElement("h2");
  ob5.textContent=details5.ob5;
  Otherinformation.appendChild(ob5);

  var Personaltraits=document.createElement("div");
  Personaltraits.textContent=details5.Personaltraits;
  Otherinformation.appendChild(Personaltraits);
  //Otherinformation.appendChild(document.createElement("hr"));
  var ob6=document.createElement("div");
  ob6.textContent=details5.ob6;
  Otherinformation.appendChild(ob6);

  }
