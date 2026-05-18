package gouv.rr.model;

import jakarta.persistence.*;

@Entity
@Table(name = "consulte")
@IdClass(ConsulteId.class)
public class Consulte {

  @Id
  @Column(name = "id_citoyen")
  private int idCitoyen;

  @Id
  @Column(name = "id_contenu")
  private int idContenu;

  public Consulte() {}

  public Consulte(int idCitoyen, int idContenu) {
    this.idCitoyen = idCitoyen;
    this.idContenu = idContenu;
  }

  public int getIdCitoyen() { return idCitoyen; }
  public void setIdCitoyen(int idCitoyen) { this.idCitoyen = idCitoyen; }

  public int getIdContenu() { return idContenu; }
  public void setIdContenu(int idContenu) { this.idContenu = idContenu; }
}