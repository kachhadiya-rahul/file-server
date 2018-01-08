//required modules
var express = require('express')
  , app = module.exports = express()
var fs= require('fs')
var url = require('url')
var path = require('path')
var formalizer = require('./lib/formalizer.js')
var os = require('os')
var bodyparser = require('body-parser')
var async = require('async')
var vidstream = require('./lib/vidstream.js')

app.use('/static',express.static('images'))
app.use(bodyparser.urlencoded({extended:false})) //for some reason now express does not ship bodyparser inbuilt


app.get('/',function(req,res){
  fs.ReadStream("./test/home.html").pipe(res)
})

app.get('*/playvidvideo/*',function(req,res){
  var platform = os.platform();
  if(platform=="linux"){
      var home = process.argv[2] || "/home/" ;
  }else if (platform=="win32") {
    var home = process.argv[2] || "C:/" ;
  }
  var urlParts = url.parse(req.url,true);
  var urlPath = urlParts.pathname;
  var file = req.params.file
    , path1 = home+urlPath.replace(/%20/g,' ').replace("/playvidvideo","");
  vidstream.streamvid(req,res,path1)
})


app.post('/*',function(req,res){
  //platform check
  var platform = os.platform();
  if(platform=="linux"){
      var home = process.argv[2] || "/home/" ;
  }else if (platform=="win32") {
    var home = process.argv[2] || "C:/" ;
  }

  //file or folder is requested
  var fof = req.body.fof
  if(fof == "file"){
    var urlParts = url.parse(req.url,true);
    var urlPath = urlParts.pathname;
    var file = req.params.file
      , path = home+urlPath.replace(/%20/g,' ');
    res.download(path);
  }else if(fof == "folder"){
    var data = formalizer.addHeader(req.hostname)
    var pos=0
    var files=[],folders=[];
    var urlParts = url.parse(req.url,true);
    var urlPath = urlParts.pathname;
    //collecting elements of the folder
    fs.readdir(home + urlPath.replace(/%20/g,' '), function(err, items) {
      async.waterfall([function(callback){
        var func = function(j){
          //if(items[i].indexOf("WindowsApps")==-1 && items[i].indexOf("RECYCLE")==-1 && items[i].indexOf("System")==-1 && items[i].indexOf("Config") == -1)
          fs.stat(home+ urlPath.replace(/%20/g,' ') + items[i].replace(/%20/g,' '), function (err, stats) {

            if (err) {
              console.log(items[j]+"has some access right issue...");
              console.log(err)
            }
            else {
              if(stats.isDirectory()){
                //console.log(items[j] + " is  directory");
                folders.push(items[j].replace(/%20/g,' '));
              }
              else if(stats.isFile()){
                files.push(items[j].replace(/%20/g,' '));
              }
              else {
                console.log(items[j] + " is not a file or directory");
              }
            }
          });
        }
        if(items.length == 0){
        	data +="The directory is empty...</body></html>"
          res.send(data);
        }else{
          for (var i=0; i<items.length; i++) {
            func(i);
          }
          setTimeout(function(){
            callback(null)
          },200)

        }
        //console.log("hello")
      },function(callback){

        folders.sort();
      	files.sort();
        //console.log(files+folders)
      	for(var index=0;index<folders.length;index++){
      		data += formalizer.addFolder(folders[index],pos%4);
          pos++;
      	}
      	for(var index=0;index<files.length;index++){
      		data += formalizer.addFile(files[index],pos%4);
          pos++;
      	}
      	data +="<div></body></html>";
        //console.log(data)
        //console.log("world")
        callback(null)
      },function(){
        res.send(data)
        //console.log("data sent")
      }],function(err,success){
        if(err) console.log("something went wrong")
        else console.log(done)
      })
      //console.log("next to waterfall")
    })
  }

})

app.listen(8000)
console.log("Server is at : 8000")
