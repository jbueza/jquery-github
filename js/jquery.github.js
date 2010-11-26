(function( $ ) {
  $.fn.github = function( config, callback ) {
    if (typeof(config) == 'undefined' || !config['user']) {
      throw new Error("'config' object is missing.");
    }
    
    if (typeof(callback) == 'undefined' || !$.isFunction( callback )) {
      throw new Error("'callback' is missing or is not a function.");
    }
    
    var url = "http://twitter.com/status/user_timeline/"
      + username + ".json?count="+numPosts+"&callback=?";

    $.getJSON( url, function( data ){
      if( $.isFunction( fnk ) ) {
        fnk.call( this, data );
      }
    });
  };
})( jQuery );