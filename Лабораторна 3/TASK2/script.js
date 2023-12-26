let prikol = document.querySelectorAll('table td')

for(let i = 0; i < prikol.length; i = i + 2) {
    prikol[i].classList.add('selected');
} 