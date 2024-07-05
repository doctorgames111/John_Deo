// Alphabet letters

let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let letterscont = document.querySelector(".letters");
let wrongattempts = 0;
let correctattempts = 0;
let score = 0;

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  let aLetter = document.createTextNode(letter);
  span.appendChild(aLetter);
  span.className = "letterbox";
  letterscont.appendChild(span);
});

// categories and words

categories = {
  sports: [
    "football",
    "basketball",
    "soccer",
    "tennis",
    "cricket",
    "baseball",
    "rugby",
    "golf",
    "swimming",
    "boxing",
    "volleyball",
    "ice hockey",
    "badminton",
    "athletics",
    "cycling",
    "wrestling",
    "surfing",
    "skiing",
    "table tennis",
  ],

  food: [
    "pizza",
    "sushi",
    "hamburger",
    "pasta",
    "tacos",
    "sushi",
    "curry",
    "steak",
    "samosa",
    "croissant",
    "shrimp",
    "ramen",
    "falafel",
    "sushi",
    "burger",
  ],

  languages: [
    "english",
    "spanish",
    "chinese",
    "hindi",
    "french",
    "arabic",
    "bengali",
    "russian",
    "portuguese",
    "japanese",
    "german",
    "korean",
    "turkish",
    "italian",
    "vietnamese",
    "polish",
    "dutch",
    "thai",
    "persian",
    "swedish",
  ],

  countries: [
    "united states",
    "china",
    "india",
    "brazil",
    "russia",
    "japan",
    "germany",
    "united kingdom",
    "france",
    "italy",
    "mexico",
    "canada",
    "south korea",
    "spain",
    "australia",
    "indonesia",
    "netherlands",
    "turkey",
    "saudi arabia",
    "switzerland",
    "egypt",
  ],

  clothes: [
    "tshirt",
    "jeans",
    "hoodie",
    "dress",
    "sweater",
    "jacket",
    "sneakers",
    "leggings",
    "skirt",
    "blouse",
    "coat",
    "pants",
    "shorts",
    "scarf",
    "tie",
    "boots",
    "sunglasses",
    "hat",
  ],

  animals: [
    "dog",
    "cat",
    "elephant",
    "lion",
    "horse",
    "tiger",
    "bear",
    "giraffe",
    "zebra",
    "rabbit",
    "koala",
    "monkey",
    "cheetah",
    "hippo",
    "rhino",
    "kangaroo",
    "wolf",
    "fox",
  ],

  currencies: [
    "dollar",
    "euro",
    "yen",
    "pound",
    "franc",
    "rupee",
    "yuan",
    "peso",
    "won",
    "ruble",
  ],

  videogames: [
    "mario",
    "zelda",
    "pokemon",
    "fortnite",
    "minecraft",
    "call of Duty",
    "grand Theft Auto",
    "league of Legends",
    "overwatch",
    "roblox",
  ],

  capitals: [
    "washington",
    "london",
    "paris",
    "tokyo",
    "rome",
    "berlin",
    "moscow",
    "beijing",
    "cairo",
    "brasilia",
  ],

  "social media": [
    "facebook",
    "instagram",
    "twitter",
    "snapchat",
    "tiktok",
    "linkedin",
    "reddit",
    "pinterest",
    "whatsapp",
    "telegram",
    "discord",
    "youtube",
    "twitch",
  ],

  "clothing brands": [
    "nike",
    "adidas",
    "gucci",
    "prada",
    "louis vuitton",
    "versace",
    "chanel",
    "zara",
    "calvin klein",
    "tommy hilfiger",
    "ralph lauren",
    "armani",
    "under armour",
    "uniqlo",
    "vans",
  ],

  restaurants: [
    "mcdonalds",
    "burger king",
    "starbucks",
    "kfc",
    "subway",
    "pizza hut",
    "dominos",
    "chipotle",
    "wendys",
    "taco bell",
    "panera bread",
    "chick fila",
    "five guys",
    "papa johns",
    "outback",
  ],

  "car brands": [
    "bmw",
    "mercedes",
    "audi",
    "volkswagen",
    "ford",
    "toyota",
    "honda",
    "chevrolet",
    "nissan",
    "hyundai",
    "kia",
    "subaru",
    "mazda",
    "lexus",
    "jeep",
    "tesla",
    "porsche",
    "ferrari",
    "maserati",
    "lamborghini",
  ],

  "mobile brands": [
    "apple",
    "samsung",
    "huawei",
    "xiaomi",
    "oneplus",
    "google pixel",
    "oppo",
    "vivo",
    "nokia",
    "realme",
  ],

  fruits: [
    "apple",
    "banana",
    "orange",
    "strawberry",
    "grape",
    "watermelon",
    "pineapple",
    "kiwi",
    "mango",
    "blueberry",
    "peach",
    "pear",
    "cherry",
    "lemon",
    "lime",
    "grapefruit",
    "plum",
    "raspberry",
    "blackberry",
    "cranberry",
  ],

  vegetables: [
    "carrot",
    "broccoli",
    "spinach",
    "potato",
    "cucumber",
    "lettuce",
    "bell pepper",
    "onion",
    "garlic",
    "celery",
    "cabbage",
    "cauliflower",
    "zucchini",
    "eggplant",
    "peas",
    "green beans",
    "asparagus",
    "radish",
    "sweet potato",
  ],

  "snack brands": [
    "lays",
    "doritos",
    "pringles",
    "ruffles",
    "cheetos",
    "oreo",
    "kitkat",
    "mars",
    "snickers",
    "twix",
    "hersheys",
    "cadbury",
    "fritos",
    "popcorners",
    "popchips",
    "kettle",
    "pirates booty",
    "rice krispies",
    "cheerios",
  ],

};

