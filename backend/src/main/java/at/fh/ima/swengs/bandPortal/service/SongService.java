package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Song;
import at.fh.ima.swengs.bandPortal.model.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

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

    public Set<Song> getSongs(Set<Long> dtos) {
        Set<Song> entities = new HashSet<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(songRepository.findById(dto).get()));
        }
        return entities;
    }
}
