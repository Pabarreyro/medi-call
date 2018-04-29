import { Listing } from './listing.js';

class MediCallback {
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
