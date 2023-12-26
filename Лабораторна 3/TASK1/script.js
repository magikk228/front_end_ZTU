var paragraphsDiv = document.getElementById("paragraph");
var paragraphs = paragraphsDiv.getElementsByTagName("p");
var characterCounts = [];
for (var i = 0; i < paragraphs.length; i++) {
    var paragraphText = paragraphs[i].textContent; 
    var characterCount = paragraphText.length; 
    characterCounts.push(characterCount); 
}
console.log(characterCounts);