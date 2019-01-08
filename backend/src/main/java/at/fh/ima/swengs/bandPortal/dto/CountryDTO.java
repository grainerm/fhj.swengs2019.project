package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.model.Event;


import java.util.List;
import java.util.Set;

public class CountryDTO {

    private long countryID;
    private String name;
    private List<Long> bands;
    private Set<Long> events;

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

    public List<Long> getBands() {
        return bands;
    }

    public void setBands(List<Long> bands) {
        this.bands = bands;
    }

    public Set<Long> getEvents() {
        return events;
    }

    public void setEvents(Set<Long> events) {
        this.events = events;
    }
}
