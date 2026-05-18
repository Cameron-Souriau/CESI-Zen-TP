package model;

import java.time.Duration;

public class activite {
  public activite(int id, Duration duree, String lienVideo) {
    this.id = id;
    this.duree = duree;
    this.lienVideo = lienVideo;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public Duration getDuree() {
    return duree;
  }

  public void setDuree(Duration duree) {
    this.duree = duree;
  }

  public String getLienVideo() {
    return lienVideo;
  }

  public void setLienVideo(String lienVideo) {
    this.lienVideo = lienVideo;
  }

  public int id;
  public Duration duree;
  public String lienVideo;
}
