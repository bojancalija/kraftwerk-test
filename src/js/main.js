import $ from "jquery";
import 'slick-carousel';

const selectOptions = document.getElementById('select');

 fetch('https://restcountries.eu/rest/v2/all')
 .then(res => res.json())
 .then(countries => {
     for(let country of countries) {
         let optionValues = '<option disabled selected hidden>- Choose Country -</option>'
        
         optionValues += `<option value="${country.name}">${country.name}</option>`
        
         selectOptions.insertAdjacentHTML('beforeend', optionValues)
     }
 });



// Blog Slider

$(document).ready(function() {
  $('.slick').slick({
    autoplay: true,
    autoplaySpeed: 3000
  });
}); 

