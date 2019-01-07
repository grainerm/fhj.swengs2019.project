package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Album;
import at.fh.ima.swengs.bandPortal.model.Country;
import at.fh.ima.swengs.bandPortal.model.Events;
import at.fh.ima.swengs.bandPortal.model.Members;

import java.util.List;
import java.util.Set;

public class BandDTO {
    private long id;
    private String name;
    private List<Members> member;
    private String genre;
    private Country country;
    private Set<Events> events;
    private List<Album> albums;
    private String bandPicure;

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

    public String getBandPicure() {
        return bandPicure;
    }

    public void setBandPicure(String bandPicure) {
        this.bandPicure = bandPicure;
    }
}
