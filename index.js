const array = [
  {
    text: "Letter Three: 貴重な",
    id: "line-h3",
  },
  {
    text: "Hey My Dear",
    id: "line-head",
  },
  {
    text: "&#10084;",
    id: "line-0",
  },
  {
    text: "Precious, Priceless, Treasure - For Me these words were an un-exprienced mystery.",
    id: "line-1",
  },
  {
    text: "But today I got ",
    id: "line-2",
  },
  {
    text: "Precious / Priceless / Treasure",
    id: "line-3",
  },
  {
    text: "Research You made to make Me happy is",
    id: "line-4",
  },
  {
    text: "Precious",
    id: "line-5",
  },
  {
    text: "Efforts that You took to make Me happy is",
    id: "line-6",
  },
  {
    text: "Priceless",
    id: "line-7",
  },
  {
    text: "Time You have spent to make Me happy is",
    id: "line-8",
  },
  {
    text: "Treasure",
    id: "line-9",
  },
  {
    text: "Your Love is Precious",
    id: "line-10",
  },
  {
    text: "Thank You so Much for making the happiest day of My life & for these precious",
    id: "line-11",
  },
  {
    text: "&#10084;",
    id: "line-12",
  },
  {
    text: "image",
    id: 1,
  },
  {
    text: "image",
    id: 2,
  },
  {
    text: "image",
    id: 3,
  },
  {
    text: "image",
    id: 4,
  },
  {
    text: "image",
    id: 5,
  },
  {
    text: "image",
    id: 6,
  },
  {
    text: "image",
    id: 7,
  },
  {
    text: "image",
    id: 8,
  },
  {
    text: "Forever Your Nerdy ",
    id: "line-13",
  },
  {
    text: "&#10084;",
    id: "line-14",
  },
  {
    text: "hoping,",
    id: "line-15",
  },
  {
    text: "To Gift More Precious",
    id: "line-16",
  },
  {
    text: "&#10084;",
    id: "line-17",
  },
  {
    text: "To My Dear ",
    id: "line-18",
  },
  {
    text: "&#10084;",
    id: "line-19",
  },
  {
    text: "Anitha aka Meena aka Pondatti",
    id: "line-20",
  },
  {
    text: "பின் குறிப்பு:",
    id: "line-21",
  },
  {
    text: "Sorry as I was not able to express precious",
    id: "line-22",
  },
  {
    text: "&#10084;",
    id: "line-23",
  },
  {
    text: "as You did.",
    id: 'line-24',
  },
  {
    text: "Had to do some operation to keep My precious ",
    id: "line-25",
  },
  {
    text: "&#10084;",
    id: "line-26",
  },
  {
    text: "preserved.",
    id: 'line-27',
  },
];
async function displayTextOneLetterAtATime(text, outputElement) {
  let index = 0;
  const resolvePromise = new Promise((resolve) => {
    displayNextLetter(resolve);
  });
  function displayNextLetter(resolve) {
    if (index < text.length) {
      outputElement.textContent += text.charAt(index);
      index++;
      setTimeout(() => displayNextLetter(resolve), 100); // Adjust the delay (in milliseconds) between letters
    } else {
      resolve();
    }
  }
  return resolvePromise;
}

let image = null;
const mainDiv = document.getElementById("main-div");

const overlay = document.getElementById("overlay");

const closeOverlay = () => {
  overlay.removeChild(overlay.children[1]);
  overlay.style.display = "none";
};

let i = 0;

const doOperation = async () => {
  while (i < array.length) {
    const { text, id } = array[i];
    if (text === "&#10084;") {
      document.getElementById(id).innerHTML = text;
    } else if (text === "image") {
      const image = document.createElement("img");
      image.style.height = "250px";
      image.style.width = "250px";
      image.style.objectFit = "contain";
      image.style.margin = "16px";
      image.style.cursor = "pointer";
      image.setAttribute("src", `image-${id}.jpg`);
      image.addEventListener("click", () => {
        overlay.style.display = "flex";
        image.style.height = "60vh";
        image.style.width = "50vh";
        image.style.margin = "0px";
        overlay.appendChild(image);
      });
      mainDiv.appendChild(image);
    } else await displayTextOneLetterAtATime(text, document.getElementById(id));
    i++;
  }
};

doOperation();
