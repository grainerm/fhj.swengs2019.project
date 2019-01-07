package at.fh.ima.swengs.bandPortal.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "memberID")
public class Members {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberID;

    private String name;

    @ManyToOne
    private Band band;

    private String role;

    @Version
    @JsonIgnore
    private long version;

    public long getVersion() {
        return version;
    }

    public void setVersion(long version) {
        this.version = version;
    }

    public Members() {
    }

    public Members(String name, Band band, String role) {
        this.name = name;
        this.band = band;
        this.role = role;
    }

    public long getMemberID() {
        return memberID;
    }

    public void setMemberID(long memberID) {
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
