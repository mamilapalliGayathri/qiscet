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
  card1(data.card1);
  console.log(data.card1.name);
  //card2(data.card2);
});

 var cards=document.querySelector(".cards");
 function card1(details1){
   for(i in details1)
   {
     var card=document.createElement("div");
 card.classList.add("card");
 cards.appendChild(card);
 //image
 var image=document.createElement("img");
 image.src=details1[i].image;
 image.alt="image";
 card.appendChild(image);
 //name
 var name=document.createElement("h3");
 name.textContent=details1[i].name;
 card.appendChild(name);
 //branch
 var branch=document.createElement("h3");
 branch.textContent=details1[i].branch;
 card.appendChild(branch);
  //profile
 var a=document.createElement("a");
 a.href="resume.html";
 var profile=document.createElement("profile");
 profile.textContent=details1[i].profile;
 card.appendChild(a);
 a.appendChild(profile);
 
}
 }
