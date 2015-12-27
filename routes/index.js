// usage: route.pages("index")

exports.pages = function( view ) {
  return function( req, res ) {
    res.render( view + ".html" );
  };
}; 