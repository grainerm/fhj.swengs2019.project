package at.fh.ima.swengs.bandPortal.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "albumID")
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long albumID;
    @Column(nullable = true)
    private String name;

    @ManyToOne
    private Band band;

    @Column(nullable = true)
    private int releaseYear;

    @OneToMany(mappedBy = "album")
    private List<Song> songs;

    @Version
    @JsonIgnore
    private long version;

    public Album() {
    }

    public Album(String name, Band band, int releaseYear, List<Song> songs) {
        this.name = name;
        this.band = band;
        this.releaseYear = releaseYear;
        this.songs = songs;
    }

    public long getAlbumID() {
        return albumID;
    }

    public void setAlbumID(long albumID) {
        this.albumID = albumID;
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

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public List<Song> getSongs() {
        return songs;
    }

    public void setSongs(List<Song> songs) {
        this.songs = songs;
    }
}
