package gouv.rr.model;

import jakarta.persistence.*;

@Entity
@Table(name = "administrateur")
public class Administrateur {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "Id_Admin")
  private int idAdmin;

  @Column(name = "Login")
  private String login;

  @Column(name = "Mdp_Admin")
  private String mdpAdmin;

  public Administrateur() {}

  public Administrateur(String login, String mdpAdmin) {
    this.login = login;
    this.mdpAdmin = mdpAdmin;
  }

  public int getIdAdmin() { return idAdmin; }
  public void setIdAdmin(int idAdmin) { this.idAdmin = idAdmin; }

  public String getLogin() { return login; }
  public void setLogin(String login) { this.login = login; }

  public String getMdpAdmin() { return mdpAdmin; }
  public void setMdpAdmin(String mdpAdmin) { this.mdpAdmin = mdpAdmin; }
}