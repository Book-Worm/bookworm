module.exports = {
  get: function( req, res){
    console.log('in succsees!!!!!!!!!!!!!!')
    console.log(res);
    res.cookie('status', JSON.stringify('true'));
    res.redirect('/browse');
  },
  post: function(req, res) {
    res.redirect('/');
  },
  put: function(req, res) {
    res.redirect('/');
  },
  delete: function(req, res) {
    res.redirect('/');
  }
};