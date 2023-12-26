/*var textNode = document.createTextNode("Це текст, який ви хочете вивести.");

// Створіть новий елемент, до якого ви добавите текстовий вузол
var divElement = document.createElement("div");

// Додайте текстовий вузол до елементу div
divElement.appendChild(textNode);

// Отримайте посилання на елемент body або інший батьківський елемент, де ви хочете вивести div
var bodyElement = document.body; // Наприклад, тут я використав body

// Додайте div на сторінку
bodyElement.appendChild(divElement);

*/
/*let textLogin = document.createTextNode('login');
let divElementLogin = document.createElement('div');
divElementLogin.classList.add('textoLogin');
let bodyElement = document.body;
bodyElement.appendChild(divElementLogin);
*/

var textlogin = document.createTextNode("Логін");
var bodyElement = document.body;
bodyElement.appendChild(textlogin);

var br1 = document.createElement("br");
bodyElement.appendChild(br1);

var vediLogininput = document.createElement("input");
bodyElement.appendChild(vediLogininput);

var br1 = document.createElement("br");
bodyElement.appendChild(br1);
var textparol = document.createTextNode("Пароль");
var bodyElement = document.body;
bodyElement.appendChild(textparol);

var br1 = document.createElement("br");
bodyElement.appendChild(br1);

var vedParolinput = document.createElement("input");
bodyElement.appendChild(vedParolinput);

var br1 = document.createElement("br");
bodyElement.appendChild(br1);

var textparolrepeat = document.createTextNode("Повторіть пароль");
var bodyElement = document.body;
bodyElement.appendChild(textparolrepeat);
var br1 = document.createElement("br");
bodyElement.appendChild(br1);
var povtParolinput = document.createElement("input");
bodyElement.appendChild(povtParolinput);


const genderOptions = ["Чоловік", "Жінка", "Юра"];

const genderLabel = document.createElement("label");
genderLabel.textContent = "Стать";

const selectElement = document.createElement("select");
selectElement.setAttribute("name", "gender");

for (const option of genderOptions) {
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
}
var br1 = document.createElement("br");
bodyElement.appendChild(br1);
bodyElement.appendChild(selectElement);

let br = document.createElement("br");
bodyElement.appendChild(br);
let misto = document.createTextNode("Вкажіть місто: ")
bodyElement.appendChild(misto);

/*const mistoOptions = ["Коростишів", "Житомир", "Крижопіль", "Козятин"];

const selectElement1 = document.createElement("select1");
selectElement1.setAttribute("name1", "misto1");

for (const option1 of mistoOptions) {
    const mistoElement = document.createElement("option");
    optionElement1.textContent = option1;
    selectElement1.appendChild(selectElement1);
}
bodyElement.appendChild(selectElement1);*/

var br1 = document.createElement("br");
bodyElement.appendChild(br1);

const mistoOptions = ['Коростишів', 'Житомир', 'Київ', 'Львів'];

const selectElement1 = document.createElement("select");
selectElement1.setAttribute("name1", "misto1");

for (const list of mistoOptions) {
    const mistOptions = document.createElement('option');
    mistOptions.textContent = list;
    selectElement1.appendChild(mistOptions); 
}
bodyElement.appendChild(selectElement1);

var br1 = document.createElement("br");
bodyElement.appendChild(br1);

var interesi = document.createTextNode("Інтереси");
bodyElement.appendChild(interesi);

const interesOptions = ['Футбол', 'Шахи', 'малювання'];

const selectElement2 = document.createElement("select");
selectElement2.setAttribute("name2", "interesi");

for (const list1 of interesOptions) {
    const interesOptions = document.createElement('option');
    interesOptions.textContent = list1;
    selectElement2.appendChild(interesOptions);
}
bodyElement.appendChild(selectElement2);

var br1 = document.createElement("br");
bodyElement.appendChild(br1);

const button = document.createElement("button");
button.innerHTML = "Очистити";
bodyElement.appendChild(button);

const button1 = document.createElement("button");
button1.innerHTML = "Відправити";
bodyElement.appendChild(button1);

