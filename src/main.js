import $ from 'jquery';
import { MediCall } from './medi-call.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
const mapsapi = require( 'google-maps-api' )( process.env.API_KEY );

let map;
let maps;
let markers = [];

function initMap() {
  mapsapi().then(function(mapsObj) {
    maps = mapsObj;
    map = new mapsObj.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 45.5230622, lng: -122.6764815}
    });
  });
}

function plotMarker(lat, long, id){
  let coord = {Lat: lat, Lng: long}
  let marker = new maps.Marker({
    position: coord,
    map: map,
    url: id
  });
  markers.push(marker);
  marker.addListener('click', function(){
    $("#job-results").empty();
    jobsArray[index].forEach(function(job){
      window.location.href = this.url;
    });
  });
}

function parseResponse(json) {
  console.log(json);
  for (let i = 0; i < json.data.length; i++) {
    let resultId = "#result-" + i.toString();
    let listing = json.data[i];
    let ListingSpecialty = listing.specialty[0];
    let listingPractice = listing.practices[0];

    $("#results").append(`<div class="card card-body" id="${ resultId }"><div class="row"><div class="col-md-2"><img src="${ listing.profile.image_url }"></div><div class="col-md-10"><h4>${listing.profile.first_name} ${listing.profile.last_name}, ${listing.profile.title}</h4><p>${ListingSpecialty.name}</p><p>${listingPractice.name}<span>${listingPractice.accepts_new_patients}</span></p><p>${listingPractice.street}</p></div></div></div>`);

    plotMarker(listingPractice.visit_address.lat, listingPractice.visit_address.lon, resultId);
    // console.log(listing.profile.image_url);
    // console.log(listing.profile.first_name);
    // console.log(listing.profile.last_name);
    // console.log(listing.profile.title);
    // listing.specialties.forEach(function(specialty){
    //   console.log(specialty.name);
    // });
    // listing.practices.forEach(function(practice){
    //   console.log(practice.name);
    //   console.log(practice.accepts_new_patients);
    //   console.log([practice.visit_address.street,practice.visit_address.street2,practice.visit_address.city, practice.visit_address.state, practice.visit_address.zip]);
    //   practice.phones.forEach(function(phone){
    //     console.log(phone.number);
    //     console.log(phone.type);
    //   });
    // });
  }
}

$(function() {
  initMap();
  $("form").submit(function(event){
    event.preventDefault();
    let newCall = new MediCall();

    let queryPromise = newCall.queryCall("asthma", 1);
    // let namePromise = newCall.nameCall("jones");

    queryPromise.then(function(response){
      parseResponse(response);
    });
  });
});
