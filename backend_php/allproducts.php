<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Panel</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
  }
  h1, h2 {
    text-align: center;
  }
  a {
    font-size:18px;
    padding-left:5px;
    padding-bottom:50px;
    text-decoration: none;
    color: green;
  }
  a:hover {
    color: black;
  }
</style>
</head>

<body> 

<h1>Admin Panel</h1>
<h2>Our Available Products:</h2>
<table border="1">
  <tr>
    <th>Nom Produit</th>
    <th>Prix Produit</th>
    <th>catégorie</th>
    <th>Src Image</th>
    <th>Delete</th>
    <th>Update</th>
  </tr>
  <?php
    require 'connection.php';

    $requete= "SELECT * FROM products";
    $query= mysqli_query($conn, $requete);

    while($rows=mysqli_fetch_assoc($query)){
      $id=$rows['id'];

      echo "<tr>";
      echo "<td>".$rows["nom"]."</td>";
      echo "<td>".$rows['prix']."</td>";
      echo "<td>".$rows['category']."</td>";
      echo "<td>".$rows['image']."</td>";
      echo "<td><a href='delete.php?id=".$id."'>Delete</a></td>";
      echo "<td><a href='edit.php?id=".$id."'>Update</a></td>";
      echo "</tr>";
    }
  ?>
</table>
<a href='addproduct.php'>Add a Product</a><br/>
<a href='orders.php'>Order List</a><br/>
<a href='messdecl.php'>Les messages de client</a><br/>
<a href='users.php'>users</a>
</body>
</html>
