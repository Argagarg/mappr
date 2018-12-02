module.exports = async function list(req, res) {
  var query = {};
    if(req.param('roomname')) query.roomname=req.param('roomname');
    if(req.param('authorname')) query.roomname=req.param('authorname');
    if(req.param('tags')){
      var inputtags = req.param('tags').split(",");
      query.or = [];
      inputtags.forEach(element => {
        var temp = {};
        temp.tags = {};
        temp.tags.contains = element;
        query.or.push(temp);
      });

    }
    if(req.param('unitmatch')===1) query.dimt=req.param('widthunits');
    if(req.param('scaling')===0) {
      if(req.param('minwidth') && !req.param('maxwidth')){
        query.dimx= { '>=': req.param('minwidth') };
      }else if(!req.param('minwidth') && req.param('maxwidth')){
        query.dimx= { '<=': req.param('maxwidth') };
      }else if(req.param('minwidth') && req.param('maxwidth')){
        query.dimx= { '>=': req.param('minwidth'), '<=': req.param('maxwidth') }
      }
      if(req.param('minheight') && !req.param('maxheight')){
        query.dimy= { '>=': req.param('minheight') };
      }else if(!req.param('minheight') && req.param('maxheight')){
        query.dimy= { '<=': req.param('maxheight') };
      }else if(req.param('minheight') && req.param('maxheight')){
        query.dimy= { '>=': req.param('minheight'), '<=': req.param('maxheight') }
      }
    } else{

    }
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
  