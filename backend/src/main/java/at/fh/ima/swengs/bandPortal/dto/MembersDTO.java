package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Band;

import javax.persistence.Column;
import javax.persistence.ManyToOne;

public class MembersDTO {

    private Long memberID;
    private String name;
    private Band band;
    private String role;

    public Long getMemberID() {
        return memberID;
    }

    public void setMemberID(Long memberID) {
        this.memberID = memberID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Band getBand() {
        return band;
    }

    public void setBand(Band band) {
        this.band = band;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
