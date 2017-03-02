<?php session_start(); ?>
<DOCTYPE html>
<html lang="en">
    <head>
        <title>Team App</title>
        <meta charset="UTF-8">
		<meta name="description" content="Hyperloop Pod Competition Team Application">
		<meta name="author" content="Badgerloop Software Team">
		<meta name="keywords" content="BadgerLoop, Wisconsin, Madison, Badgers, Hyperloop, SpaceX, Tesla, Elon Musk, Train"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- favicons -->
		<link rel="favicon" href="../im/favicons/32x32.png">
		<link rel="shortcut icon" href="../im/favicons/32x32.png">
		<link rel="apple-touch-icon" sizes="72x72" href="../im/favicons/72x72.png">
		<link rel="apple-touch-icon" sizes="114x114" href="../im/favicons/114x114.png">

    </head>
    <body>
	<?php 
	    //echo file_get_contents("php://input"), true);
	    echo "Hello ".$_SERVER['uid']." [".$_SERVER['eppn']."]!<br><br>";
	?>
    </body>
</html>
