dealapp.utils = {
	subs : function(title){
		//trim the string to the maximum length
		var trimmedString = title.substr(0, 45);
		//re-trim if we are in the middle of a word
		return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
	}
};