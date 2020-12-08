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
}

function randomImg () {
    const randomNumber = Math.floor(Math.random() * 4) + 1; 
    console.log(randomNumber);
    if (randomNumber == 1) {
        const cat = document.getElementById('cat');
        return cat;
    }
    else if (randomNumber == 2) {
        const dog = document.getElementById('dog');
        return dog;
    }
    else if (randomNumber == 3) {
        cow = document.getElementById('cow');
        return cow;
    }
    else if (randomNumber == 4) {
        bird = document.getElementById('bird');
        return bird;
    }
}