class MediCall {
  queryCall(query){
    let promise;
    return promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${ query }&location=or-portland&skip=0&limit=10&user_key=${ process.env.exports.apiKey }`;
      request.responseType = 'json';
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open('GET', url, true);
      request.send();
    });
  }

  nameCall(name){
    let promise;
    return promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${ name }&location=or-portland&skip=0&limit=10&user_key=${ process.env.exports.apiKey }`;
      request.responseType = 'json';
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open('GET', url, true);
      request.send();
    });
  }
}

export { MediCall };
