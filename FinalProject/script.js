//This will be for the mobile menu 
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#mylist');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});

var mymap = L.map('mapid').setView([38.98698, -76.94265], 13);

var circle = L.circle([38.98698, -76.94265], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
  
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3JhaW0iLCJhIjoiY2tpOTZhYWZxMDR4azJ1bXh0djR2c2drayJ9.dSGEAnz8IhKkr1QskJsmDg'
}).addTo(mymap);