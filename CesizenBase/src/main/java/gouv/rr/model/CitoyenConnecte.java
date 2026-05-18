package gouv.rr.model;

import jakarta.persistence.*;

@Entity
@Table(name = "citoyen_connecte")
public class CitoyenConnecte {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = "Login")
  private String login;

  @Column(name = "Email")
  private String email;

  @Column(name = "Mdp_Citoyen_Connecte")
  private String mdpCitoyen;

  @Column(name = "isActive")
  private boolean isActive;

  public CitoyenConnecte() {}

  public CitoyenConnecte(String login, String email, String mdpCitoyen, boolean isActive) {
    this.login = login;
    this.email = email;
    this.mdpCitoyen = mdpCitoyen;
    this.isActive = isActive;
  }

  public int getId() { return id; }
  public void setId(int id) { this.id = id; }

  public String getLogin() { return login; }
  public void setLogin(String login) { this.login = login; }

  public String getEmail() { return email; }
  public void setEmail(String email) { this.email = email; }

  public String getMdpCitoyen() { return mdpCitoyen; }
  public void setMdpCitoyen(String mdpCitoyen) { this.mdpCitoyen = mdpCitoyen; }

  public boolean isActive() { return isActive; }
  public void setActive(boolean active) { isActive = active; }
}