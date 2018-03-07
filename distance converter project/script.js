document.getElementById("output").style.visibility = "hidden";

document.getElementById("milesInput").addEventListener("input", function(e){
  // make the results visible
  document.getElementById("output").style.visibility = "visible";
  //target the value input
  let mile = e.target.value;
  //workout the different values and display them:
  document.getElementById("kmOutput").innerHTML = mile*1.60934;
  document.getElementById("yardOutput").innerHTML = mile*1759.99;
  document.getElementById("feetOutput").innerHTML = mile*5279.98;
}); 