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

serviceImageOne.addEventListener("click", stylingText);