var path = require('path')
var fs = require('fs')

var streamvid = function(req,res,file){
  console.log("streaming file"+file)
  fs.stat(file,function(err,stats){
    if(err){
      console.log("file not found or access denied...")
      return
    }
    var range = req.headers.range
    if(!range){
      console.log("range not specified...")
      start=0
      var file_size = stats.size
      var end =  file_size - 1
      var chunksize = 1048576
    }else{
      var positions = range.replace(/bytes=/, '').split('-')
      var start = parseInt(positions[0], 10)
      var file_size = stats.size
      var end = file_size - 1
      var chunksize = (end - start) + 1
    }


    console.log(chunksize)
    var head = {
			'Content-Range': 'bytes ' + start + '-' + end + '/' + file_size,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunksize,
			'Content-Type': 'video/mp4'
    }
    res.writeHead(206, head);
    var stream_position = {
			start: start,
			end: end
    }

    var stream = fs.createReadStream(file, stream_position)

    stream.on('open', function() {
			stream.pipe(res);
    })
    stream.on('error', function(err) {
			return next(err);
    });
  })
}

module.exports= {streamvid}
