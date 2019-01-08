package at.fh.ima.swengs.bandPortal.model;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;
import java.util.Set;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private String plot;

    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern="dd.MM.yyyy")
    @Temporal(TemporalType.TIMESTAMP)
    private Date releaseDate;

    @ManyToOne
    private Genre genre;

    private int length;
    private boolean color;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "movies_actors",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "actor_id"))
    private Set<Actor> actors;

    @Version
    private long version;

    public Movie() {
    }

    public Movie(String title, String plot, Date releaseDate, int length, boolean color) {
        this.title = title;
        this.plot = plot;
        this.releaseDate = releaseDate;
        this.length = length;
        this.color = color;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPlot() {
        return plot;
    }

    public void setPlot(String plot) {
        this.plot = plot;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public boolean isColor() {
        return color;
    }

    public void setColor(boolean color) {
        this.color = color;
    }

    public Set<Actor> getActors() {
        return actors;
    }

    public void setActors(Set<Actor> actors) {
        this.actors = actors;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Movie actor = (Movie) o;
        return id == actor.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", version=" + version +
                '}';
    }



    /*
    User should have username, admin checkbox
* Movie should have title, plot (text), release date (date), Runtime in Minutes (int), Genre (n:1), Actors(n:m), Black/White Film Checkbox, Aspect Ratio (enum)
* Genre should have title
* Actor should have name
* Rating should have user and rating [1-10]
*/

}
