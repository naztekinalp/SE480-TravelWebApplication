<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="icon" href="images/cockatiel.png">
  <link rel="icon" href="images/cockatiel.png">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="javascript/slide.js"></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!--Link with CSS-->
  <link rel="stylesheet" type="text/css" href="../css/rentCar.css">
  <title>MIGBIRD</title>
</head>
<!--BODY-->
<body>
  <!--HEADER-->
  <div id="banner">
    <!--LOGO-->
    <a href="../index.html">
     <img src="../images/sitelogo.jpg" alt="logo">
    </a>
    <!--MENU-->
    <ul id="menu">
      <li><a href="../exchange/exchange.html">Exchange Tools</a></li>
      <li><a href="tickets.html">Rent A Car Prices</a></li>
      <li><a href="../attractions/index.php">Attractions</a></li>
      <li><a href="../contact/contact.php">Contact</a></li>
    </ul>
  </div>
  <h1>Rent A Car Price List</h1>
  <!--Rent a car Table Style--->
  <style>
    table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 30%;
}

td, th {
  border: 1px solid #dddddd;
  text-align:left;
  padding: 8px;
}

tr{
  border: 1px solid #dddddd;
  text-align:left;
  padding: 8px;
}

  </style>

  <!--Rent a car Table PHP--->

<?php 

$html = file_get_contents('https://www.sahibinden.com/kiralik-araclar'); //get the html returned from the following url

$car_doc = new DOMDocument();


libxml_use_internal_errors(TRUE); //disable libxml errors

if(!empty($html)){ //if any html is actually returned

  $car_doc->loadHTML($html);
  libxml_clear_errors(); //remove errors for yucky html
  
  $car_xpath = new DOMXPath($car_doc);
  $location_xpath = new DOMXPath($car_doc);
  $date_xpath = new DOMXPath($car_doc);
  

  //get all the ts's with an div.searchResultsPriceValue
  $car_row = $car_xpath->query('//td[@class="searchResultsPriceValue"]');
  $location_row = $location_xpath->query('//td[@class="searchResultsLocationValue"]');
  $date_row = $date_xpath->query('//td[@class="searchResultsDateValue"]');


    //print infos with tables
    foreach($location_row as $location){

      foreach ($car_row as $price) {

        foreach ($date_row as $date) {

          echo "<table><td>$location->nodeValue</td><td>$price->nodeValue</td><td>$date->nodeValue</td></table>";
        } 
      } 
    }  
  }

?>
  <!--FOOTER-->
  <div class="footer"></div>
</body>

</html>
