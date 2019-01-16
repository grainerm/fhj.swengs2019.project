package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Band;

import javax.persistence.Column;
import javax.persistence.ManyToOne;

public class MembersDTO {

    private long memberID;
    private String name;
    private Long band_id;
    private String role;

    public long getMemberID() {
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

    public Long getBand_id() {
        return band_id;
    }

    public void setBand_id(Long band_id) {
        this.band_id = band_id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
