function allowDrop(event) {
    event.preventDefault();
}
  
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
  
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    console.log(data);
}

function randomImg () {
    const randomNumber = Math.floor(Math.random() * 4) + 1; 
    const imageID = null;
    if (randomNumber == 1) {
        const img = document.createElement("img");
        imageID = document.getElementById("cat");
        img.src = document.getElementById("cat").src;
        document.getElementById('randomImgBox').src = img.src;
    }
    else if (randomNumber == 2) {
        const img = document.createElement("img");
        img.src = document.getElementById("dog").src;
        document.getElementById('randomImgBox').src = img.src;
    }
    else if (randomNumber == 3) {
        const img = document.createElement("img");
        img.src = document.getElementById("cow").src;
        document.getElementById('randomImgBox').src = img.src;
    }
    else if (randomNumber == 4) {
        const img = document.createElement("img");
        img.src = document.getElementById("bird").src;
        document.getElementById('randomImgBox').src = img.src;
    }

    if (imageID == data) {
        //animate image according to action
        //hmm "data" is same for animal and verb. need 2 sets, differentiate.
        const action = document.getElementById
    }
    else {
        //after delay, show "Try again!"
    }
}

//need to 