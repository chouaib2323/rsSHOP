<?php
require 'connection.php';

if(isset($_POST["submit"])) {
    $id = $_POST["id"]; // Assuming you have the ID of the record to update
    $name = $_POST["name"];
    $price = $_POST['prix'];
    $category = $_POST['category'];

    // Check if a new image file was uploaded
    if(isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
        $fileName = $_FILES["image"]["name"];
        $fileSize = $_FILES["image"]["size"];
        $tmpName = $_FILES["image"]["tmp_name"];
        $validImageExtension = ['jpg', 'jpeg', 'png'];
        $imageExtension = explode('.', $fileName);
        $imageExtension = strtolower(end($imageExtension));

        // Check if the uploaded file is an image with a valid extension
        if (in_array($imageExtension, $validImageExtension) && $fileSize <= 10000000) { // 10MB limit
            // Move the uploaded file to the desired location
            $newImageName = uniqid() . '.' . $imageExtension;
            move_uploaded_file($tmpName, 'img/' . $newImageName);

            // Update the record in the database with the new image path
            $query = "UPDATE products SET nom = ?, prix = ?, category= ? image = ? WHERE id = ?";
            $stmt = $conn->prepare($query);
            $stmt->bind_param("ssssi", $name, $price,$category, $newImageName, $id);
            $stmt->execute();
            $stmt->close();

            echo "<script>alert('Record updated successfully');</script>";
        } else {
            echo "<script>alert('Invalid image file');</script>";
        }
    } else {
        // If no new image was uploaded, update the record without changing the image
        $query = "UPDATE products SET nom = ?, prix = ?,category= ? WHERE id = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sssi", $name, $price,$category, $id);
        $stmt->execute();
        $stmt->close();

        echo "<script>alert('Record updated successfully');</script>";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Update Product</title>
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
<div class="gg"><h1>Update a product</h1></div>
<h3 class="gg">you can update a product with keping the same image</h3>
    <form action="" method="post" autocomplete="off" enctype="multipart/form-data">
        <input type="hidden" name="id" value="<?php echo $_GET['id'] ?>"> <!-- Assuming you pass the ID via URL parameter -->
        <label for="name">Nom:</label>
        <input type="text" name="name" id="name" required value="">
        <label for="prix">Prix:</label>
        <input type="text" name="prix" id="prix" required value="">
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
        <label for="image">Image:</label>
        <input type="file" name="image" id="image" accept=".jpg, .jpeg, .png">
        <button type="submit" name="submit">Submit</button>
    </form>
    <a href="allproducts.php">Les Produits</a>
</body>
</html>
