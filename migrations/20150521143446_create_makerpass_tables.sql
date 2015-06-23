
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'School'
-- 
-- ---

DROP TABLE IF EXISTS `School`;
    
CREATE TABLE `School` (
  `uid` VARCHAR(255) NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  `url` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`uid`)
);

-- ---
-- Table 'Groups'
-- 
-- ---

DROP TABLE IF EXISTS `Groups`;
    
CREATE TABLE `Groups` (
  `uid` VARCHAR(255) NULL AUTO_INCREMENT DEFAULT NULL,
  `school_uid` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(255) NULL DEFAULT NULL,
  `info` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`uid`)
);

-- ---
-- Table 'User'
-- 
-- ---

DROP TABLE IF EXISTS `User`;
    
CREATE TABLE `User` (
  `uid` VARCHAR(255) NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `avatar_url` VARCHAR(255) NULL DEFAULT NULL,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `gender` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`uid`)
);

-- ---
-- Table 'Membership'
-- 
-- ---

DROP TABLE IF EXISTS `Membership`;
    
CREATE TABLE `Membership` (
  `uid` VARCHAR NULL AUTO_INCREMENT DEFAULT NULL,
  `user_uid` VARCHAR(255) NULL DEFAULT NULL,
  `group_uid` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`uid`)
);

-- ---
-- Table 'Job'
-- 
-- ---

DROP TABLE IF EXISTS `Job`;
    
CREATE TABLE `Job` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `company_id` INTEGER NULL DEFAULT NULL,
  `job_id` INTEGER NULL DEFAULT NULL,
  `salary` INTEGER NULL DEFAULT NULL,
  `start_date` DATETIME NULL DEFAULT NULL,
  `user_id` VARCHAR(255) NULL DEFAULT NULL,
  `end_date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Companies'
-- 
-- ---

DROP TABLE IF EXISTS `Companies`;
    
CREATE TABLE `Companies` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `url` VARCHAR(255) NULL DEFAULT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Apps'
-- 
-- ---

DROP TABLE IF EXISTS `Apps`;
    
CREATE TABLE `Apps` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Status` VARCHAR(255) NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `contact_id` INTEGER NULL DEFAULT NULL,
  `date_applied` DATETIME NULL DEFAULT NULL,
  `job_id` INTEGER NULL DEFAULT NULL,
  `Phases` VARCHAR(255) NULL DEFAULT NULL,
  `new field` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Company Contacts'
-- 
-- ---

DROP TABLE IF EXISTS `Company Contacts`;
    
CREATE TABLE `Company Contacts` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  `company_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Job Type'
-- 
-- ---

DROP TABLE IF EXISTS `Job Type`;
    
CREATE TABLE `Job Type` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Title` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Interviews'
-- 
-- ---

DROP TABLE IF EXISTS `Interviews`;
    
CREATE TABLE `Interviews` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `app_id` INTEGER NULL DEFAULT NULL,
  `info` VARCHAR(500) NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Groups` ADD FOREIGN KEY (school_uid) REFERENCES `School` (`uid`);
ALTER TABLE `Membership` ADD FOREIGN KEY (user_uid) REFERENCES `User` (`uid`);
ALTER TABLE `Membership` ADD FOREIGN KEY (group_uid) REFERENCES `Groups` (`uid`);
ALTER TABLE `Job` ADD FOREIGN KEY (company_id) REFERENCES `Companies` (`id`);
ALTER TABLE `Job` ADD FOREIGN KEY (job_id) REFERENCES `Job Type` (`id`);
ALTER TABLE `Job` ADD FOREIGN KEY (user_id) REFERENCES `User` (`uid`);
ALTER TABLE `Apps` ADD FOREIGN KEY (user_id) REFERENCES `User` (`uid`);
ALTER TABLE `Apps` ADD FOREIGN KEY (contact_id) REFERENCES `Company Contacts` (`id`);
ALTER TABLE `Apps` ADD FOREIGN KEY (job_id) REFERENCES `Job Type` (`id`);
ALTER TABLE `Company Contacts` ADD FOREIGN KEY (company_id) REFERENCES `Companies` (`id`);
ALTER TABLE `Interviews` ADD FOREIGN KEY (app_id) REFERENCES `Apps` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `School` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Groups` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Membership` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Job` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Companies` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Apps` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Company Contacts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Job Type` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Interviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `School` (`uid`,`name`,`location`,`url`) VALUES
-- ('','','','');
-- INSERT INTO `Groups` (`uid`,`school_uid`,`name`,`role`,`info`) VALUES
-- ('','','','','');
-- INSERT INTO `User` (`uid`,`name`,`email`,`avatar_url`,`status`,`gender`) VALUES
-- ('','','','','','');
-- INSERT INTO `Membership` (`uid`,`user_uid`,`group_uid`,`role`) VALUES
-- ('','','','');
-- INSERT INTO `Job` (`id`,`company_id`,`job_id`,`salary`,`start_date`,`user_id`,`end_date`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Companies` (`id`,`name`,`url`,`address`) VALUES
-- ('','','','');
-- INSERT INTO `Apps` (`id`,`Status`,`user_id`,`contact_id`,`date_applied`,`job_id`,`Phases`,`new field`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `Company Contacts` (`id`,`name`,`phone_number`,`company_id`) VALUES
-- ('','','','');
-- INSERT INTO `Job Type` (`id`,`Title`) VALUES
-- ('','');
-- INSERT INTO `Interviews` (`id`,`app_id`,`info`,`date`) VALUES
-- ('','','','');

