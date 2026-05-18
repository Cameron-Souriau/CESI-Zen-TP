package gouv.rr.controller;

import gouv.rr.model.CitoyenConnecte;
import gouv.rr.repository.CitoyenConnecteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/citoyens-connectes")
@CrossOrigin(origins = "*")
public class CitoyenConnecteController {

    @Autowired
    private CitoyenConnecteRepository citoyenConnecteRepository;

    @GetMapping
    public List<CitoyenConnecte> getAll() {
        return citoyenConnecteRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<CitoyenConnecte> create(@RequestBody CitoyenConnecte citoyen) {
        return ResponseEntity.ok(citoyenConnecteRepository.save(citoyen));
    }

    @PostMapping("/loginMail")
    public ResponseEntity<CitoyenConnecte> loginMail(@RequestBody CitoyenConnecte credentials) {
        return citoyenConnecteRepository.findByEmailAndMdpCitoyen(credentials.getEmail(), credentials.getMdpCitoyen())
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).build());
    }

    @PostMapping("/loginMdp")
    public ResponseEntity<CitoyenConnecte> loginMdp(@RequestBody CitoyenConnecte credentials) {
        return citoyenConnecteRepository.findByLoginAndMdpCitoyen(credentials.getLogin(), credentials.getMdpCitoyen())
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).build());
    }

    @GetMapping("/{id}")
    public CitoyenConnecte getById(@PathVariable int id) {
        return citoyenConnecteRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        citoyenConnecteRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}