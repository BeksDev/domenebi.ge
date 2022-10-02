const filter_extentions = document.getElementsByClassName('filter-by-category');

for (let i = 0; i < filter_extentions.length; i++) {

  filter_extentions[i].addEventListener('change', (event) => {

    let new_domainList = domainList.filter(el => {
      return el.domainExtension == event.target.value 
    });

    domain_list_data(new_domainList);
  });
}

// https://stackoverflow.com/questions/2722159/how-to-filter-object-array-based-on-attributes