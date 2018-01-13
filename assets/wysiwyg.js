'use strict';

let personContainer = document.getElementById("container");

let famousArr = [
  {
    title: "Musician",
    name: "John Mayer",
    bio: "While attending Berklee College of Music as a guitar performance major, he created a trio. Before graduation, the trio became famous and he quit school to pursue music full-time. He has since become a famous guitarist and artist in the rock and pop genres.",
    image: "https://i.pinimg.com/736x/58/46/7b/58467b45f1d63ef3c6f6f8429717426a.jpg",
    lifespan: {
      birth: 1977,
      death: "N/A"
    }
  },
  {
    title: "Actor",
    name: "Tom Hanks",
    bio: "Hanks is an American actor and filmmaker. He is known for his comedic and dramatic roles in such films as 'Sleepless in Seattle', 'Cast Away', 'Captain Phillips', 'Sully', and 'Bridge of Spies'.",
    image: "http://i.dailymail.co.uk/i/pix/2017/01/19/05/3C42C6C900000578-0-image-a-85_1484805108765.jpg",
    lifespan: {
      birth: 1956,
      death: "N/A"
    }
  },
  {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  {
    title: "President",
    name: "Barack Obama",
    bio: "Barack Obama is an American politician who served as the 44th President of the United States from 2009 to 2017. He was the first African American to assume the presidency.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
    lifespan: {
      birth: 1961,
      death: "N/A" 
    }
  },
  {
    title: "Pianist",
    name: "Frederic Chopin",
    bio: "Chopin was a Polish composer and virtuoso pianist of the Romantic era who wrote primarily for the solo piano. His 'poetic genius was based on a professional technique that was without equal in his generation.'",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Chopin%2C_by_Wodzinska.JPG",
    lifespan: {
      birth: 1810,
      death: 1849
    }
  },
  {
    title: "Orange Monster",
    name: "Donald Trump",
    bio: "Mr. Trump is a sad and enraged orange who has very little hands. While it may seem like an inconvenience, his little hands actually allow for more tweets, so he sees them as the hands of a, 'stable genius.'",
    image: "https://crooksandliars.com/files/primary_image/17/01/161013_pol_trump-frowning.jpg.crop_.cq5dam_web_1280_1280_jpeg.jpg",
    lifespan: {
      birth: "???",
      death: "N/A"
    }
  }
];


function famousPeople() {
  let famousCard = "";
  for (let i = 0; i < famousArr.length; i++) {
    if ((i+1) % 2 === 0) {
      let famousOutput = `<div class="yellow card"><header> ${famousArr[i].name}, ${famousArr[i].title}</header><p>Bio: ${famousArr[i].bio}</p><img src=${famousArr[i].image}><p>Lifespan: ${famousArr[i].lifespan.birth} - ${famousArr[i].lifespan.death}</p></div>`
      famousCard += famousOutput;
    } else {
      let famousOutput = `<div class="blue card"><header> ${famousArr[i].name}, ${famousArr[i].title}</header><p>Bio: ${famousArr[i].bio}</p><img src=${famousArr[i].image}><p>Lifespan: ${famousArr[i].lifespan.birth} - ${famousArr[i].lifespan.death}</p></div>`
      famousCard += famousOutput;
    }
  };
  personContainer.innerHTML = famousCard;
  personContainer.addEventListener("click", () => {
    console.log("you clicked");
    personContainer.classList.add("dottedBorder");
    })
}

famousPeople();


// Event listener for dotted border

// personContainer.addEventListener("click", () => {
//   console.log("you clicked");
// })