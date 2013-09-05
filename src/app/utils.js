dealapp.utils = {
	subs : function(title){
		//trim the string to the maximum length
		//re-trim if we are in the middle of a word
		return title.replace(/^(.{40}[^\s]*).*/, "$1")
		//return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
	}
};