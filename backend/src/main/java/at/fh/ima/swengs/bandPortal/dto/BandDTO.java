package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Album;
import at.fh.ima.swengs.bandPortal.model.Country;
import at.fh.ima.swengs.bandPortal.model.Member;

import sun.plugin2.ipc.Event;

import java.util.List;
import java.util.Set;

public class BandDTO {
    private long id;
    private String name;
    private List<Long> member;
    private String genre;
    private Country country;
    private Set<Long> events;
    private List<Long> albums;
    private String bandPicture;

    private int foundingYear;

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

    public List<Long> getMember() {
        return member;
    }

    public void setMember(List<Long> member) {
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

    public Set<Long> getEvents() {
        return events;
    }

    public void setEvents(Set<Long> events) {
        this.events = events;
    }

    public List<Long> getAlbums() {
        return albums;
    }

    public void setAlbums(List<Long> albums) {
        this.albums = albums;
    }

    public String getBandPicture() {
        return bandPicture;
    }

    public void setBandPicture(String bandPicture) {
        this.bandPicture = bandPicture;
    }

    public int getFoundingYear() {
        return foundingYear;
    }

    public void setFoundingYear(int foundingYear) {
        this.foundingYear = foundingYear;
    }

}
