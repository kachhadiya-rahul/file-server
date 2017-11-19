
var express = require('express')
  , app = module.exports = express();
var fs= require('fs');
var url = require('url');
var path = require('path');
var formalizer = require('./lib/formalizer.js');


//this geneate the directory listing if the target url is for directory
app.get('/*//', function(req, res){
      //console.log(home);
      var home = process.argv[2] || "F:" ;
      var data = formalizer.addHeader(req.hostname);
      var pos=0;
      var files=[],folders=[];
      var urlParts = url.parse(req.url,true);
      var urlPath = urlParts.pathname;
      fs.readdir(home + urlPath.replace(/%20/g,' '), function(err, items) {
        var func = function(j){
          if(items[i].indexOf("WindowsApps")==-1 && items[i].indexOf("RECYCLE")==-1 && items[i].indexOf("System")==-1 && items[i].indexOf("Config") == -1)
          fs.stat(home+ urlPath.replace(/%20/g,' ') + items[i].replace(/%20/g,' '), function (err, stats) {
            
            if (err) {
              console.log(err);
              process.exit(1);
            }
            else {
            	//console.log(stats);
              if(stats.isDirectory()){
                //console.log(items[j] + " is  directory");
                folders.push(items[j].replace(/%20/g,' '));
                
              }
              else if(stats.isFile()){
                //console.log(items[j] + " is  file ");
                files.push(items[j].replace(/%20/g,' '));
              }
              else {
                console.log(items[j] + " is not a file or directory");
              }
              
              
            }
          });
      		if(j>=items.length-1 || items.length == 0 ){
	            setTimeout(function(){
	            	folders.sort();
	            	files.sort();
	            	for(var index=0;index<folders.length;index++){
	            		data += formalizer.addFolder(folders[index],pos%4);
	            		pos++;
	            	}
	            	for(var index=0;index<files.length;index++){
	            		data += formalizer.addFile(files[index],pos%4);
	            		pos++;
	            	}
	            	data +="<div></body></html>";
	              res.send(data);
	            },200);
	        }
        }

        if(err){
          console.log(err);
        }
        if(items.length == 0){
        	data +="The directory is empty...</body></html>"
            res.send(data);
        }
        for (var i=0; i<items.length; i++) {
          func(i);
        }
        
      });
});

//serves file ti client of sny kind
app.get('/*\.*/', function(req, res, next){
  var home = process.argv[2] || "F:" ;
  var urlParts = url.parse(req.url,true);
  var urlPath = urlParts.pathname;
  var file = req.params.file
    , path = home+urlPath.replace(/%20/g,' ');
    //console.log(urlPath);
  if(urlPath.endsWith("folder2.png")){
    fs.readFile('./images/icons/folder2.png', function (err, data) {
    if (err) throw err;
      res.write(data);
      res.end()
    });
  }else if(urlPath.endsWith("download.jpg")){
    fs.readFile('./images/icons/download.jpg', function (err, data) {
    if (err) throw err;
      res.write(data);
      res.end()
    });
  }else{
    res.download(path);
    //console.log("file requested...");
  }

  
});


app.use(function(err, req, res, next){
 
  if (404 == err.status) {
    res.statusCode = 404;
    res.send('Cant find that file, sorry!');
  } else {
    next(err);
  }
});

if (!module.parent) {
  app.listen(8000);
  console.log('Express started on port %d', 8000);
}	