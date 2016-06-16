
var Promise = require('Promise');

function $http (url){
 
  // Piccolo esempio di oggetto
  var core = {

    // Metodo che realizza la chiamata ajax
    ajax : function (method, url, args) {

      // Creazione della promise
      var promise = Promise.defer();
		
		var client = Ti.Network.createHTTPClient();
	
		var getParameterString = function(param){
			var urlGet = "?";
			
			for(var key in param){
				var value = param[key];
				urlGet = urlGet + key + "=" + value + "&";
			}
			urlGet = urlGet.substr(0, urlGet.length-1);
			return urlGet;
		};

        client.open(method, url + getParameterString(args));
        client.send();

        client.onload = function () {
          if (this.status == 200) {
            // Performa la funzione "resolve"
            // quando this.status è 200
           promise.resolve(this.responseText);
          } else {
            // Performa la funzione "reject"
            // quando this.status è diverso da 200
            promise.reject(this.status);
          }
        };
        client.onerror = function () {
          promise.reject(this.status);
        };

      // Restituisce la promise
      return promise;
    }
  };

  // Adapter pattern
  return {
    'get' : function(args) {
      return core.ajax('GET', url, args);
    },
    'post' : function(args) {
      return core.ajax('POST', url, args);
    },
    'put' : function(args) {
      return core.ajax('PUT', url, args);
    },
    'delete' : function(args) {
      return core.ajax('DELETE', url, args);
    }
  };
};

module.exports = $http;

/*var httpClient = function(url, method, parameter){
	var client = Ti.Network.createHTTPClient({
		
		// function called when the response data is available
	 	onload : function(e) {
	    	 Ti.API.info("Received text: " + this.responseText);
			 alert('success');
	 	},
	 	// function called when an error occurs, including a timeout
	 	onerror : function(e) {
	     	Ti.API.debug(e.error);
	    	alert('error');
	 	},
	 	timeout : 5000  // in milliseconds
	});
	
	if(parameter != null){
		client.open(method, url + getParameterString(param));
		client.send(parameter);
	}else{
		client.open(method, url);
		client.send();
	}
};
*/
