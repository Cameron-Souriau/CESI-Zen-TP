package gouv.rr.controller;

import gouv.rr.model.Administrateur;
import gouv.rr.model.CitoyenConnecte;
import gouv.rr.repository.AdministrateurRepository;
import gouv.rr.repository.CitoyenConnecteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AdministrateurRepository adminRepo;

    @Autowired
    private CitoyenConnecteRepository citoyenRepo;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String login = credentials.get("login");
        String password = credentials.get("password");

        Optional<Administrateur> admin = adminRepo.findByLoginAndMdpAdmin(login, password);
        if (admin.isPresent()) {
            Map<String, Object> response = new HashMap<>();
            response.put("user", admin.get());
            response.put("role", "ADMIN");
            return ResponseEntity.ok(response);
        }

        Optional<CitoyenConnecte> citoyen = citoyenRepo.findByLoginAndMdpCitoyen(login, password);
        if (citoyen.isPresent()) {
            Map<String, Object> response = new HashMap<>();
            response.put("user", citoyen.get());
            response.put("role", "CITOYEN");
            return ResponseEntity.ok(response);
        }

        return ResponseEntity.status(401).body("Identifiants incorrects");
    }
}