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

Facebook.token.done(function(doberyTokenix){
  console.log(doberyTokenix);
});

