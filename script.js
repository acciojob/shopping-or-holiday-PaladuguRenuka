//your code here
function showDetails(ns) {
  let nsType = ns.getAttribute("data-ns-type");
  alert("The " + ns.innerHTML + " is a " + nsType + ".");
}