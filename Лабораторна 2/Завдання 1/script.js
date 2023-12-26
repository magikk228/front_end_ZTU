var bodyElement = document.body;
bodyElement.style.fontFamily = 'Arial, sans-serif';

let tags = document.querySelectorAll('body p');
for(let i = 0; i < tags.length; i++) {
    tags[0].classList.add('anekdot');
    tags[1].classList.add('durka');
    tags[2].classList.add('prikol');
} 

let yellow = document.querySelectorAll('body td');
for(let i = 0; i < yellow.length; i = i + 2) {
    yellow[i].classList.add('td');
} 


let text = `Lorem ipsum dolor sit amet, consectetur 
adipisicing elit. Deserunt ea earum incidunt minima nihil. 
Blanditiis consectetur cumque debitis delectus dolor dolorem 
dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;
text1 = text[12] + text[6] + text[18] + text[25];
console.log(text1);
var result = text1.toLowerCase()
console.log(result);
let target = "id";

let pos = -1;
while ((pos = text.indexOf(target, pos + 1)) != -1) {
  console.log( pos );
}

let bezprobila = text.split(" ");
console.log(bezprobila);

let reversedText = text.split("").reverse().join("");
console.log(reversedText);

function ucFirst(txt) {
    if (txt.length === 0) return txt;
    return txt[0].toUpperCase() + txt.slice(1);
}

console.log(ucFirst('some text'));