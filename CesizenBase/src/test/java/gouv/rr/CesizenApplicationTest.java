package gouv.rr;

import gouv.rr.controller.CitoyenConnecteController;
import gouv.rr.model.CitoyenConnecte;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.util.Objects;

@SpringBootTest
public class CesizenApplicationTest {
    @Autowired
    public CitoyenConnecteController citoyenConnecteController;

    @Test
    @Order(0)
    void creerCitoyenConnecte(){
        var citoyen = new CitoyenConnecte("Cameron","cameron.souriau@viacesi.fr","patate",true);
        var isCitoyenCreated = Objects.equals(citoyenConnecteController.create(citoyen).getBody(), citoyen);
        Assert.isTrue(isCitoyenCreated,"Le citoyenConnecte n'a pas été crée");
    }
    @Test
    @Order(1)
    void deleteCitoyenConnecte(){
        var citoyens = citoyenConnecteController.getAll();
        CitoyenConnecte citoyen = null;
        for (CitoyenConnecte user : citoyens) {
            var name = user.getLogin();
            if(name.equals("Cameron"))
            {
                citoyen = user;
                break;
            }
        }
        Assertions.assertNotNull(citoyen);
        citoyenConnecteController.delete(citoyen.getId());

        citoyens = citoyenConnecteController.getAll();
        var isDeleted = true;
        for (CitoyenConnecte user : citoyens) {
            var name = user.getLogin();
            if (name.equals("Cameron")) {
                isDeleted = false;
                break;
            }
        }
        Assert.isTrue(isDeleted,"Le citoyenConnecte n'a pas été supprimé");
    }
}
