package gouv.rr.repository;

import gouv.rr.model.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdministrateurRepository extends JpaRepository<Administrateur, Integer> {
    Optional<Administrateur> findByLoginAndMdpAdmin(String login, String password);
}