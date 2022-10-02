const categories = [
  {
    name: "უძრავი ქონება",
    id: 1,
  },
  {
    name: "ბიზნესი",
    id: 2,
  },
  {
    name: "მედია",
    id: 3,
  }
]

const domainList = [
  {
    domainName: "example1",
    domainExtension: ".ge",
    price: 299,
    categories: [1, 2]
  },
  {
    domainName: "example2",
    domainExtension: ".com.ge",
    price: 100,
    categories: [2, 3]
  },
  {
    domainName: "example3",
    domainExtension: ".edu.ge",
    price: 299,
    categories: [2]
  },
  {
    domainName: "example4",
    domainExtension: ".ge",
    price: 120,
    categories: [3]
  },
  {
    domainName: "example5",
    domainExtension: ".org.ge",
    price: 299,
    categories: [1, 3]
  }
]

// categories
const listCategory = categories.map(el => {
  return `
    <label class="containerr">
      <input class="filter-by-category" type="checkbox" value="${el.id}">
        <span class="checkmark"></span>
      <p for="huey">${el.name}</p>
    </label>
  `
}).join(' ');
document.querySelector('.div-check').innerHTML = listCategory;
document.querySelector('.div-check-media').innerHTML = listCategory;

var domainCategory = domainList.map(domainname => {
  return `
  <label class="containerr">
    <input type="checkbox" id="huey" name="drone" value="huey" >
      <span class="checkmark"></span>
    <p for="huey">${domainname.domainExtension}</p>
  </label>
  `
}).join(' ');

document.querySelector('.domain-list').innerHTML = domainCategory
document.querySelector('.domain-check-media').innerHTML = domainCategory


const domain_list_data = (new_domainList = []) => {

  let data = [];

  if (new_domainList.length >= 1) {
    data = new_domainList;
  } else {
    data = domainList;
  }

  const domains = data.map((el, key) => {
    return `
    <div class="wrapper">
    <div class="accordion">
        <p>${el.domainName + el.domainExtension}</p>
        <div class="prices">
            <p>${el.price} ₾</p>
            <button id="add_cart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true" style="width: 18px; height: 18px;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="panel">
        <div class="container">
            <div class="grid-12">
                <div class="col-4">
                    <div>
                        <h4>რეგისტრაციის თარიღი</h4>
                        <p>17.04.2018</p>
                    </div>
                </div>
                <div class="col-4 d-flex align-right">
                    <div>
                        <h4>გათიშვის თარიღი</h4>
                        <p>01.11.2023</p>
                    </div>
                </div>
                <div class="col-4 d-flex align-right">
                    <div>
                        <h4>NS ჩანაწერები:</h4>
                        <p>ns1.timeweb.ru</p>
                        <p>ns2.timeweb.ru</p>
                        <p>ns3.timeweb.org</p>
                        <p>ns4.timeweb.org</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    `
  }).join(' ');

  document.getElementById('domain_list').innerHTML = domains;
  document.getElementById('domain_listt').innerHTML = domains;

}

domain_list_data();


// category filters
const filter_categories = document.getElementsByClassName('filter-by-category');

for (let i = 0; i < filter_categories.length; i++) {

  filter_categories[i].addEventListener('change', (event) => {

    let new_domainList = domainList.filter(el => {
      return el.categories.includes(parseInt(event.target.value))
    });

    domain_list_data(new_domainList);
  });
}
// end category filters
// domain filters
// const filter_extentions = document.getElementsByClassName('filter-by-category');

// for (let i = 0; i < filter_extentions.length; i++) {

//   filter_extentions[i].addEventListener('change', (event) => {

//     let new_domainList = domainList.filter(el => {
//       return el.domainExtension == event.target.value 
//     });

//     domain_list_data(new_domainList);
//   });
// }
// domain filters


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.getElementById('add_cart').addEventListener('click', () => {
  const cart = document.getElementById('count_cart');
  cart.innerHTML = parseInt(cart.innerHTML) + 1;
})