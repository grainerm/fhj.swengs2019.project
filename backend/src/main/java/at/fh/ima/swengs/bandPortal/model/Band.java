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
public class Band {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Version
    @JsonIgnore
    private long version;

    @Column(nullable = true)
    private String name;

    @OneToMany(mappedBy = "band")
    private List<Member> members;

    @Column(nullable = true)
    private String genre;

    @ManyToOne
    private Country country;

    @ManyToMany
    @JoinTable(name = "events_bands",
            joinColumns = @JoinColumn(name = "bands_id"),
            inverseJoinColumns = @JoinColumn(name = "events_id")
    )
    private Set<Event> events;

    @OneToMany(mappedBy = "band")
    private List<Album> albums;

    @Column(nullable = true)
    private String bandPicture;

    public Band() {
    }

    public Band(String name, List<Member> members, String genre, Country country, User user, Set<Event> events, List<Album> albums, String bandPicure) {
        this.name = name;
        this.members = members;
        this.genre = genre;
        this.country = country;
        this.events = events;
        this.albums = albums;
        this.bandPicture = bandPicure;
    }

    public long getId() {
        return id;
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

    public List<Member> getMember() {
        return members;
    }

    public void setMember(List<Member> members) {
        this.members = members;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public String getBandPicture() {
        return bandPicture;
    }

    public void setBandPicture(String bandPicure) {
        this.bandPicture = bandPicure;
    }

    public Set<Event> getEvents() {
        return events;
    }

    public void setEvents(Set<Event> events) {
        this.events = events;
    }

    public List<Album> getAlbums() {
        return albums;
    }

    public void setAlbums(List<Album> albums) {
        this.albums = albums;
    }
}