let keys = Object.keys(categories);
let randomkeynum = Math.floor(Math.random() * keys.length);
let randomkey = keys[randomkeynum];
let randomkeytext = document.createTextNode(randomkey);
let typename = document.querySelector(".typename");
typename.appendChild(randomkeytext);

// the view and the targeted word

let randomvaluenum = Math.floor(Math.random() * categories[randomkey].length);
let randomvalue = categories[randomkey][randomvaluenum];
let randomvalueArray = Array.from(randomvalue);
let view = document.querySelector(".view");
randomvalueArray.forEach((letter) => {
  let span = document.createElement("span");
  span.className = "wordbox";
  if (letter == " ") {
    correctattempts++;
    span.classList.add("space");
  }
  view.appendChild(span);
});

// a button clicked

let letter = document.getElementsByClassName("letterbox");
let thedraw = document.querySelector(".thedraw");
document.body.addEventListener("click", (e) => {
  if (e.target.className === "continue") {
    dark.classList.remove("gameover");
    winnerCont.classList.remove("gameover");
    document.body.classList.remove("failed");

    for (let i = 0; i < 26; i++) {
      letter[i].classList.remove("wrong");
      letter[i].classList.remove("correct");
    }

    wrongattempts = 0;
    correctattempts = 0;

    for (let i = 1; i <= 9; i++) {
      thedraw.classList.remove(`L${i}`);
    }

    for (let i = 0; i < randomvalueArray.length; i++) {
      view.firstChild.remove();
    }

    keys = Object.keys(categories);
    randomkeynum = Math.floor(Math.random() * keys.length);
    randomkey = keys[randomkeynum];
    randomkeytext = document.createTextNode(randomkey);
    typename = document.querySelector(".typename");
    typename.innerHTML = "";
    typename.appendChild(randomkeytext);
    randomvaluenum = Math.floor(Math.random() * categories[randomkey].length);
    randomvalue = categories[randomkey][randomvaluenum];
    randomvalueArray = Array.from(randomvalue);
    view = document.querySelector(".view");
    randomvalueArray.forEach((letter) => {
      let span = document.createElement("span");
      span.className = "wordbox";
      if (letter == " ") {
        correctattempts++;
        span.classList.add("space");
      }
      view.appendChild(span);
    });
    winnerh1.nextElementSibling.remove();
    winnerh1.nextElementSibling.remove();
  }

  if (e.target.className == "letterbox") {
    let statues = false;
    e.target.classList.add("wrong");
    let theclickedletter = e.target.innerHTML.toLowerCase();

    randomvalueArray.forEach((targetwordletter, letteri) => {
      if (targetwordletter == theclickedletter) {
        statues = true;
        correctattempts++;
        e.target.classList.remove("wrong");
        e.target.classList.add("correct");
        guessspans = document
          .querySelectorAll(".wordbox")

          .forEach((span, spani) => {
            if (spani === letteri) {
              span.innerHTML = targetwordletter;
              span.classList.add("done");
            }
          });
      }
    });

    if (statues === false) {
      wrongattempts++;
      thedraw.classList.add(`L${wrongattempts}`);
    }

    if (wrongattempts === 9) {
      document.body.classList.add("failed");
      setTimeout(() => {
        dark.classList.add("gameover");
        GameOverCont.classList.add("gameover");
      }, 1000);
      let thescore = document.createElement("div");
      let thescoreT = document.createTextNode(`Your score: `);
      let thescorenumspan = document.createElement("span");
      let thescorenumspanT = document.createTextNode(score);
      thescorenumspan.appendChild(thescorenumspanT);
      thescorenumspan.className = "scorenum";
      thescore.appendChild(thescoreT);
      thescore.appendChild(thescorenumspan);
      thescore.className = "score";
      thedeath.after(thescore);

      let highscore = window.localStorage.getItem("highscore") || 0;
      let thehighscore = document.createElement("div");
      let thehighscoreT = document.createTextNode(`Your high score: `);
      let thehighscorenumspan = document.createElement("span");
      let thehighscorenumspanT = document.createTextNode(highscore);
      thehighscorenumspan.appendChild(thehighscorenumspanT);
      thehighscorenumspan.className = "scorenum";
      thehighscore.appendChild(thehighscoreT);
      thehighscore.appendChild(thehighscorenumspan);
      thehighscore.className = "highscore";
      thescore.after(thehighscore);

      let theword = document.createElement("div");
      let thewordspan = document.createElement("span");
      let thewordspanT = document.createTextNode(randomvalue);
      thewordspan.appendChild(thewordspanT);
      thewordspan.className = "thewordspan";
      let thewordT = document.createTextNode(`The word was: `);
      theword.appendChild(thewordT);
      theword.appendChild(thewordspan);
      theword.className = "word";
      thedeath.after(theword);
    }

    guessspans = document.querySelectorAll(".wordbox");
    if (correctattempts == guessspans.length) {
      score++;
      document.body.classList.add("failed");
      setTimeout(() => {
        dark.classList.add("gameover");
        winnerCont.classList.add("gameover");
      }, 1000);

      let highscore = window.localStorage.getItem("highscore") || 0;
      if (score > highscore) {
        window.localStorage.setItem("highscore", score);
        highscore = window.localStorage.getItem("highscore") || 0;
      }

      let thenewscore = document.createElement("div");
      let thenewscoreT = document.createTextNode(`Your new score: `);
      thescorenumspan = document.createElement("span");
      thescorenumspanT = document.createTextNode(score);
      thescorenumspan.appendChild(thescorenumspanT);
      thescorenumspan.className = "scorenum";
      thenewscore.appendChild(thenewscoreT);
      thenewscore.appendChild(thescorenumspan);
      thenewscore.className = "score";
      winnerh1.after(thenewscore);

      let thenewhighscore = document.createElement("div");
      let thenewhighscoreT = document.createTextNode(`Your high score: `);
      thenewhighscorenumspan = document.createElement("span");
      thenewhighscorenumspanT = document.createTextNode(highscore);
      thenewhighscorenumspan.appendChild(thenewhighscorenumspanT);
      thenewhighscorenumspan.className = "scorenum";
      thenewhighscore.appendChild(thenewhighscoreT);
      thenewhighscore.appendChild(thenewhighscorenumspan);
      thenewhighscore.className = "highscore";
      thenewscore.after(thenewhighscore);
    }
  }
  if (e.target.className === "restart") {
    location.reload();
  }
});

