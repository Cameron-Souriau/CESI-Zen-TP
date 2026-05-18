package controller;

import model.Activite;
import repository.ActiviteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activites")
@CrossOrigin(origins = "*") // INDISPENSABLE pour que Ionic puisse communiquer avec l'API
public class ActiviteController {

    @Autowired
    private ActiviteRepository activiteRepository;

    @GetMapping
    public List<Activite> getAllActivites() {
        return activiteRepository.findAll();
    }
}