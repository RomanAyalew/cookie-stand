


const seattle = {
location: 'seattle', 
}
const tokiyo = {
 location: 'Tokyo',
}
let cookieStand = seattle;
const storeContainerElem = document.getElementById('store-container');
//createCookieStand(seattle);
//function createCookieStand(cookieStand) {//

//}

//document.createElement('section');
const sectionElem = document.createElement('section');
storeContainerElem.appendChild(sectionElem);
 const locationElem = document.createElement('h2');
 sectionElem.appendChild(locationElem);
 locationElem.textContent = 'Seattle';

let hourListElem = document.createElement('ul');
sectionElem.appendChild(hourListElem);

 let hourItemElem = document.createElement('li');
 hourListElem.appendChild(hourItemElem);
 hourItemElem.textContent = '6am: 16 cookies';

 hourItemElem = document.createElement('li');
 hourListElem.appendChild(hourItemElem);
 hourItemElem.textContent = '7am: 20 cookies';

 hourItemElem = document.createElement('li');
 hourListElem.appendChild(hourItemElem);
 hourItemElem.textContent = '8am: 35 cookies';

 hourItemElem = document.createElement('li');
 hourListElem.appendChild(hourItemElem);
 hourItemElem.textContent = '9am: 48 cookies';

 hourItemElem = document.createElement('li');
 hourListElem.appendChild(hourItemElem);
 hourItemElem.textContent = '10am: 56cookies';


 hourItemElem = document.createElement('li');
 hourListElem.appendChild(hourItemElem);
 hourItemElem.textContent = '11am: 77cookies'; 