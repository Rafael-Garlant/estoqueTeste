<?php
include 'config.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if(isset($data['id'])){
  $id = $data['id'];

  try {
    $sql = "DELETE FROM produtos WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);

    if($stmt->execute()) {
        echo json_encode(['message' => 'Produto deletado!']);
    } else {
        echo json_encode(['message' => 'Erro ao deletar.']);
    }

  } catch (PDOException $e) {
     echo json_encode(['error' => $e->getMessage()]);
  }
} else {
    echo json_encode(['message' => 'ID não fornecido!']);
}