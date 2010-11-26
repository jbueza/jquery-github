(function( $ ) {
  $.fn.github = function( config, callback ) {
    if (typeof(config) == 'undefined' || !config['user']) {
      throw new Error("'config' object is missing.");
    }
    
    if (typeof(callback) == 'undefined' || !$.isFunction( callback )) {
      throw new Error("'callback' is missing or is not a function.");
    }
    
    if( typeof(config.limit) == 'undefined') config.limit = 10;
    
    var url = "https://github.com/" + config['user']+ ".json?callback=?";
    
    $.getJSON( url, function( data ){
      
      data.length = config.limit;
      
      if( $.isFunction( callback ) ) {
        callback.call( this, data );
      }
    });
  };
})( jQuery );