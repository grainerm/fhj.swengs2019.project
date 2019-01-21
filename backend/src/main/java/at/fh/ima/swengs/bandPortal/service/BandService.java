package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.model.BandRepository;
import at.fh.ima.swengs.bandPortal.model.Country;
import at.fh.ima.swengs.bandPortal.model.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service()
public class BandService {

    @Autowired
    private BandRepository bandRepository;

    @Autowired
    private CountryRepository countryRepository;


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

    public List<Band> getBandsForName(List<String> dtos) {
        List<Band> entities = new ArrayList<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(bandRepository.findByName(dto).get(0)));
        }
        return entities;
    }

}
