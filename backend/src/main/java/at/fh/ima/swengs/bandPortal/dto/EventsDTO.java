package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.model.Country;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

public class EventsDTO {

    private long eventID;
    private String name;
    private String place;
    private Date date;
    private String eventType;
    private Country hostCountry;
    private Set<Band> bands;

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

    public Country getHostCountry() {
        return hostCountry;
    }

    public void setHostCountry(Country hostCountry) {
        this.hostCountry = hostCountry;
    }

    public Set<Band> getBands() {
        return bands;
    }

    public void setBands(Set<Band> bands) {
        this.bands = bands;
    }
}
