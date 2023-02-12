const fetchDataButton = document.getElementById("create-btn");

fetchDataButton.addEventListener("click", async () => {
  const response = await fetch("https://randomuser.me/api/?inc=gender,name,email,nat,phone,dob,location,picture&format=json");
  const data = await response.json();
  const person = data.results[0];

  document.getElementById("full-name").textContent = `${person.name.first}`;
  document.getElementById("surname").textContent = person.name.last;
  document.getElementById("nationality").textContent = person.nat;
  document.getElementById("gender").textContent = person.gender;
  document.getElementById("dob").textContent = new Date(person.dob.date).toLocaleDateString();
  const locationList = document.getElementById("location");
  locationList.innerHTML = "";
  const locationDetails = [
    `${person.location.street.name} ${person.location.street.number}`,
    person.location.city,
    person.location.state,
    person.location.country
  ];
  locationDetails.forEach(detail => {
    const li = document.createElement("li");
    li.textContent = detail;
    locationList.append(li);
  });
  document.getElementById("email").textContent = person.email;
  document.getElementById("phone").textContent = person.phone.replace(/\D/g, "");
  document.getElementById("person-img").src = person.picture.large;
});

