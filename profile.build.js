/* jshint unused: false */
'use strict';

var profile = {
	resourceTags : {
		amd : function(filename, mid) {
			return (/^src\//).test(filename);
		}/*,
		copyOnly: function(filename) {
			return /\.css$/.test(filename);
		}*/
	}
};