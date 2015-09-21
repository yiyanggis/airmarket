<?php

header("content-type:application/json");

//var_dump($_POST);

$north=$_POST["north"];
$south=$_POST["south"];
$east=$_POST["east"];
$west=$_POST["west"];
//$radius=$_POST["radius"];

$url="http://www.zuluforpilots.com/AreaApi/GetAreaOverview?north=".$north."&east=".$east."&south=".$south."&west=".$west."&zoomLevel=1";

$data_to_post = array();

// Initialize cURL
$curl = curl_init();

// Set the options
curl_setopt($curl,CURLOPT_URL, $url);

curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

//execute the post
$result = curl_exec($curl);

//echo "finish curl request\n";

//echo gettype($result)."\n";

//echo $result->listings;

$result_records=json_decode($result);



curl_close($curl);

//print_r($result);
echo $result;

?>