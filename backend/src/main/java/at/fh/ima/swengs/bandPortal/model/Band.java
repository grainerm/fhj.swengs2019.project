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
    private List<Members> member;

    @Column(nullable = true)
    private String genre;

    @ManyToOne
    private Country country;

    @ManyToMany
    @JoinTable(name = "events_bands",
            joinColumns = @JoinColumn(name = "bands_id"),
            inverseJoinColumns = @JoinColumn(name = "events_id")
    )
    private Set<Events> events;

    @OneToMany(mappedBy = "band")
    private List<Album> albums;

    @Column(nullable = true)
    private String bandPicure;

    public Band() {
    }

    public Band(String name, List<Members> member, String genre, Country country, User user, Set<Events> events, List<Album> albums, String bandPicure) {
        this.name = name;
        this.member = member;
        this.genre = genre;
        this.country = country;
        this.events = events;
        this.albums = albums;
        this.bandPicure = bandPicure;
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

    public List<Members> getMember() {
        return member;
    }

    public void setMember(List<Members> member) {
        this.member = member;
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

    public String getBandPicure() {
        return bandPicure;
    }

    public void setBandPicure(String bandPicure) {
        this.bandPicure = bandPicure;
    }

    public Set<Events> getEvents() {
        return events;
    }

    public void setEvents(Set<Events> events) {
        this.events = events;
    }

    public List<Album> getAlbums() {
        return albums;
    }

    public void setAlbums(List<Album> albums) {
        this.albums = albums;
    }
}
