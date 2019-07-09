<?php 
$myResults = array();

$routes = preg_split('/\n/',trim(`route -v`));
$myResults['routes_RAW'] = $routes;
array_shift($routes);
if (!empty($routes)) {
    $headerLine = array_shift($routes);
    $headers = preg_split('/[\s\t]/',$headerLine);
    $myResults['routes'] = array();
    foreach ($routes as $line=>$routeLine) {
        if (!empty($routeLine)) {
            $myResults['routes'][] = array_combine($headers,preg_split('/[\s\t]/',$routeLine));
        }
    }
}
print json_encode($myResults,JSON_PRETTY_PRINT);
?>