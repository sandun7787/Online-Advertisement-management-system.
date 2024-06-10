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
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seller` (
  `sellerId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contact` varchar(45) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`sellerId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES (1,'Johnathan Doe','john.doe@example.com','$2a$10$PpIWsYlcnj0DzDSjsi.8zuzIpBXhqAFyIwzWvPHPph3YJu5GSJCN6','0987654321','2024-06-03 11:15:24','2024-06-03 11:15:24'),(2,'devika karunathilaka','Devika@gmail.com','$2a$10$NEkA7yzip4bmTygDu0M6MesbcXSyCpNXXa1WcUh5BbF3yrdT1CBBO','0715985900','2024-06-03 14:40:23','2024-06-03 14:40:23'),(3,'John Doe1','john1.doe@example.com','$2a$10$ENTnczKqF/dyH7c1uDwhFOTIydZRFHVDUtsApA5GbM6NNBLT/Poim','1234567890','2024-06-04 04:21:45','2024-06-04 04:21:45'),(4,'devika karunathilaka','Devika2224@gmail.com','$2a$10$f5.InIlvBgbV5UrVKsYNweFgIJYO0K7oRJCZe7kofeMGhb5gFDVZS','0812422385','2024-06-04 04:21:57','2024-06-04 04:21:57'),(5,'nuwan rathnayaka','nuwan@gmail.com','$2a$10$z4jPErr2PjH4MhXOJ6Y5b.GsNE4J.Ko0mEsLT7Jy.y1.gVroiyf42','0812422385','2024-06-05 03:17:36','2024-06-05 03:17:36'),(6,'sandun warnasooriya','Sandunwarnasooriya@gmail.com','$2a$10$E1TkStDysxBURYS7sluZPesr4tA5yUhGyCN2z3T.h7oghgwWtXYre','0715985900','2024-06-05 15:30:46','2024-06-05 15:30:46'),(10,'deshan','Deshan@gmail.com','$2a$10$Rs4x3ZQmDZJYxPTYeNpXWe7NZk/tthnJZdMOs6AMplGmJM4bzoPFa','0715985900','2024-06-05 16:29:34','2024-06-05 16:29:34'),(13,'sandun','.sanudn@gmailcom','$2a$10$dRolc2uwOv.uT0upvJH5yeDVcZATAHbzp9zixbJmDyerM71p3zk4S','0812422385','2024-06-05 16:30:29','2024-06-05 16:30:29'),(14,'Niluka warnasooriya','Niluka@gmail.com','$2a$10$7o3SBaw5LuleSVvI9VjIk.7NXMrbEwmL4rjhQ4LQGuMsxV4KHxnyG','0715985900','2024-06-06 04:12:07','2024-06-06 04:12:07');
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
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
