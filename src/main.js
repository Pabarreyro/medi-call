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
  let coords = new maps.LatLng(lat,long);
  let marker = new maps.Marker({
    position: coords,
    map: map,
    label: id
  });
  markers.push(marker);
}

function parseResponse(json) {
  console.log(json);
  for (let i = 0; i < json.data.length; i++) {
    let resultId = (i + 1).toString();
    let listing = json.data[i];
    let listingSpecialty = listing.specialties[0];
    let listingPractice = listing.practices[0];
    let listingPhone = listingPractice.phones[0];

    let newPatients;
    if (listingPractice.accepts_new_patients === true) {
      newPatients = "Accepting new patients";
    } else {
      newPatients = "Not accepting new patients";
    }

    let listingLat = listingPractice.visit_address.lat;
    let listingLong = listingPractice.visit_address.lon;
    plotMarker(listingLat,listingLong, resultId);

    $("#results").append(`<div class="card card-body">
                            <div class="row">
                              <div class="col-md-2">
                                <img src="${ listing.profile.image_url }">
                              </div>
                              <div class="col-md-3">
                                <h4>${ resultId }. ${listing.profile.first_name} ${listing.profile.last_name}, ${listing.profile.title}
                                </h4>
                                <p>${listingSpecialty.name}</p>
                              </div>
                              <div class="col-md-4">
                                <h5>${listingPractice.name}</h5>
                                <p>${ newPatients }</p>
                                <p>${listingPractice.visit_address.street}, ${listingPractice.visit_address.street2}</p>
                                <p>${listingPractice.visit_address.city}, ${listingPractice.visit_address.state} ${listingPractice.visit_address.zip}</p>
                                <p>${listingPhone.number}(${listingPhone.type})</p>
                            </div>
                          </div>`
                        );
  }
}

$(function() {
  let newCall;

  initMap();
  $("form").submit(function(event){
    event.preventDefault();
    newCall = new MediCall();
    let searchLimit = parseInt($("#search-limit").val());
    let queryVal = newCall.cleanUserInput($("#search-value").val());

    if ($("#search-type").val() === "keyword") {
      let keywordPromise = newCall.keywordCall(queryVal);

      keywordPromise.then(function(response){
        parseResponse(response);
      });
    } else {
      let namePromise = newCall.keywordCall(queryVal);

      namePromise.then(function(response){
        parseResponse(response);
      });
    }
  });
});
