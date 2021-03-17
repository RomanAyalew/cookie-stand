


// const seattle = {
// location: 'seattle', 
// }
// const tokiyo = {
//  location: 'Tokyo',
// }
// let cookieStand = seattle;
// const storeContainerElem = document.getElementById('store-container');
// //createCookieStand(seattle);
// //function createCookieStand(cookieStand) {//

// //}

// //document.createElement('section');
// const sectionElem = document.createElement('section');
// storeContainerElem.appendChild(sectionElem);
//  const locationElem = document.createElement('h2');
//  sectionElem.appendChild(locationElem);
//  locationElem.textContent = 'Seattle';

// let hourListElem = document.createElement('ul');
// sectionElem.appendChild(hourListElem);

//  let hourItemElem = document.createElement('li');
//  hourListElem.appendChild(hourItemElem);
//  hourItemElem.textContent = '6am: 16 cookies';

//  hourItemElem = document.createElement('li');
//  hourListElem.appendChild(hourItemElem);
//  hourItemElem.textContent = '7am: 20 cookies';

//  hourItemElem = document.createElement('li');
//  hourListElem.appendChild(hourItemElem);
//  hourItemElem.textContent = '8am: 35 cookies';

//  hourItemElem = document.createElement('li');
//  hourListElem.appendChild(hourItemElem);
//  hourItemElem.textContent = '9am: 48 cookies';

//  hourItemElem = document.createElement('li');
//  hourListElem.appendChild(hourItemElem);
//  hourItemElem.textContent = '10am: 56cookies';


//  hourItemElem = document.createElement('li');
//  hourListElem.appendChild(hourItemElem);
//  hourItemElem.textContent = '11am: 77cookies'; 
let table = document.getElementById('table');
const hours = ['7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
const stores = [];

function Store(name,min,max,avg){
  this.name = name;
  this.min = min;
  this.avg = avg;
}

const seattle = new Store('Seattle',1,2,6);

function renderHeader(){
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  tr.appendChild(th);
  for(let i = 0; i < hours.length; i++){
    th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Daily totals';
  tr.appendChild(th);
  thead.appendChild(tr);
  console.log(thead);
  console.log(table);
  table.appendChild(thead);
}
renderHeader();