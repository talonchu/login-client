var rootPrefix = location.origin + '/';
if (rootPrefix.match("localhost")) {
	rootPrefix = 'http://localhost:8080' + '/';
}

var Routes = {
	login: 'user/',

	buildURL: function (route ,params){
		"use strict";
        route = rootPrefix + route;
        $.each(params, function (key, value) {
            route = route.replace('{' + key + '}', value);
        });
        return route;
	}
};