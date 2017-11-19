var ip = require('ip')

function addFolder(folderName,pos){
	var data;
	if(pos==0){
		data = `<div class="row">
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="../images/icons/folder2.png" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h4 class="media-heading"><a href='`+  folderName +`/'  >`+folderName+`</a></h4>
							<p>information here.</p>
						</div>
					</div>
				</div>`;
	}else if(pos==3){
		data = `
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="../images/icons/folder2.png" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h4 class="media-heading"><a href='`+  folderName +`/'  >`+folderName+`</a></h4>
							<p>information here.</p>
						</div>
					</div>
				</div></div>`;
	}else{
		data = `
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="../images/icons/folder2.png" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h4 class="media-heading"><a href='`+  folderName +`/'  >`+folderName+`</a></h4>
							<p>information here.</p>
						</div>
					</div>
				</div>`
	}
	return data;
}

function addFile(fileName,pos){
	var data;
	if(pos==0){
		data = `<div class="row">
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="../images/icons/download.jpg" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h4 class="media-heading"><a href='`+  fileName +`''  >`+fileName+`</a></h4>
							<p>information here.</p>
						</div>
					</div>
				</div>`;
	}else if(pos==3){
		data = `
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="../images/icons/download.jpg" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h4 class="media-heading"><a href='`+  fileName +`''  >`+fileName+`</a></h4>
							<p>information here.</p>
						</div>
					</div>
				</div></div>`;
	}else{
		data = `
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="../images/icons/download.jpg" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h4 class="media-heading"><a href='`+  fileName +`''  >`+fileName+`</a></h4>
							<p>information here.</p>
						</div>
					</div>
				</div>`
	}
	//data = "<div ><img src=\"../images/icons/download.jpg\" height=\"20\" width=\"20\"\" ><a href='"+  fileName +"''  >"+fileName+"</a><br></div>";
	return data;
}

function addHeader(ipadd){
	var data = '<html><head><meta charset="utf-8">'+
		  '<meta name="viewport" content="width=device-width, initial-scale=1">'+
		  '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">'+
		  '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>'+
		  '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script></head><body><br>'+
		  
			'<div class="container-fluid">'+
			'<nav class="navbar navbar-inverse">'+
			    '<div class="navbar-header">'+
			      '<a class="navbar-brand" href="http://'+ipadd+':8000//">File Transfer</a>'+
			    '</div>'+
			    '<ul class="nav navbar-nav">'+
			      '<li class="active"><a href="#">Home</a></li>'+
			    '</ul>'+
			    '<button class="btn btn-danger navbar-btn">Button</button></nav>';
	
	return data;
}


module.exports = {addFolder, addFile,addHeader};