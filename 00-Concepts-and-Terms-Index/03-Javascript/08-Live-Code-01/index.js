// Etsy Shop

/*
    This is a painting shop
        - We want to see al the paintings
        - when we click on a painting it gets added to our cart
        - payout page + button
        - confirm order page + button 

    We are going to dynacmically producing everything via JS
*/

// Create variables
// refernce the Document
// something to hold the data

const paintingsArr = [
  {
    name: "Love is in the air",
    picture:
      "https://images.unsplash.com/photo-1654275521788-41c3424ed38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    price: 10,
    artist: "daniel",
  },
  {
    name: "Solitude",
    picture:
      "https://images.unsplash.com/photo-1654293986460-d3991ffa97a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: 10,
    artist: "Sam",
  },
  {
    name: "Love is in the air",
    picture:
      "https://images.unsplash.com/photo-1654275521788-41c3424ed38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    price: 10,
    artist: "Juno",
  },
  {
    name: "Love is in the air",
    picture:
      "https://images.unsplash.com/photo-1654275521788-41c3424ed38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    price: 10,
    artist: "Bobby",
  },
  {
    name: "Love is in the air",
    picture:
      "https://images.unsplash.com/photo-1654275521788-41c3424ed38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    price: 10,
    artist: "Louis",
  },
  {
    name: "I Luv You",
    picture:
      "https://images.unsplash.com/photo-1654275521788-41c3424ed38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    price: 10,
    artist: "daniel",
  },
  {
    name: "Lobing You",
    picture:
      "https://images.unsplash.com/photo-1654275521788-41c3424ed38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    price: 10,
    artist: "daniel",
  },
  {
    name: "Love has wings",
    picture:
      "https://images.unsplash.com/photo-1654275521788-41c3424ed38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    price: 10,
    artist: "daniel",
  },
  {
    name: "Love is like red bull",
    picture:
      "https://images.unsplash.com/photo-1654275521788-41c3424ed38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    price: 10,
    artist: "daniel",
  },
  {
    name: "love to get high",
    picture:
      "https://images.unsplash.com/photo-1654275521788-41c3424ed38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    price: 10,
    artist: "daniel",
  },
];

const container = document.querySelector(".container");

// picture, name, price, artist

function createHeader() {
  // Welcome to the page
  const header = document.createElement("h1");
  header.textContent = "Welcome to my Etsy Shop";
  document.body.prepend(header);
}

function populateTheStore() {
  // Puts all the paintings here with the info
  // Main gallery to hold everything
  const gallery = document.createElement("main");
  gallery.classList.add("bigSection");


  for (let i = 0; i < paintingsArr.length; i++) {
    // This is the container for all the painting's information
    const section = document.createElement("section");

    // img tag for the photo
    const img = document.createElement("img");
    const nameOfPainting = document.createElement("p");
    const artistOfPainting = document.createElement("p");
    const priceOfPainting = document.createElement("p");

    img.setAttribute("src", paintingsArr[i].picture);
    img.setAttribute("class", "image");
    img.addEventListener("click", addToCart);
    nameOfPainting.textContent = paintingsArr[i].name;
    artistOfPainting.textContent = paintingsArr[i].artist;
    priceOfPainting.textContent = paintingsArr[i].price;

    section.append(nameOfPainting, img, artistOfPainting, priceOfPainting);
    gallery.append(section);
  }

  container.append(gallery);
}

function cart() {
  // shows the ones we clicked on
  const cartContainer = document.createElement("aside");
  cartContainer.classList.add("bigSection");

  const cartHeader = document.createElement("h1");
  const section = document.createElement("section");

  section.classList.add("cartSection");

  cartHeader.textContent = "Cart";

  cartContainer.append(cartHeader, section);
  container.append(cartContainer);
}

createHeader();
populateTheStore();
cart();

function addToCart(event) {
  // console.log(event);
  const paintingName = event.target.previousElementSibling.textContent;
  const price = event.target.nextElementSibling.nextElementSibling.textContent;

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("flex");

  infoDiv.append(paintingName, price);

  document.querySelector(".cartSection").append(infoDiv);
}
