package at.fh.ima.swengs.bandPortal.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;
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

    @Column(nullable = true)
    private Long foundingYear;

    @OneToMany(mappedBy = "band", cascade = CascadeType.ALL)
    private List<Member> members;

    @Column(nullable = true)
    private String genre;

    @Column(nullable = true)
    private String description;

    @ManyToOne
    private Country country;

    @ManyToMany
    @JoinTable(name = "events_bands",
            joinColumns = @JoinColumn(name = "band_id"),
            inverseJoinColumns = @JoinColumn(name = "event_id")
    )
    private Set<Event> events;

    @OneToMany(mappedBy = "band")
    private List<Album> albums;

    /*@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "band_picture")
    private Media bandPicture;*/

    @Column(nullable = true)
    private String bandPicture;

    public Band() {
    }

    public Band(String name, List<Member> members, String genre, Country country, User user, Set<Event> events, List<Album> albums, String bandPicture, Long foundingYear, String description) {

        this.name = name;
        this.members = members;
        this.genre = genre;
        this.foundingYear = foundingYear;
        this.country = country;
        this.events = events;
        this.albums = albums;
        this.bandPicture = bandPicture;
        this.description = description;
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

    public void setBandPicture(String bandPicture) {
        this.bandPicture = bandPicture;
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

    public Long getFoundingYear() {
        return foundingYear;
    }

    public void setFoundingYear(Long foundingYear) {
        this.foundingYear = foundingYear;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Band band = (Band) o;
        return Objects.equals(getId(), band.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Band{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", genre='" + genre + '\'' +
                ", country='" + country + '\'' +
                ", foundingYear='" + foundingYear + '\'' +
                ", version=" + version +
                '}';
    }
}
