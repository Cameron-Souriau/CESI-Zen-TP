package model;

import java.io.Serializable;
import java.util.Objects;

// Cette classe sert uniquement à dire à Spring Boot : "La clé primaire est double"
public class ConsulteId implements Serializable {
    private int idCitoyen;
    private int idContenu;

    public ConsulteId() {}

    public ConsulteId(int idCitoyen, int idContenu) {
        this.idCitoyen = idCitoyen;
        this.idContenu = idContenu;
    }

    // --- Getters, Setters, equals et hashCode (obligatoires pour une clé composite) ---
    public int getIdCitoyen() { return idCitoyen; }
    public void setIdCitoyen(int idCitoyen) { this.idCitoyen = idCitoyen; }

    public int getIdContenu() { return idContenu; }
    public void setIdContenu(int idContenu) { this.idContenu = idContenu; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ConsulteId that = (ConsulteId) o;
        return idCitoyen == that.idCitoyen && idContenu == that.idContenu;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCitoyen, idContenu);
    }
}