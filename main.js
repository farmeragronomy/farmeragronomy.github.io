document.getElementById("dealer").addEventListener("click", e => {
  if (document.getElementById("farmers").classList.contains("hide")) {
    document.getElementById("farmers").classList.remove("hide");
  }
  if (!document.getElementById("dealersinfo").classList.contains("hide")) {
    document.getElementById("dealersinfo").className += " hide";
  }
});
document.getElementById("consumer").addEventListener("click", e => {
  if (document.getElementById("dealersinfo").classList.contains("hide")) {
    document.getElementById("dealersinfo").classList.remove("hide");
  }
  if (!document.getElementById("farmers").classList.contains("hide")) {
    document.getElementById("farmers").className += " hide";
  }
});

var farmArr = [
  {
    name: "Ramesh",
    age: "34",
    gender: "M",
    contact: "9824356712",
    city: "Panji",
    items: ["Rice", "Wheat"]
  },
  {
    name: "Suresh",
    age: "43",
    gender: "M",
    contact: "8976341256",
    city: "New Delhi",
    items: ["Pulses", "Wheat"]
  },
  {
    name: "Sai Kiran",
    age: "32",
    gender: "M",
    contact: "9560167854",
    city: "Bilaspur",
    items: ["Rice", "Millet"]
  },
  {
    name: "Shikhar",
    age: "27",
    gender: "M",
    contact: "7896537891",
    city: "Ahemdabad",
    items: ["Sugarcane", "Wheat"]
  },
  {
    name: "Sunil",
    age: "47",
    gender: "M",
    contact: "9812256749",
    city: "Kolkata",
    items: ["Rice", "Wheat"]
  }
];
var dealArr = [
  {
    name: "Mayank",
    age: "22",
    gender: "M",
    contact: "9761221345",
    city: "Patna",
    items: ["Millet", "Pulses"]
  },
  {
    name: "Sukhrith",
    age: "24",
    gender: "M",
    contact: "9087762137",
    city: "Hyderabad",
    items: ["Rice", "Sugarcane"]
  },
  {
    name: "Deepansh",
    age: "42",
    gender: "M",
    contact: "9872345123",
    city: "Chandigarh",
    items: ["Rice", "Wheat"]
  },
  {
    name: "Animesh",
    age: "27",
    gender: "M",
    contact: "8769087342",
    city: "Indore",
    items: ["Corn", "Wheat"]
  },
  {
    name: "Anmol",
    age: "31",
    gender: "M",
    contact: "9863425671",
    city: "Pune",
    items: ["Rice", "Wheat", "Corn"]
  }
];

var farmers = document.getElementById("farmers");
var dealers = document.getElementById("dealersinfo");
console.log(farmArr);
for (var i = 0; i < farmArr.length; i++) {
  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img class="card-img-top" src="img_avatar1.png" alt="Card image" />
            <div class="card-body">
              <h4 class="card-title">${farmArr[i].name}</h4>
              <p class="card-text">Age:${farmArr[i].age}<br>Gender:${farmArr[i].gender}
              <br>Contact:${farmArr[i].contact}<br>Items:</p>
            </div>`;
  farmArr[i].items.forEach(item => {
    card.innerHTML += `<li class="ml-4">${item}</li>`;
  });
  farmers.children[0].appendChild(card);
}
for (var i = 0; i < dealArr.length; i++) {
  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img class="card-img-top" src="img_avatar1.png" alt="Card image" />
            <div class="card-body">
              <h4 class="card-title">${dealArr[i].name}</h4>
              <p class="card-text">Age:${dealArr[i].age}<br>Gender:${dealArr[i].gender}
              <br>Contact:${dealArr[i].contact}<br>Items:</p>
            </div>`;
  dealArr[i].items.forEach(item => {
    card.innerHTML += `<li class="ml-4">${item}</li>`;
  });
  dealers.children[0].appendChild(card);
}
