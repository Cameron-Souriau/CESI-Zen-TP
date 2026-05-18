package gouv.rr.repository;

import gouv.rr.model.Administrateur;
import gouv.rr.model.CitoyenConnecte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CitoyenConnecteRepository extends JpaRepository<CitoyenConnecte, Integer> {
    Optional<CitoyenConnecte> findByEmailAndMdpCitoyen(String email, String mdp_citoyen);
    Optional<CitoyenConnecte> findByLoginAndMdpCitoyen(String login, String mdp_citoyen);

}