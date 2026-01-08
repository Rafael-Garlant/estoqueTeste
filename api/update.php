<?php
include 'config.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

if(isset($data['id']) && isset($data['nome']) && isset($data['quantidade'])) {
    try {
        $sql = "UPDATE produtos SET nome = :nome, quantidade = :quantidade WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        
        $stmt->bindParam(':id', $data['id']);
        $stmt->bindParam(':nome', $data['nome']);
        $stmt->bindParam(':quantidade', $data['quantidade']);

        if($stmt->execute()) {
            echo json_encode(['message' => 'Atualizado!']);
        } else {
            echo json_encode(['message' => 'Erro ao atualizar.']);
        }
    } catch(PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['message' => 'Dados incompletos!']);
}