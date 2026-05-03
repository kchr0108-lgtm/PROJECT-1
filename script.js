const form = document.getElementById("eventForm");
const participantsList = document.getElementById("participants");
window.onload = function(){

let data = JSON.parse(localStorage.getItem("participants")) || [];
data.forEach(function(user){
addParticipant(user);
});

};
form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let event = document.querySelector('input[name="event"]:checked');

if(name === "" || email === "" || !event){
alert("Please fill all fields");
return;
}
let user = {
name:name,
email:email,
event:event.value
};

addParticipant(user);

saveToLocalStorage(user);

form.reset();

});


function addParticipant(user){

let li = document.createElement("li");

li.textContent = user.name + " registered for " + user.event;

participantsList.appendChild(li);

}

function saveToLocalStorage(user){

let data = JSON.parse(localStorage.getItem("participants")) || [];

data.push(user);

localStorage.setItem("participants", JSON.stringify(data));

}
