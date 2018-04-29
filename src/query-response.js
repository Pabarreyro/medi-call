import { Listing } from './listing.js';

class QueryResponse {
  constructor(json) {
    this.count = json.data.length;
    this.listings = [];
  }

  addListing(listing){
    let listing = new Listing(listing);
    this.listings.push(listing);
  }
}

export { QueryResponse };
