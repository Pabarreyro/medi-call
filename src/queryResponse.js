import { Listing } from './listing.js';
class QueryResponse {
  constructor(json) {
    this.count = json.data.length;
    this.listings = [];
  }

  addListing(jsonObj){
    let listing =
  }
}
