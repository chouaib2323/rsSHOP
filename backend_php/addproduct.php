<?php
require 'connection.php';

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method: POST,GET');

if(isset($_POST["submit"])){
  $name = $_POST["name"];
  $category= $_POST['category'];
  if($_FILES["image"]["error"] == 4){
    echo
    "<script> alert('Image Does Not Exist'); </script>"
    ;
  }
  else{
    $fileName = $_FILES["image"]["name"];
    $fileSize = $_FILES["image"]["size"];
    $tmpName = $_FILES["image"]["tmp_name"];
    $price= $_POST['prix'];
    $validImageExtension = ['jpg', 'jpeg', 'png'];
    $imageExtension = explode('.', $fileName);
    $imageExtension = strtolower(end($imageExtension));
    if ( !in_array($imageExtension, $validImageExtension) ){
      echo
      "
      <script>
        alert('Invalid Image Extension');
      </script>
      ";
    }
    else if($fileSize > 10000000){
      echo
      "
      <script>
        alert('Image Size Is Too Large');
      </script>
      ";
    }
    else{
      $newImageName = uniqid();
      $newImageName .= '.' . $imageExtension;

      move_uploaded_file($tmpName, 'img/' . $newImageName);
      $query = "INSERT INTO products VALUES('', '$name','$price', '$newImageName','$category')";
      mysqli_query($conn, $query);
      echo
      "
      <script>
        alert('Successfully Added');
        document.location.href = 'data.php';
      </script>
      ";
   
    }
  }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Upload Image File</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
    form {
      max-width: 500px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input[type="text"],
    input[type="file"],
    select,
    button[type="submit"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }
    input[type="file"] {
      cursor: pointer;
    }
    button[type="submit"] {
      background-color: #4CAF50;
      color: #fff;
      cursor: pointer;
    }
    button[type="submit"]:hover {
      background-color: #45a049;
    }
    .gg{
display:flex;
justify-content: center;
    }
    a {
      display: block;
      margin-top: 10px;
      text-align: center;
      text-decoration: none;
      color: #666;
    }
    a:hover {
      color: #333;
    }
  </style>
</head>
<body>
  <div class="gg"><h1>Ajouter un produit</h1></div>
  <form action="" method="post" autocomplete="off" enctype="multipart/form-data">
    <label for="name">Nom :</label>
    <input type="text" name="name" id="name" required> <br>
    <label for="prix">Prix :</label>
    <input type="text" name="prix" id="prix" required> <br>
    <label for="category">Category :</label>
    <select name="category" id="category" required>
      <option value="" disabled selected>Choose category</option>
      <option value="hdd">HDD</option>
      <option value="gpu">GPU</option>
      <option value="cpu">CPU</option>
      <option value="motherboard">Motherboard</option>
      <option value="case">Case</option>
      <option value="ram">RAM</option>
      <option value="cooling">Cooling</option>
      <option value="powersupply">Power Supply</option>
      <option value="monitor">Monitor</option>
      <option value="laptop">Laptop</option>
      <option value="printer">Printer</option>
      <option value="keyboard">Keyboard</option>
      <option value="mouse">Mouse</option>
      <option value="controller">Controller</option>
      <option value="pad">Pad</option>
      <option value="headset">head set</option>
      <option value="speaker">speaker</option>
      <option style='font-weight: bold' value="">other</option>
    </select>
    <br>
    <label for="image">Image :</label>
    <input type="file" name="image" id="image" accept=".jpg, .jpeg, .png" required> <br> <br>
    <button type="submit" name="submit">Submit</button>
  </form>
  <a href="allproducts.php">back to products list</a>
</body>
</html>
