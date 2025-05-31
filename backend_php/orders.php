<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Orders Panel</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
  .user-list, .order-list {
    width: 80%;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  .user-list a {
    display: block;
    padding: 10px;
    margin: 5px 0;
    text-decoration: none;
    color: #666;
    background-color: #f2f2f2;
    border-radius: 4px;
  }
  .user-list a:hover {
    color: #333;
    background-color: #e0e0e0;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
  }
  h1 {
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

<h1>Orders Panel</h1>

<div class="user-list">
  <h2>Users</h2>
  <?php
    require 'connection.php';

    // Fetch unique users
    $userQuery = "SELECT DISTINCT nomcl FROM commandes";
    $userResult = mysqli_query($conn, $userQuery);

    while ($userRow = mysqli_fetch_assoc($userResult)) {
      echo "<a href='#' class='user-link' data-user='".htmlspecialchars($userRow['nomcl'], ENT_QUOTES)."'>".$userRow['nomcl']."</a>";
    }
  ?>
</div>

<div class="order-list" id="order-list">
  <h2>Orders</h2>
  <table id="orders-table" style="display:none;">
    <thead>
      <tr>
        <th>Address</th>
        <th>Numéro Telephone</th>
        <th>Nom Produit</th>
        <th>Prix Produit</th>
        <th>Quantité Produit</th>
        <th>Paiment</th>
        <th>wilaya</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody id="orders-body">
      <!-- Orders will be dynamically added here -->
    </tbody>
  </table>
</div>

<a href='allproducts.php'>Back to Products List</a>

<script>
  document.querySelectorAll('.user-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const userName = this.dataset.user;

      fetch(`fetch_orders.php?user=${encodeURIComponent(userName)}`)
        .then(response => response.json())
        .then(orders => {
          const ordersTable = document.getElementById('orders-table');
          const ordersBody = document.getElementById('orders-body');
          
          ordersBody.innerHTML = '';
          
          orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${order.address_clt}</td>
              <td>${order.phone}</td>
              <td>${order.nomprd}</td>
              <td>${order.prix}</td>
              <td>${order.qnt}</td>
              <td>${order.paiment}</td>
              <td>${order.wilaya}</td>
              <td><a href='deletecom.php?id=${order.id}'>Delete</a></td>
            `;
            ordersBody.appendChild(row);
          });

          ordersTable.style.display = 'table';
        });
    });
  });
</script>

</body>
</html>
