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
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `imageId` int NOT NULL AUTO_INCREMENT,
  `imageUrl` varchar(255) NOT NULL,
  `adId` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`imageId`),
  KEY `adId` (`adId`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`adId`) REFERENCES `advertisement` (`addId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'url1',4,'2024-06-03 14:44:40','2024-06-03 14:44:40'),(2,'url2',4,'2024-06-03 14:44:40','2024-06-03 14:44:40'),(3,'url1',5,'2024-06-03 14:46:03','2024-06-03 14:46:03'),(4,'url2',5,'2024-06-03 14:46:03','2024-06-03 14:46:03'),(7,'https://pixabay.com/',6,'2024-06-04 04:30:41','2024-06-04 04:30:41'),(8,'https://www.pexels.com/',6,'2024-06-04 04:30:41','2024-06-04 04:30:41'),(9,'https://pixabay.com/',7,'2024-06-04 04:30:58','2024-06-04 04:30:58'),(10,'https://www.pexels.com/',7,'2024-06-04 04:30:58','2024-06-04 04:30:58'),(11,'https://www.pexels.com/',7,'2024-06-04 04:30:58','2024-06-04 04:30:58'),(12,'https://pixabay.com/',8,'2024-06-04 05:31:00','2024-06-04 05:31:00'),(13,'https://www.pexels.com/',8,'2024-06-04 05:31:00','2024-06-04 05:31:00'),(14,'https://www.pexels.com/',8,'2024-06-04 05:31:00','2024-06-04 05:31:00'),(17,'updated_url1',2,'2024-06-04 05:38:10','2024-06-04 05:38:10'),(18,'updated_url2',2,'2024-06-04 05:38:10','2024-06-04 05:38:10'),(24,'updated_url1',3,'2024-06-04 05:39:19','2024-06-04 05:39:19'),(25,'updated_url2',3,'2024-06-04 05:39:19','2024-06-04 05:39:19'),(30,'url1',10,'2024-06-05 15:35:53','2024-06-05 15:35:53'),(31,'url2',10,'2024-06-05 15:35:53','2024-06-05 15:35:53'),(32,'url1',11,'2024-06-05 16:38:16','2024-06-05 16:38:16'),(33,'url2',11,'2024-06-05 16:38:16','2024-06-05 16:38:16'),(34,'1708865381699.jfif',12,'2024-06-06 04:17:05','2024-06-06 04:17:05'),(35,'ER Diagram for Online Advertisement management system.drawio (1).png',12,'2024-06-06 04:17:05','2024-06-06 04:17:05');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-06 10:13:29
