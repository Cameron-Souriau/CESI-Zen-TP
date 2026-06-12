-- =================================================================================
-- 1. SUPPRESSION DES TABLES EXISTANTES (Pour repartir de zéro proprement)
-- =================================================================================
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS favoris;
DROP TABLE IF EXISTS consulte;
DROP TABLE IF EXISTS activite;
DROP TABLE IF EXISTS information;
DROP TABLE IF EXISTS categorie;
DROP TABLE IF EXISTS citoyen_connecte;
DROP TABLE IF EXISTS administrateur;

SET FOREIGN_KEY_CHECKS = 1;

-- =================================================================================
-- 2. CRÉATION DES TABLES (Modèle Logique de Données)
-- =================================================================================

-- ---------------------------------------------------------
-- Table : administrateur
-- ---------------------------------------------------------
CREATE TABLE administrateur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(100) NOT NULL,
    Mdp_Admin VARCHAR(255) NOT NULL
);

-- ---------------------------------------------------------
-- Table : citoyen_connecte
-- ---------------------------------------------------------
CREATE TABLE citoyen_connecte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(100) NOT NULL,
    Mdp_Citoyen_Connecte VARCHAR(255) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    isActive BOOLEAN
);

-- ---------------------------------------------------------
-- Table : categorie
-- ---------------------------------------------------------
CREATE TABLE categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(100) NOT NULL
);

