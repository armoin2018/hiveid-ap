<?php
    $jobs = `atq`;
    $jobList= preg_split('/\n/',$jobs);
    $myResults = {};
    if (count($jobList) > 0 ) { 
        for ($i=0;$i < count($jobList);$i++) {
            $jobLine = preg_split('/\s+/',$jobList[$i]);
            if (is_numeric($jobLine[0])) {
                $jobID = $jobLine[0];
                $cmd = `at -c $jobID | tail -n-2`;
                $cmdList = preg_split('/\n/',$cmd);
                $myResults[$jobID] = array($jobList[$i],$cmdList[0]);
            }
        }
    } 
    echo json_encode($myResults,JSON_PRETTY_PRINT);
?>