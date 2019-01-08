package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.model.BandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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

    public List<Band> getBands(List<Long> dtos) {
        List<Band> entities = new ArrayList<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(bandRepository.findById(dto).get()));
        }
        return entities;
    }
}
