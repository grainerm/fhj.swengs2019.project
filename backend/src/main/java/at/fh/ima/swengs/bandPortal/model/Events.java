package at.fh.ima.swengs.bandPortal.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "eventID")
public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long eventID;

    private String name;

    private String place;

    private Date date;

    private String eventType;

    @ManyToOne
    private String hostCountry;

    @ManyToMany
    @JoinTable(name = "events_bands",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "band_id")
    )
    private Set<Band> bands;

    @Version
    @JsonIgnore
    private long version;

    public Events() {
    }

    public Events(String name, String place, Date date, String eventType, String hostCountry, Set<Band> bands) {
        this.name = name;
        this.place = place;
        this.date = date;
        this.eventType = eventType;
        this.hostCountry = hostCountry;
        this.bands = bands;
    }

    public long getEventID() {
        return eventID;
    }

    public void setEventID(long eventID) {
        this.eventID = eventID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public String getHostCountry() {
        return hostCountry;
    }

    public void setHostCountry(String hostCountry) {
        this.hostCountry = hostCountry;
    }

    public Set<Band> getBands() {
        return bands;
    }

    public void setBands(Set<Band> bands) {
        this.bands = bands;
    }
}
