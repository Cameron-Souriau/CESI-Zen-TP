package repository;

import model.Activite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActiviteRepository extends JpaRepository<Activite, Integer> {
    // Toutes les méthodes comme findAll() ou save() sont déjà incluses !
}