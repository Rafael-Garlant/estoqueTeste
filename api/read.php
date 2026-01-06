<?php

include 'config.php';
header('Content-Type: application/json');

try{
  $sql = "SELECT * FROM produtos ORDER BY id DESC";
  $stmt = $pdo->prepare($sql);
  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($result);

} catch(PDOException $e){
  echo json_encode(['error' => $e->getMessage()]);
}
// No closing PHP tag to prevent accidental output