var ip = require('ip')

function addFolder(folderName,pos){
	var data;
	if(pos==0){
		data = `<div class="row">
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="/static/icons/folder2.png" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h5 class="media-heading">`+folderName+`</h5>
							<form action="`+  folderName +`/" method="post">
								<input type="hidden" value="folder" name="fof" >
								<input type="submit" class="btn btn-info btn-xs" value="open">
							</form>

						</div>
					</div>
				</div>`;
	}else if(pos==3){
		data = `
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="/static/icons/folder2.png" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h5 class="media-heading">`+folderName+`</h5>
							<form action="`+  folderName +`/" method="post">
								<input type="hidden" value="folder" name="fof" >
								<input type="submit" class="btn btn-info btn-xs" value="open">
							</form>
						</div>
					</div>
				</div></div>`;
	}else{
		data = `
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="/static/icons/folder2.png" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h5 class="media-heading">`+folderName+`</h5>
							<form action="`+  folderName +`/" method="post">
								<input type="hidden" value="folder" name="fof" >
								<input type="submit" class="btn btn-info btn-xs" value="open">
							</form>
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
							<img src="/static/icons/file2.png" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h5 class="media-heading">`+fileName+`</h5>
							<form action="`+  fileName +`" method="post">
								<input type="hidden" value="file" name="fof" >
								<input type="submit" class="btn btn-success btn-xs" value="Download">
							</form>
						</div>
					</div>
				</div>`;
	}else if(pos==3){
		data = `
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="/static/icons/file2.png" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h5 class="media-heading">`+fileName+`</h5>
							<form action="`+  fileName +`" method="post">
								<input type="hidden" value="file" name="fof" >
								<input type="submit" class="btn btn-success btn-xs" value="Download">
							</form>
						</div>
					</div>
				</div></div>`;
	}else{
		data = `
				<div class="col-sm-3">
					<div class="media">
						<div class="media-left">
							<img src="/static/icons/file2.png" class="img-rounded" height="50" width="50">
						</div>
						<div class="media-body">
							<h5 class="media-heading">`+fileName+`</h5>
							<form action="`+  fileName +`" method="post">
								<input type="hidden" value="file" name="fof" >
								<input type="submit" class="btn btn-success btn-xs" value="Download">
							</form>
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
