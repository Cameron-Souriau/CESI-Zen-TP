package gouv.rr.model;

import jakarta.persistence.*;

@Entity
@Table(name = "categorie")
public class Categorie {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = "Libelle")
  private String libelle;

  public Categorie() {}

  public Categorie(String libelle) {
    this.libelle = libelle;
  }

  public int getId() { return id; }
  public void setId(int id) { this.id = id; }

  public String getLibelle() { return libelle; }
  public void setLibelle(String libelle) { this.libelle = libelle; }
}