package at.fh.ima.swengs.bandPortal.service;


import at.fh.ima.swengs.bandPortal.model.Country;
import at.fh.ima.swengs.bandPortal.model.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service()
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;


    public Optional<Country> findById(Long id) {
        return countryRepository.findById(id);
    }

    public Optional<Country> findByCode(String code) {
        return countryRepository.findByNameCode(code);
    }

    public Country save(Country entity) {
        return countryRepository.save(entity);
    }

    public Set<Country> getCountries(Set<Long> dtos) {
        Set<Country> entities = new HashSet<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(countryRepository.findById(dto).get()));
        }
        return entities;
    }
    public List<Country> getAllCountries(){
        return countryRepository.findAll();
    }

    public List<Country> getCountriesWithBands() {return countryRepository.findCountriesByBandsIsNotNullAndEventsIsNull();}

    public List<Country> getCountriesWithEvents() {return countryRepository.findCountriesByEventsIsNotNullAndBandsIsNull();}

    public List<Country> getCountriesWithBandsAndEvents() {return countryRepository.findCountriesByEventsIsNotNullAndBandsIsNotNull();}


}
