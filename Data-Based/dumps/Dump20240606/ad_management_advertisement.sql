-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: ad_management
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `advertisement`
--

DROP TABLE IF EXISTS `advertisement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advertisement` (
  `addId` int NOT NULL AUTO_INCREMENT,
  `topic` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `telephoneNo` varchar(45) NOT NULL,
  `sellerId` int NOT NULL,
  `locationId` int NOT NULL,
  `categoryId` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`addId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisement`
--

LOCK TABLES `advertisement` WRITE;
/*!40000 ALTER TABLE `advertisement` DISABLE KEYS */;
INSERT INTO `advertisement` VALUES (2,'Updated topic','Updated description.',12000.00,'0987654321',1,1,2,'2024-06-03 11:20:25','2024-06-03 11:20:25'),(3,'Updated topic5','Updated description5.',12000.00,'098765432187',1,4,7,'2024-06-03 11:21:29','2024-06-03 11:21:29'),(4,'Car for sale','A used car in excellent condition.',10000.00,'1234567890',1,1,1,'2024-06-03 14:44:40','2024-06-03 14:44:40'),(5,'Car for sale','A used car in excellent condition.',10000.00,'1234567890',2,3,4,'2024-06-03 14:46:03','2024-06-03 14:46:03'),(6,'Car for sale','A used car in excellent condition.',10000.00,'1234567890',1,5,7,'2024-06-04 04:30:41','2024-06-04 04:30:41'),(7,'Car for sale','A used car in excellent condition.',10000.00,'1234567890',1,5,7,'2024-06-04 04:30:58','2024-06-04 04:30:58'),(8,'Car for sale','A used car in excellent condition.',10000.00,'1234567890',1,5,7,'2024-06-04 05:31:00','2024-06-04 05:31:00'),(10,'Car for sale','A used car in excellent condition.',10000.00,'1234567890',6,23,24,'2024-06-05 15:35:53','2024-06-05 15:35:53'),(11,'Car for sale','A used car in excellent condition.',10000.00,'1234567890',10,5,6,'2024-06-05 16:38:16','2024-06-05 16:38:16'),(12,'Car for sale','A used car in excellent condition.',10000.00,'1234567890',14,1,3,'2024-06-06 04:17:05','2024-06-06 04:17:05');
/*!40000 ALTER TABLE `advertisement` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-06 10:13:30
