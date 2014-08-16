
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

var token = $.Deferred(),
      posts = $.Deferred();

if(localStorage.getItem('tokenWbazie')){

   token.resolve(localStorage.getItem('tokenWbazie'));

}else{
      token = $.get(adres);
}

token.then(function(jakisToken){
 
  console.log(jakisToken);

  if(jakisToken.search("=")===-1){

  }else{
    return 'dupa';
  }

});

posts.done(function(posts){
  console.log(posts);
});

