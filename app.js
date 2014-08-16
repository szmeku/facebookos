var adres = "https://graph.facebook.com/oauth/access_token?client_id=561452133960172&client_secret=385ca5f31a8dc1c6edb11e217ebbddc3&grant_type=client_credentials";

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

if(localStorage.getItem('tokenWbazie')){
   zapytajOPosty(localStorage.getItem('tokenWbazie'), postsSuccess);
}else{
    $.get(adres, tokenSucces);
}