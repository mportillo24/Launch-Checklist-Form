// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   fetch ("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       response.json().then(function(json) {
         let index = Math.floor(Math.random() * json.length);
           document.getElementById('missionTarget').innerHTML = `
           <h2>Mission Destination</h2>
           <ol>
             <li>Name: ${json[index].name}</li>
             <li>Diameter: ${json[index].diameter}</li>
             <li>Star: ${json[index].star}</li>
             <li>Distance from Earth: ${json[index].distance}</li>
             <li>Number of Moons: ${json[index].moons}</li>
           </ol>
           <img src='${json[index].image}'>
         `
       });
   });
   let form = document.getElementById('launchForm');
   form.addEventListener('submit', function(event) {
     let pilotName = document.getElementById('pilotName');
     let copilotName = document.querySelector('input[name=copilotName]');
     let fuelLevel = document.querySelector('input[name=fuelLevel]');
     let cargoMass = document.querySelector('input[name=cargoMass]');
     if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
     alert("All fields are required!");
     event.preventDefault();
     };
     if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
       alert('Please enter a valid name.');
       event.preventDefault();
     };
     if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
       alert('Please ensure that Fuel Level and Cargo Mass are valid numbers.');
       event.preventDefault();
     };
     let fautlyItems = document.getElementById('faultyItems');
     let pilotStatus = document.getElementById('pilotStatus');
     let copilotStatus = document.getElementById('copilotStatus');
     let fuelStatus = document.getElementById('fuelStatus');
     let cargoStatus = document.getElementById('cargoStatus');
     let launchStatus = document.getElementById('launchStatus');
     pilotStatus.innerHTML = `Pilot: ${pilotName.value}.`
     copilotStatus.innerHTML = `Co-Pilot: ${copilotName.value}.`
     if (fuelLevel.value < 10000) {
       fautlyItems.style.visibility = 'visible';
       fuelStatus.innerHTML = 'Not enough fuel for launch.';
       launchStatus.innerHTML = 'Shuttle not ready for launch.';
       launchStatus.style.color = 'red';
       event.preventDefault();
     }
     else if (cargoMass.value > 10000) {
       fautlyItems.style.visibility = 'visible';
       cargoStatus.innerHTML = 'Too much mass for shuttle to take off.'
       launchStatus.innerHTML = 'Shuttle not ready for launch.';
       launchStatus.style.color = 'red';
       event.preventDefault();
     } 
     else {
       fautlyItems.style.visibility = 'visible';
       launchStatus.innerHTML = 'Shuttle is ready for launch.';
       launchStatus.style.color = 'green';
       event.preventDefault();
     }
   });
 });