package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Band;

import javax.persistence.OneToOne;

public class UserDTO {

    private long id;
    private String username;
    private String password;
    private Band band;
    private boolean admin;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Band getBand() {
        return band;
    }

    public void setBand(Band band) {
        this.band = band;
    }

    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }
}
