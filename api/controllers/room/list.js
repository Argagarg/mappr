module.exports = async function list(req, res) {

    Room.find({}).exec(function(err, Room){
        if(err){
            res.send(500, {error: 'Database error'});
        }
        Room.forEach(element => {
            element.createdAt = new Date(parseInt(element.id.substring(0, 8), 16) * 1000).toDateString();
        });
        res.view('list', {Room: Room});
    });
}


