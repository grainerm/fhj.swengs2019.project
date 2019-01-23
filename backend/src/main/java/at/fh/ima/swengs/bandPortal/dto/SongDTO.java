package at.fh.ima.swengs.bandPortal.dto;

import at.fh.ima.swengs.bandPortal.model.Album;

import javax.persistence.Column;
import javax.persistence.ManyToOne;

public class SongDTO {

    private Long id;
    private String name;
    private Long album;
    private float length;

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

    public Long getAlbum() {
        return album;
    }

    public void setAlbum(Long album) {
        this.album = album;
    }

    public float getLength() {
        return length;
    }

    public void setLength(float length) {
        this.length = length;
    }
}
