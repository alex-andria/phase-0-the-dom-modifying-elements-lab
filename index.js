document.querySelector('main').remove();

const body = document.querySelector('body');

const newHeader = document.createElement('h1');

newHeader.id = 'victory';
newHeader.innerHTML = "Alex is the champion!";
body.append(newHeader);