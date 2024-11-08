var content = document.getElementById('content').innerHTML;
var template = ' \
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
<html> \
<head> \
<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
<meta charset="utf-8"> \
<link rel="shortcut icon" href=""> \
<meta name="robots" content="index,follow"> \
<!-- 新 Bootstrap 核心 CSS 文件 --> <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> <!-- jQuery文件。务必在bootstrap.min.js 之前引入 --> <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script> <!-- 最新的 Bootstrap 核心 JavaScript 文件 --> <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script> \
<!--<meta http-equiv="cache-control" content="no-cache">--> \
<title>hw-1 repo for Xinam1ne</title> \
</head> \
<body> \
 \
 <div class="container">\
	<h1>hw-1 repo for Xinam1ne</h1>\
</div>\
 \
<div class="container">\
<div> \
' + content + '\
</div> \
</div> \
';
document.documentElement.innerHTML = template;
