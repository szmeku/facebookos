
var adres = "https://graph.facebook.com/oauth/access_token?client_id=561452133960172&grant_type=client_credentials&client_secret="+secret;

function tokenSucces(odpowiedz){
  var token = odpowiedz.split('=')[1];
  localStorage.setItem('tokenWbazie', token);

  zapytajOPosty(token, postsSuccess);
};

function zapytajOPosty(token, callback){
    var adresPostow = "https://graph.facebook.com/v2.1/237475253100127/posts?fields=message&access_token="+token;

    $.get(adresPostow, callback);
}

function postsSuccess(odp){
    var posty = odp.data;

    for (i=0; i<posty.length; i++){
       console.log(posty[i].message);
    }
}

var surowyToken = $.Deferred(),
      posts = $.Deferred();

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


token.done(function(doberyTokenix){
  console.log(doberyTokenix);
});

