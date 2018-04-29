class Listing {
  constructor(responseObj, index) {
    this.id = (index +1).toString();
    this.photo = responseObj.profile.image_url;
    this.firstName = responseObj.profile.first_name;
    this.lastName = responseObj.profile.last_name;
    this.title = responseObj.profile.title;
    this.specialty = responseObj.specialties[0].name;
    this.practice = responseObj.practices[0].name;
    this.address = [responseObj.practices[0].visit_address.street,
                    responseObj.practices[0].visit_address.city, responseObj.practices[0].visit_address.state, responseObj.practices[0].visit_address.zip,];
    this.phone = [responseObj.practices[0].phones[0].number,
                  responseObj.practices[0].phones[0].type ];
    this.location = [responseObj.practices[0].lat,
                    responseObj.practices[0].lon];
  }
}

export { Listing };
