<?php
include 'config.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if(isset($data['nome']) && isset($data['quantidade'])){

  $nome = $data['nome'];
  $quantidade = $data['quantidade'];

  try{
    $sql = "INSERT INTO produtos (nome, quantidade) VALUES (:nome, :quantidade)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':quantidade', $quantidade);

    if($stmt->execute()){
      echo json_encode(['message' => 'Produto criado com sucesso']);
    } else {
      echo json_encode(['message' => 'Erro ao criar produto']);
    }


  } catch (PDOException $e){
    echo json_encode(['error' => $e->getMessage()]);
  }
} else {
  echo json_encode(['message' => 'Dados incompletos']);
}