package gouv.rr.model;

import jakarta.persistence.*;

@Entity
@Table(name = "information")
public class Information {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_contenu")
  private int idContenu;

  private String titre;

  private String auteur;

  @Lob
  @Column(name = "Contenu", columnDefinition = "LONGTEXT")
  private String contenu;

  public Information() {}

  public int getIdContenu() {
    return idContenu;
  }

  public void setIdContenu(int idContenu) {
    this.idContenu = idContenu;
  }

  public String getTitre() {
    return titre;
  }

  public void setTitre(String titre) {
    this.titre = titre;
  }

  public String getAuteur() {
    return auteur;
  }

  public void setAuteur(String auteur) {
    this.auteur = auteur;
  }

  public String getContenu() {
    return contenu;
  }

  public void setContenu(String contenu) {
    this.contenu = contenu;
  }
}