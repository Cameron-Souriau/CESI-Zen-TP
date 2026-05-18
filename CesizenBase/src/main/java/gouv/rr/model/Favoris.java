package gouv.rr.model;

import jakarta.persistence.*;

@Entity
@Table(name = "favoris")
@IdClass(FavorisId.class)
public class Favoris {

  @Id
  @Column(name = "id_citoyen")
  private int idCitoyen;

  @Id
  @Column(name = "id_activite")
  private int idActivite;

  public Favoris() {}

  public Favoris(int idCitoyen, int idActivite) {
    this.idCitoyen = idCitoyen;
    this.idActivite = idActivite;
  }

  public int getIdCitoyen() { return idCitoyen; }
  public void setIdCitoyen(int idCitoyen) { this.idCitoyen = idCitoyen; }

  public int getIdActivite() { return idActivite; }
  public void setIdActivite(int idActivite) { this.idActivite = idActivite; }
}