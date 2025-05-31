<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Messages from Clients</title>
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
  h2 {
    text-align: center;
  }
  a {
    font-size:20px;
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
<h2>Messages from Clients</h2>
<table border="1">
  <tr>
    <th>Nom Client</th>
    <th>Email</th>
    <th>Message</th>
    <th>Delete</th>
  </tr>
  <?php
    require 'connection.php';

    $requete= "SELECT * FROM contacts";
    $query= mysqli_query($conn, $requete);

    while($rows=mysqli_fetch_assoc($query)){
      $id=$rows['id'];

      echo "<tr>";
      echo "<td>".$rows["nom"]."</td>";
      echo "<td>".$rows['email']."</td>";
      echo "<td>".$rows['message']."</td>";
      echo "<td><a href='deletemess.php?id=".$id."'>Delete</a></td>";
      echo "</tr>";
    }
  ?>
</table>
<a href='allproducts.php'>Back to Products</a>
</body>
</html>
