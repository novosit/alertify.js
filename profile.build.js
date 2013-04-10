/* jshint unused: false */
'use strict';

var profile = {
	resourceTags : {
		amd : function(filename, mid) {
			return (/^src\//).test(filename);
		},
		ignore: function(filename, mid) {
			return (/test\/(qunit|specs|vendor|index|runner)/).test(filename);
		}
	}
};