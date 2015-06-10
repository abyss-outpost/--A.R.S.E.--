export class Data {
                    constructor($http){

this.$http = $http;

                                      }
                               load() {

return this.$http.get('/data/data.json').then((res) => res.data);

                                      }
                  }
