-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: noticias
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `noticia`
--

DROP TABLE IF EXISTS `noticia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `noticia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `subtitulo` varchar(255) NOT NULL,
  `noticia` varchar(255) NOT NULL,
  `data` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UsuarioId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UsuarioId` (`UsuarioId`),
  CONSTRAINT `noticia_ibfk_1` FOREIGN KEY (`UsuarioId`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticia`
--

LOCK TABLES `noticia` WRITE;
/*!40000 ALTER TABLE `noticia` DISABLE KEYS */;
INSERT INTO `noticia` VALUES (3,'Como Apple se tornou exceção nas demissões em massa de gigantes da tecnologia.','A Apple é responsável por 20% das vendas mundiais de smartphones, mas detém 80% dos lucros gerados pelo seto',' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.','2023-02-03','2023-02-22 01:19:43','2023-02-22 06:45:50',1),(4,'Microsoft limita uso do Bing com ChatGPT após reclamações.','A medida foi anunciada depois de inúmeros relatos de comportamentos inadequados ','','2023-02-03','2023-02-22 01:31:39','2023-02-22 08:11:12',1),(5,'É muito provável que a internet pare em algum momento e tudo deixe de funcionar\'','\"Erro 404\"',' \"Erro 404\": esta é a mensagem que vemos na tela quando um aparelho é incapaz de se conectar a um website, seja porque ele desapareceu do servidor ou porque o link está errado.','2023-02-04','2023-02-22 05:52:20','2023-02-22 06:51:30',1),(6,'Como descobrir se vivemos em uma simulação de computador.','Conheça teoria que sugere que realidade à nossa volta é composta de bits de informação.','All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of ','2023-02-08','2023-02-22 06:58:48','2023-02-22 06:58:48',2),(7,'A tecnologia usada no filme Avatar que vai revolucionar diagnóstico de doenças','Trajes de captura de movimento que dão vida aos personagens do filme Avatar estão ajudando pesquisadores a rastrear o início de doenças que afetam a mobilidade.','O novo sistema usa inteligência artificial para analisar os movimentos do corpo.\r\nEm muitos casos, quanto mais rápido essas condições forem diagnosticadas, melhores serão as condições para receber o suporte e o tratamento adequados.','2023-02-08','2023-02-22 06:58:48','2023-02-22 07:07:00',2),(8,'Lorem Ipsum','Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis rhoncus nunc, eu mollis felis. Fusce pretium fringilla augue, eu gravida purus facilisis vitae. Etiam eget rhoncus tortor.','2023-02-22','2023-02-22 08:07:12','2023-02-22 08:07:12',3);
/*!40000 ALTER TABLE `noticia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-22  5:41:54
