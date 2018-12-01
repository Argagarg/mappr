module.exports = async function list(req, res) {
  var query = {};
    if(req.param('roomname')){
      query = { roomname: req.param('roomname')};
    }
    


  /*
  if(!req.body.hasOwnProperty(roomname)){
    
  }else{
    var query = { roomname: req.body.roomname};
  }*/
    Room.find(query).exec(function (err, Room) {
      if (err) {
        res.send(500, {
          error: 'Database error'
        });
      }
      Room.forEach(element => {
        element.createdAt = new Date(parseInt(element.id.substring(0, 8), 16) * 1000).toDateString();
      });
      return res.view('list', {
        Room: Room,
        layout: 'layouts/layout'
      });
    });
  }
  