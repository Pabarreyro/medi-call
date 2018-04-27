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
      zoom: 2,
      center: {lat: 45.5230622, lng: -122.6764815}
    });
  });
}

function parseResponse(json) {
  console.log(json);
  json.data.forEach(function(doctor){
    console.log(doctor.profile.image_url);
    console.log(doctor.profile.first_name);
    console.log(doctor.profile.last_name);
    console.log(doctor.profile.title);
    doctor.specialties.forEach(function(specialty){
      console.log(specialty.name);
    });
    doctor.practices.forEach(function(practice){
      console.log(practice.name);
      console.log(practice.accepts_new_patients);
      console.log([practice.visit_address.street,practice.visit_address.street2,practice.visit_address.city, practice.visit_address.state, practice.visit_address.zip]);
      practice.phones.forEach(function(phone){
        console.log(phone.number);
        console.log(phone.type);
      });
    });
  });
}

$(function() {
  initMap();
  $("form").submit(function(event){
    event.preventDefault();
    let newCall = new MediCall();

    let queryPromise = newCall.queryCall("asthma", 1);
    let namePromise = newCall.nameCall("jones");

    queryPromise.then(function(response){
      parseResponse(response);
    });
  });
});
