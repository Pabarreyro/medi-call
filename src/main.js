import $ from 'jquery';
import { MediCall } from './medi-call.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(function() {
  let newCall = new MediCall();

  let queryPromise = newCall.queryCall("asthma");
  // let namePromise = newCall.nameCall("jones");

  queryPromise.then(function(response){
    console.log(response);
  });
});
