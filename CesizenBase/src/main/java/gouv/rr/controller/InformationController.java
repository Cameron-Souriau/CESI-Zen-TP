package gouv.rr.controller;

import gouv.rr.model.Information;
import gouv.rr.repository.InformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/informations")
@CrossOrigin(origins = "*")
public class InformationController {

    @Autowired
    private InformationRepository informationRepository;

    @GetMapping
    public List<Information> getAllInformations() {
        return informationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Information getInformationById(@PathVariable int id) {
        return informationRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Information createInformation(@RequestBody Information information) {
        return informationRepository.save(information);
    }
}