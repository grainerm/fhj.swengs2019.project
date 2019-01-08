package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Album;
import at.fh.ima.swengs.bandPortal.model.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service()
public class AlbumService {

    @Autowired
    private AlbumRepository albumRepository;


    public Optional<Album> findById(Long id) {
        return albumRepository.findById(id);
    }

    public Album save(Album entity) {
        return albumRepository.save(entity);
    }

    public List<Album> getAlben(List<Long> dtos) {
        List<Album> entities = new ArrayList<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(albumRepository.findById(dto).get()));
        }
        return entities;
    }
}
