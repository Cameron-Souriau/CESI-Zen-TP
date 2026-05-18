package gouv.rr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@SpringBootApplication
@EntityScan(basePackages = "gouv.rr.model")
@EnableJpaRepositories(basePackages = "gouv.rr.repository")
public class Main {
  public static void main(String[] args) {
    SpringApplication.run(Main.class, args);
    System.out.println(" L'API EST LANCÉE ");
  }
}