// Game Over
let GameOverCont = document.createElement("div");
GameOverCont.className = "gameovercont";

let GameOverh1 = document.createElement("h1");
let GameOverh1T = document.createTextNode("Game Over");
GameOverh1.appendChild(GameOverh1T);
GameOverh1.className = "gameover";

let thedeath = document.createElement("div");
let thedeathT = document.createTextNode(`John Deo Died !!!`);
thedeath.appendChild(thedeathT);
thedeath.className = "thedeath";

let restart = document.createElement("div");
let restartT = document.createTextNode("Restart");
restart.appendChild(restartT);
restart.className = "restart";

let dark = document.querySelector(".dark");
GameOverCont.appendChild(GameOverh1);
GameOverCont.appendChild(thedeath);
GameOverCont.appendChild(restart);
document.body.appendChild(GameOverCont);

// continue

let winnerCont = document.createElement("div");
winnerCont.className = "gameovercont";

let winnerh1 = document.createElement("h1");
let winnerh1T = document.createTextNode("+1 Point");
winnerh1.appendChild(winnerh1T);
winnerh1.className = "gameover";

let contin = document.createElement("div");
let continT = document.createTextNode("Continue");
contin.appendChild(continT);
contin.className = "continue";

winnerCont.appendChild(winnerh1);
winnerCont.appendChild(contin);
document.body.appendChild(winnerCont);
