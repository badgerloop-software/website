<DOCTYPE html>
<html lang="en">
<head><title>Badgerloop</title></head>
<body>
<!--
  author: Vaughn Kottler
  
  if you're seeing this you're not seeing the PHP code that executes when a request is made to this page.
-->
<?php

echo "<h1>Badgerloop Webhooks</h1>";

function log_to_file($logfile, $message) {
    $log_cmd = "printf \"".$message."\n\" >> php_log/".$logfile;
    shell_exec($log_cmd);
}

// Log who makes a request to webhook.php
log_to_file("visits.log", "visited by ".$_SERVER['REMOTE_ADDR']." on $(date) [".$_SERVER['REQUEST_METHOD']."]");

// Parse input, unfortunately PHP isn't populating $_POST. This is the only way.
// [https://developer.github.com/v3/activity/events/types/#pushevent]
$response = json_decode(file_get_contents("php://input"), true);


if (isset($response['ref'])) {     

    // see which branch was pushed
    $branch = substr($response['ref'], strrpos($response['ref'], '/') + 1);

    // see who pushed
    $user = $response['pusher']['name']." [".$response['pusher']['email']."]";

    $num_commits = sizeof($response['commits']);

    // keep a log of this information
    $push_log = $branch." pushed by ".$user." on $(date) [".$num_commits." commit(s)]\n";
    foreach($response['commits'] as $commit) {
        $push_log .= "  ".$commit['message']." -".$commit['committer']['name']." [".$commit['committer']['email']."]\n";
        $push_log .= "    Modified: ";
        foreach($commit['modified'] as $file) $push_log .= $file.", ";
        $push_log .= "\n";
    }
    $push_log .= "------------------------------------------------------------------------------------------------";
    log_to_file("pushes.log", $push_log);

    // if someone pushed master, run a pull
    if (strpos($response['ref'], 'master') !== false) {
	echo "<p>Pulling . . .<br>".shell_exec("git pull origin master")."<br></p>";
    }
    echo "<p>Logged to pushes.log: ".$push_log."<br></p>";
}

echo "<p>Everything executed properly.</p>";

?>
</body>
</html>
