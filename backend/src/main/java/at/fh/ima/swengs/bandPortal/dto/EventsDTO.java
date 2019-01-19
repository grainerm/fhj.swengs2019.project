package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.model.Country;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

public class EventsDTO {

    private Long eventID;
    private String name;
    private String place;
    private Date date;
    private String eventType;
    private Long hostCountry;
    private Set<Long> bands;

    public Long getEventID() {
        return eventID;
    }

    public void setEventID(Long eventID) {
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

    public Long getHostCountry() {
        return hostCountry;
    }

    public void setHostCountry(Long hostCountry) {
        this.hostCountry = hostCountry;
    }

    public Set<Long> getBands() {
        return bands;
    }

    public void setBands(Set<Long> bands) {
        this.bands = bands;
    }
}
