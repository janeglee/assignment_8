const state = {
    animal: null,
    action: null,
    dragElement: null
};

function allowDrop(event) {
    event.preventDefault();
}
  
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    state.dragElement = event.target.classList[0];
}
  
function drop(event) {
    event.preventDefault();  
    const data = event.dataTransfer.getData("text");
    const parentID = event.currentTarget.id;
    const element = event.currentTarget.children.length && event.currentTarget.children[1];
    if (state.dragElement === "animal" && parentID === "dropBox1") {
        //allow drop
    }
    else if (state.dragElement === "verb" && parentID === "dropBox2") {
        //allow drop
    }
    else {
        //don't allow drop
        return;
    }
    if (element) {
        if (element.className === "animal") {
            document.getElementById('animals').appendChild(element);
        }
        else if (element.className === "verb") {
            document.getElementById('verb').appendChild(element);
        }
    }
    event.currentTarget.appendChild(document.getElementById(data));
    if (parentID === "dropBox1") {
        state.animal = data;
    }

    else if (parentID === "dropBox2") {
        state.action = data;
    }
}

function randomImg () {
    let randomAnimal = null;
    let randomImgBox = document.getElementById('randomImgBox');
    let tryAgainImg = document.getElementById('tryAgainImg');
    const randomNumber = Math.floor(Math.random() * 4) + 1; 
    randomImgBox.className = "";
    tryAgainImg.className = "";
    if (randomNumber == 1) {
        randomImgBox.src = document.getElementById("cat").src;
        randomAnimal = 'cat';
    }
    else if (randomNumber == 2) {
        randomImgBox.src = document.getElementById("dog").src;
        randomAnimal = 'dog';
    }
    else if (randomNumber == 3) {
        randomImgBox.src = document.getElementById("cow").src;
        randomAnimal = 'cow';
    }
    else if (randomNumber == 4) {
        randomImgBox.src = document.getElementById("bird").src;
        randomAnimal = 'bird';
    }

    if (randomAnimal === state.animal) {
        //animate image according to action
        const action = state.action;
        randomImgBox.className = action;
    }
    //if the image does not match up with random img, it will say "Try again!"
    else {
        //after delay, show "Try again!"
        setTimeout(tryAgain,500);
    }
}

function tryAgain () {
    tryAgainImg.className = "visible";
}
