package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Song;
import at.fh.ima.swengs.bandPortal.model.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service()
public class SongService {

    @Autowired
    private SongRepository songRepository;


    public Optional<Song> findById(Long id) {
        return songRepository.findById(id);
    }

    public Song save(Song entity) {
        return songRepository.save(entity);
    }

    public List<Song> getSongs(List<Long> dtos) {
        List<Song> entities = new ArrayList<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(songRepository.findById(dto).get()));
        }
        return entities;
    }
}
