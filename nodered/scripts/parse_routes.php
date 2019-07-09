<?php 
$myResults = array();

$routes = preg_split('/\n/',trim(`route -v`));
$myResults['routes_RAW'] = $routes;
array_shift($routes);

if (!empty($routes)) {
    print_r($routes);
    $headerLine = array_shift($routes);
    $headers = preg_split('/[\s\t]+/',$headerLine);
    print_r($headers);
    $myResults['routes'] = array();
    print_r($headers);
    
    foreach ($routes as $line=>$routeLine) {
        if (!empty($routeLine)) {
            $vals = preg_split('/[\s\t]+/',$routeLine);
            print_r($vals);
            $myResults['routes'][] = array_combine($headers,$vals);
        }
    }
}
print json_encode($myResults,JSON_PRETTY_PRINT);
?>