-- ---------------------------------------------------------
-- Table : information (Pas de date d'ajout selon ton MLD)
-- ---------------------------------------------------------
CREATE TABLE information (
    id_contenu INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(200) NOT NULL,
    contenu TEXT NOT NULL,
    auteur VARCHAR(100)
);

-- ---------------------------------------------------------
-- Table : activite (Avec duree au format TIME et date d'ajout)
-- ---------------------------------------------------------
CREATE TABLE activite (
    id_contenu INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(200) NOT NULL,
    lien_video TEXT,
    Duree TIME NOT NULL,
    date_ajout DATE,
    id_categorie INT NOT NULL,
    CONSTRAINT fk_activite_categorie FOREIGN KEY (id_categorie) REFERENCES categorie(id) ON DELETE CASCADE
);

-- ---------------------------------------------------------
-- Table : consulte (Historique avec contrainte exclusive)
-- ---------------------------------------------------------
CREATE TABLE consulte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date_consultation DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_citoyen INT NOT NULL,
    id_information INT NULL,
    id_activite INT NULL,
    
    CONSTRAINT fk_cons_citoyen FOREIGN KEY (id_citoyen) REFERENCES citoyen_connecte(id) ON DELETE CASCADE,
    CONSTRAINT fk_cons_info FOREIGN KEY (id_information) REFERENCES information(id_contenu) ON DELETE CASCADE,
    CONSTRAINT fk_cons_act FOREIGN KEY (id_activite) REFERENCES activite(id_contenu) ON DELETE CASCADE,
    
    -- On force la présence d'une information OU d'une activité, mais pas les deux
    CONSTRAINT chk_cons_un_seul CHECK (
        (id_information IS NOT NULL AND id_activite IS NULL) OR 
        (id_information IS NULL AND id_activite IS NOT NULL)
    )
);

-- ---------------------------------------------------------
-- Table : favoris (Favoris avec contrainte exclusive + Unicité)
-- ---------------------------------------------------------
CREATE TABLE favoris (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date_ajout DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_citoyen INT NOT NULL,
    id_information INT NULL,
    id_activite INT NULL,
    
    CONSTRAINT fk_fav_citoyen FOREIGN KEY (id_citoyen) REFERENCES citoyen_connecte(id) ON DELETE CASCADE,
    CONSTRAINT fk_fav_info FOREIGN KEY (id_information) REFERENCES information(id_contenu) ON DELETE CASCADE,
    CONSTRAINT fk_fav_act FOREIGN KEY (id_activite) REFERENCES activite(id_contenu) ON DELETE CASCADE,
    
    -- On force la présence d'une information OU d'une activité
    CONSTRAINT chk_fav_un_seul CHECK (
        (id_information IS NOT NULL AND id_activite IS NULL) OR 
        (id_information IS NULL AND id_activite IS NOT NULL)
    ),
    
    -- Empêche un utilisateur de mettre deux fois le même contenu en favori
    UNIQUE KEY unq_citoyen_info (id_citoyen, id_information),
    UNIQUE KEY unq_citoyen_act (id_citoyen, id_activite)
);


-- =================================================================================
-- 1. NETTOYAGE DE LA BASE DE DONNÉES
-- =================================================================================

-- Désactivation des contraintes de clés étrangères pour permettre le nettoyage
SET FOREIGN_KEY_CHECKS = 0;

-- Vidage complet des tables et réinitialisation des AUTO_INCREMENT
TRUNCATE TABLE favoris;
TRUNCATE TABLE consulte;
TRUNCATE TABLE information;
TRUNCATE TABLE activite;
TRUNCATE TABLE categorie;
TRUNCATE TABLE citoyen_connecte;
TRUNCATE TABLE administrateur;

-- Réactivation des contraintes de clés étrangères
SET FOREIGN_KEY_CHECKS = 1;


-- =================================================================================
-- 2. INSERTION DU JEU D'ESSAI (MOCK DATA)
-- =================================================================================

-- ---------------------------------------------------------
-- Table : administrateur
-- ---------------------------------------------------------
INSERT INTO administrateur (login, Mdp_Admin) VALUES
('admin_jean', 'hash123'),
('admin_marie', 'hash123'),
('admin_luc', 'hash123'),
('admin_sophie', 'hash123'),
('super_admin', 'hash123'),
('admin_marc', 'hash123'),
('admin_julie', 'hash123'),
('admin_thomas', 'hash123'),
('admin_claire', 'hash123'),
('admin_hugo', 'hash123');

-- ---------------------------------------------------------
-- Table : citoyen_connecte
-- ---------------------------------------------------------
INSERT INTO citoyen_connecte (login, Mdp_Citoyen_Connecte, Email, isActive) VALUES
('citoyen_pierre', 'pass123', 'pierre@email.com', true),
('citoyen_paul', 'pass123', 'paul@email.com', true),
('citoyen_jacques', 'pass123', 'jacques@email.com',true),
('citoyen_alice', 'pass123', 'alice@email.com', false),
('citoyen_emma', 'pass123', 'emma@email.com', true),
('citoyen_lucas', 'pass123', 'lucas@email.com', true),
('citoyen_chloe', 'pass123', 'chloe@email.com', true),
('citoyen_nicolas', 'pass123', 'nicolas@email.com', true),
('citoyen_sarah', 'pass123', 'sarah@email.com',true),
('citoyen_maxime', 'pass123', 'maxime@email.com', true);

-- ---------------------------------------------------------
-- Table : categorie
-- ---------------------------------------------------------
INSERT INTO categorie (libelle) VALUES
('Méditation guidée'),
('Cohérence cardiaque'),
('Yoga doux'),
('Sons de la nature'),
('Gestion du stress'),
('Amélioration du sommeil'),
('Respiration profonde'),
('Sophrologie'),
('Étirements relaxants'),
('Pleine conscience');

-- ---------------------------------------------------------
-- Table : information (Articles)
-- ---------------------------------------------------------
INSERT INTO information (titre, contenu, auteur) VALUES
('Les bienfaits de la méditation', 'La méditation réduit l\'anxiété et favorise la concentration.', 'Dr. Zen'),
('Comprendre le burn-out', 'Le burn-out est un épuisement professionnel...', 'Marie Admin'),
('Alimentation et stress', 'Privilégiez les aliments riches en oméga 3...', 'Jean Admin'),
('L\'importance du sommeil', 'Un adulte a besoin en moyenne de 7 à 8 heures...', 'Sophie Admin'),
('Ergonomie au travail', 'Réglez la hauteur de votre chaise pour que vos yeux...', 'Luc Admin'),
('Déconnecter le week-end', 'Laissez le téléphone de côté pour laisser votre esprit...', 'Dr. Zen'),
('Les plantes apaisantes', 'La camomille et la valériane sont reconnues pour...', 'Marie Admin'),
('Respiration abdominale', 'Gonflez le ventre à l\'inspiration et videz-le lentement...', 'Jean Admin'),
('Marcher dans la nature', 'Le contact avec les arbres et la nature diminue le rythme...', 'Sophie Admin'),
('Les dangers de la sédentarité', 'Se lever régulièrement prévient les troubles...', 'Luc Admin');
-- ---------------------------------------------------------
-- Table : activite (Modules de relaxation)
-- ---------------------------------------------------------
INSERT INTO activite (titre, Duree, id_categorie, date_ajout, lien_video) VALUES
('Méditation du matin', '00:10:00', 1, '2023-10-01','https://youtu.be/zbrxbpaJXd8'),        -- 10 minutes
('Exercice 748', '00:03:15', 2, '2023-10-05','https://youtu.be/zbrxbpaJXd8'),               -- 5 minutes
('Exercice 55', '00:4:07', 2, '2023-10-10','https://youtu.be/rwU9gX0Mc4U'),            -- 15 minutes
('Exercice 46', '00:05:24', 2, '2023-10-15','https://youtu.be/9zvS6-h7OH4'),          -- 1 heure (60 min)
('Visualisation positive', '00:20:00', 5, '2023-10-20','https://youtu.be/zbrxbpaJXd8'),     -- 20 minutes
('Scan corporel', '00:30:00', 8, '2023-10-25','https://youtu.be/zbrxbpaJXd8'),              -- 30 minutes
('Étirements du dos', '00:10:00', 9, '2023-10-28','https://youtu.be/zbrxbpaJXd8'),          -- 10 minutes
('Marche en pleine conscience', '00:25:00', 10, '2023-11-01','https://youtu.be/zbrxbpaJXd8'),-- 25 minutes
('Exercice 4-7-8', '00:05:00', 6, '2023-11-05','https://youtu.be/zbrxbpaJXd8'),             -- 5 minutes
('Sons de la forêt', '00:45:00', 4, '2023-11-10','https://youtu.be/zbrxbpaJXd8');           -- 45 minutes-- ---------------------------------------------------------
-- Table : consulte (Historique)
-- Respect de la contrainte : id_information OU id_activite
-- ---------------------------------------------------------
INSERT INTO consulte (id_citoyen, id_information, id_activite, date_consultation) VALUES
(1, 1, NULL, '2023-11-12 10:00:00'), -- Pierre lit l'article 1
(1, NULL, 2, '2023-11-12 10:30:00'), -- Pierre fait l'activité 2
(2, 3, NULL, '2023-11-13 14:15:00'), -- Paul lit l'article 3
(3, NULL, 5, '2023-11-14 09:00:00'), -- Jacques fait l'activité 5
(4, 8, NULL, '2023-11-15 18:45:00'), -- Alice lit l'article 8
(5, NULL, 1, '2023-11-16 07:30:00'), -- Emma fait l'activité 1
(6, 4, NULL, '2023-11-17 22:00:00'), -- Lucas lit l'article 4
(7, NULL, 4, '2023-11-18 23:15:00'), -- Chloe fait l'activité 4
(8, 2, NULL, '2023-11-19 12:00:00'), -- Nicolas lit l'article 2
(1, 1, NULL, '2023-11-20 10:00:00'); -- Pierre relit l'article 1 (Doublons autorisés dans consulte)

-- ---------------------------------------------------------
-- Table : favoris
-- Respect de la contrainte exclusive + Unicité
-- ---------------------------------------------------------
INSERT INTO favoris (id_citoyen, id_information, id_activite, date_ajout) VALUES
(1, 1, NULL, '2023-11-12 10:05:00'), -- Pierre met l'article 1 en favori
(1, NULL, 2, '2023-11-12 10:35:00'), -- Pierre met l'activité 2 en favori
(2, 3, NULL, '2023-11-13 14:20:00'), -- Paul met l'article 3 en favori
(3, NULL, 5, '2023-11-14 09:25:00'), -- Jacques met l'activité 5 en favori
(4, 8, NULL, '2023-11-15 18:50:00'), -- Alice met l'article 8 en favori
(5, NULL, 1, '2023-11-16 07:45:00'), -- Emma met l'activité 1 en favori
(6, 4, NULL, '2023-11-17 22:05:00'), -- Lucas met l'article 4 en favori
(7, NULL, 4, '2023-11-18 23:20:00'), -- Chloe met l'activité 4 en favori
(8, 2, NULL, '2023-11-19 12:05:00'), -- Nicolas met l'article 2 en favori
(1, 10, NULL, '2023-11-20 10:15:00'); -- Pierre met un autre article en favori