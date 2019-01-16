package at.fh.ima.swengs.bandPortal.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = true)
    private String nameCode;

    @Column(nullable = true)
    private String name;

    @OneToMany(mappedBy = "country")
    private List<Band> bands;

    @OneToMany(mappedBy = "hostCountry")
    private Set<Event> events;

    @Version
    @JsonIgnore
    private long version;

    public Country() {
    }

    public Country(String name, List<Band> bands, Set<Event> events, String nameCode) {
        this.name = name;
        this.bands = bands;
        this.events = events;
        this.nameCode = nameCode;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Band> getBands() {
        return bands;
    }

    public void setBands(List<Band> bands) {
        this.bands = bands;
    }

    public Set<Event> getEvents() {
        return events;
    }

    public void setEvents(Set<Event> events) {
        this.events = events;
    }

    public String getNameCode() {
        return nameCode;
    }

    public void setNameCode(String name_code) {
        this.nameCode = name_code;
    }
}
