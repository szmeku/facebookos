var Facebook = {};

(function(){

	var adres = "https://graph.facebook.com/oauth/access_token?client_id=561452133960172&grant_type=client_credentials&client_secret="+secret;
	var surowyToken = $.Deferred();

	if(localStorage.getItem('tokenWbazie')){
		surowyToken.resolve(localStorage.getItem('tokenWbazie'));
	}else{
		surowyToken = $.get(adres);
	}

	// przerabiany surowy token (czyli nie wiem czy dobry) na taki jak potrzebujemy
	var token = surowyToken.then(function(surowyToken){

		if(surowyToken.search("=")===-1){
			return surowyToken;
		}else{
			return surowyToken.split('=')[1];
		}

	});

	Facebook.token = token;

})();

