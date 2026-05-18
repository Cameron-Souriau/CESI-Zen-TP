package gouv.rr.model;

import java.io.Serializable;
import java.util.Objects;

class FavorisId implements Serializable {
    private int idCitoyen;
    private int idActivite;

    public FavorisId() {}
    public FavorisId(int idCitoyen, int idActivite) {
        this.idCitoyen = idCitoyen;
        this.idActivite = idActivite;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof FavorisId)) return false;
        FavorisId that = (FavorisId) o;
        return idCitoyen == that.idCitoyen && idActivite == that.idActivite;
    }
    @Override
    public int hashCode() {
        return Objects.hash(idCitoyen, idActivite);
    }
}