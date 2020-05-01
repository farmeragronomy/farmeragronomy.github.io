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
    contact: "235325253",
    city: "goa",
    items: ["Rice", "Wheat"]
  },
  {
    name: "Ramesh",
    age: "34",
    gender: "M",
    contact: "235325253",
    city: "goa",
    items: ["Rice", "Wheat"]
  },
  {
    name: "Ramesh",
    age: "34",
    gender: "M",
    contact: "235325253",
    city: "goa",
    items: ["Rice", "Wheat"]
  },
  {
    name: "Ramesh",
    age: "34",
    gender: "M",
    contact: "235325253",
    city: "goa",
    items: ["Rice", "Wheat"]
  },
  {
    name: "Ramesh",
    age: "34",
    gender: "M",
    contact: "235325253",
    city: "goa",
    items: ["Rice", "Wheat"]
  }
];
var dealArr = [
  {
    name: "Shreyash",
    age: "34",
    gender: "M",
    contact: "235325253",
    city: "goa",
    items: ["Rice", "Wheat"]
  },
  {
    name: "Rakesh",
    age: "24",
    gender: "M",
    contact: "235325253",
    city: "surat",
    items: ["Rice", "Wheat"]
  },
  {
    name: "Ramesh",
    age: "34",
    gender: "M",
    contact: "235325253",
    city: "goa",
    items: ["Rice", "Wheat"]
  },
  {
    name: "Ramesh",
    age: "34",
    gender: "M",
    contact: "235325253",
    city: "goa",
    items: ["Rice", "Wheat"]
  },
  {
    name: "Ramesh",
    age: "34",
    gender: "M",
    contact: "235325253",
    city: "goa",
    items: ["Rice", "Wheat"]
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
              <br>Contact:${farmArr[i].contact}<br>Items:${farmArr[0].items[0]},${farmArr[0].items[1]}</p>
            </div>`;
  farmers.children[0].appendChild(card);
}
for (var i = 0; i < dealArr.length; i++) {
  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img class="card-img-top" src="img_avatar1.png" alt="Card image" />
            <div class="card-body">
              <h4 class="card-title">${dealArr[i].name}</h4>
              <p class="card-text">Age:${dealArr[i].age}<br>Gender:${dealArr[i].gender}
              <br>Contact:${dealArr[i].contact}<br>Items:${dealArr[0].items[0]},${dealArr[0].items[1]}</p>
            </div>`;
  dealers.children[0].appendChild(card);
}
