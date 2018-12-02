module.exports = async function list(req, res) {
  var me = req.user.id;
  var query = {};
  query.id = me;
  User.find(query).populate('rooms').exec(function (err, User) {
    if (err) {
      res.send(500, {
        error: 'Database error'
      });
    }
    User[0].rooms.forEach(element => {
      element.createdAt = new Date(parseInt(element.id.substring(0, 8), 16) * 1000).toDateString();
    });
    return res.view('pages/account/view-uploads', {
      Room: User[0].rooms,
      layout: 'layouts/layout'
    });
  });
}
