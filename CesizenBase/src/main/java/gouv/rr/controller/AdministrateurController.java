package gouv.rr.controller;

import gouv.rr.model.Administrateur;
import gouv.rr.repository.AdministrateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/administrateurs")
@CrossOrigin(origins = "*")
public class AdministrateurController {

    @Autowired
    private AdministrateurRepository administrateurRepository;

    @GetMapping
    public List<Administrateur> getAll() {
        return administrateurRepository.findAll();
    }

    @PostMapping
    public Administrateur create(@RequestBody Administrateur admin) {
        return administrateurRepository.save(admin);
    }

    @PostMapping("/login")
    public ResponseEntity<Administrateur> login(@RequestBody Administrateur credentials) {
        return administrateurRepository.findByLoginAndMdpAdmin(credentials.getLogin(), credentials.getMdpAdmin())
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).build());
    }

    @GetMapping("/{id}")
    public Administrateur getById(@PathVariable int id) {
        return administrateurRepository.findById(id).orElse(null);
    }
}