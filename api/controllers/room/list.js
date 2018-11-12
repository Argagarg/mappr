module.exports = async function list(req, res) {

    Room.find({}).exec(function(err, Room){
        if(err){
            res.send(500, {error: 'Database error'});
        }
        res.view('list', {Room: Room});
    });
}


