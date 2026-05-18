package gouv.rr.controller;

import gouv.rr.model.Activite;
import gouv.rr.repository.ActiviteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activites")
@CrossOrigin(origins = "http://localhost:8100")
public class ActiviteController {

    @Autowired
    private ActiviteRepository activiteRepository;

    @GetMapping("/{id}")
    public Activite getActiviteById(@PathVariable int id) {
        return activiteRepository.findById(id).orElse(null);
    }

    @GetMapping
    public List<Activite> getAllActivites() {
        return activiteRepository.findAll();
    }
}