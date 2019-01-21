package at.fh.ima.swengs.bandPortal.dto;


public class BandNameDTO {

    private Long id;
    private String name;
    private String bandPicture;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBandPicture() {
        return bandPicture;
    }

    public void setBandPicture(String bandPicture) {
        this.bandPicture = bandPicture;
    }
}
