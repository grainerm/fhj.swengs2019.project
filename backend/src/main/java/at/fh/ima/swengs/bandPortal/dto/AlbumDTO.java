package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.model.Song;

import java.util.List;

public class AlbumDTO {
    private long albumID;
    private String name;
    private Band band;
    private int releaseYear;
    private List<Long> songs;

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

    public List<Long> getSongs() {
        return songs;
    }

    public void setSongs(List<Long> songs) {
        this.songs = songs;
    }
}
