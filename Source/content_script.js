replaceBody(document.body);

function replaceBody (body) {
  var translate = {
 "launch an EU-wide public consultation": "Stall",
 "Assess the need for improvements" : "Ignore",
 "Explore the idea of benchmarking" : "Ignore",
 "Promote structured dialogue between stakeholders" : "Meeting with coffee",
 "Step up efforts towards" : "Meeting with sandwiches",
 "Invite Member States to take account" : "being ignored by the Council"
 "Stimulate innovative approaches" : "handjob anyone?"
 "Further developing streamlined" : "Build a labyrinth"
  };
  var re= new RegExp(Object.keys(translate).join("|"),"gi"); 
  body.innerHTML=body.innerHTML.replace (re, function (i) {return translate[i]});
}
