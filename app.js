//This will grab the entire element by the ID name
let serviceHeading = document.getElementById("serviceAmazing");

console.log(serviceHeading);

//grabbing the id by multiple elements by className
let serviceElements = document.getElementsByClassName("serviceIcons");

console.log(serviceElements);

//grabbing the element by css selection
let serviceSupport = document.querySelector(".amazingIcon h4");

console.log(serviceSupport);

//grabbling all the elements by css selection
let serviceColumns = document.querySelectorAll(".serviceIcons h4");

console.log(serviceColumns);

//if we want to add text use .innerHTML
serviceHeading.innerHTML = "AMAZING";

//changing the text for a specific index in a NODECollection
serviceColumns[2].innerHTML = "Pizza";

styleCenter();

function styleCenter()
{
    for (let i = 0; i < serviceColumns.length; i++)
    {
        const element = serviceColumns[i];
    
        element.style.fontSize = "60px";
    }
}

//EVENT LISTENERS
let serviceImageOne = document.querySelector(".amazingIcon img");

console.log(serviceImageOne);

serviceImageOne.addEventListener("click", onImagePress);

function onImagePress()
{
    console.log("Image pressed.");

    let element = serviceColumns[0];

    element.innerHTML = "Bruh Moment";
    element.style.color = "purple";
    element.style.fontSize = "69px";

    console.log(`Service subtext changed to: ${serviceColumns[0].innerHTML}`);
}

let servicesText = document.querySelectorAll(".services h3");

console.log(servicesText)

function stylingText()
{
    for (let i = 0; i < servicesText.length; i++)
    {
        const element = servicesText[i];

        element.style.color = "green";
        element.style.fontSize = "60px";
    }
}

//sets the font size of each service subtext
for (let i = 0; i < serviceColumns.length; i++)
{
    serviceColumns[i].style.fontSize = "26px";
}



//EVENT EXERCISES

//Ex. 1: Revert "Pizza" text back to its original word IN JAVASCRIPT

//sets web service subtext back to its original word and resets the font size
serviceColumns[2].innerHTML = "Design";

//Ex. 2: If the smartphone icon on the services row is clicked, change the nav text to BLUE

//declares a variable to store the element gotten by id for the image that needs to be clicked
let smartphoneImage = document.getElementById("smartphoneImage");

//adds an event lister that will run the onSmartphoneImagePress function when the image element is clicked
smartphoneImage.addEventListener("click", onSmartphoneImagePress)

//gets the elements that need to change colors, stores them in a local variable, and changes their font color to blue
function onSmartphoneImagePress()
{
    let serviceMobile = document.getElementById("serviceMobile");
    let serviceSubtext = document.getElementById("serviceSubtext");

    serviceMobile.style.color = "blue";
    serviceSubtext.style.color = "blue";
}

//Ex. 3: Output "Ima Mr. Portfolio to the console when the word 'PORTFOLIO' in 'RECENT FROM PORTFOLIO' is hovered over with the mouse

//set the word that needs to be hovered over to a local variables
let portfolioWord = document.getElementById("portfolioHeaderWord");

//add the event listener to check for when the mouse is hovering over the word 'PORTFOLIO'
portfolioWord.addEventListener("mouseover", onPortfolioHover);

//console out the statement
function onPortfolioHover()
{
    console.log("Ima Mr. Portfolio");
}


//Ex. 4: Change all the green backgrounds of the subtext links to purple

//queries all the portfolio links
let portfolioLinks = document.querySelectorAll(".portfolio a");

//iterates for each portfolio link and changes the background color to purple
for (let i = 0; i < portfolioLinks.length; i++)
{
    let element = portfolioLinks[i];

    element.style.backgroundColor = "purple";
}


//Ex. 5: When the Moo Minicard Image is clicked, change the subheading font to 60px

//gets the image element by id
let mooMinicardImage = document.getElementById("mooMinicardsImage");

//adds an on click event listener for that element 
mooMinicardImage.addEventListener("click", changeSubheaderFont);

//gets the subheader element by id and changes the font size to 60px
function changeSubheaderFont()
{
    let element = document.getElementById("portfolioSubheader");

    element.style.fontSize = "60px";
}