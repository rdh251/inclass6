// ADD NEW ITEM TO END OF LIST
lists = document.getElementsByTagName('ul');
newLi1 = document.createElement('li');
text1 = document.createTextNode('cream');
newLi1.appendChild(text1);
lists[0].appendChild(newLi1);

// ADD NEW ITEM START OF LIST
newLi2 = document.createElement('li');
text2 = document.createTextNode('kale');
newLi2.appendChild(text2);
lists[0].insertBefore(newLi2, lists[0].childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
liList = document.getElementsByTagName('li');
for (let i=0; i<liList.length; i++) {
    liList[i].classList.add('cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
heading = document.getElementsByTagName('h2')[0];
newSpan = document.createElement('span');
text3 = document.createTextNode(liList.length);
newSpan.appendChild(text3);
heading.appendChild(newSpan);