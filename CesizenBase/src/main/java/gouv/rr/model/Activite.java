package gouv.rr.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "activite")
public class Activite {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_contenu")
  private int idContenu;

  @Column(name = "lien_video")
  private String lienVideo;

  @Column(name = "titre", nullable = false, length = 200)
  private String titre;

  @Column(name = "Durée", nullable = false)
  private LocalTime duree;

  @Column(name = "date_ajout")
  private LocalDate dateAjout;

  @ManyToOne
  @JoinColumn(name = "id_categorie", nullable = false)
  private Categorie categorie;

  public Activite() {
  }

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

  public LocalTime getDuree() {
    return duree;
  }

  public void setDuree(LocalTime duree) {
    this.duree = duree;
  }

  public LocalDate getDateAjout() {
    return dateAjout;
  }

  public void setDateAjout(LocalDate dateAjout) {
    this.dateAjout = dateAjout;
  }

  public Categorie getCategorie() {
    return categorie;
  }

  public void setCategorie(Categorie categorie) {
    this.categorie = categorie;
  }

  public String getLienVideo() {
    return lienVideo;
  }

  public void setLienVideo(String lienVideo) {
    this.lienVideo = lienVideo;
  }
}