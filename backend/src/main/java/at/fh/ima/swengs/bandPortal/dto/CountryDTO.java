package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.model.Events;

import java.util.List;

public class CountryDTO {

    private long countryID;
    private String name;
    private List<Band> bands;
    private List<Events> events;

    public long getCountryID() {
        return countryID;
    }

    public void setCountryID(long countryID) {
        this.countryID = countryID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Band> getBands() {
        return bands;
    }

    public void setBands(List<Band> bands) {
        this.bands = bands;
    }

    public List<Events> getEvents() {
        return events;
    }

    public void setEvents(List<Events> events) {
        this.events = events;
    }
}
