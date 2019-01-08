package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.model.BandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service()
public class BandService {

    @Autowired
    private BandRepository bandRepository;


    public Optional<Band> findById(Long id) {
        return bandRepository.findById(id);
    }

    public Band save(Band entity) {
        return bandRepository.save(entity);
    }

    public Set<Band> getBands(Set<Long> dtos) {
        Set<Band> entities = new HashSet<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(bandRepository.findById(dto).get()));
        }
        return entities;
    }
}
