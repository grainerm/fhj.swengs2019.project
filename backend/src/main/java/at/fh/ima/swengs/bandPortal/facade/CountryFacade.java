package at.fh.ima.swengs.bandPortal.facade;

import at.fh.ima.swengs.bandPortal.dto.CountryDTO;
import at.fh.ima.swengs.bandPortal.model.Country;
import at.fh.ima.swengs.bandPortal.service.BandService;
import at.fh.ima.swengs.bandPortal.service.CountryService;
import at.fh.ima.swengs.bandPortal.service.EventService;
import at.fh.ima.swengs.bandPortal.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service()
@Transactional
public class CountryFacade {

    @Autowired
    private CountryService countryService;

    @Autowired
    private EventService eventService;

    @Autowired
    private BandService bandService;

    void mapDtoToEntity(CountryDTO dto, Country entity) {
        entity.setName(dto.getName());
        entity.setEvents(eventService.getEventsByName(dto.getEvents()));
        entity.setBands(bandService.getBandsForName(dto.getBands()));
        entity.setNameCode(dto.getNameCode());
    }

    private void mapEntityToDto(Country entity, CountryDTO dto) {
        dto.setId(entity.getNameCode());
        dto.setName(entity.getName());
        dto.setBands(entity.getBands().stream().map((s) -> s.getName()).collect(Collectors.toList()));
        dto.setEvents(entity.getEvents().stream().map((s) -> s.getName()).collect(Collectors.toSet()));
        dto.setNameCode(entity.getNameCode());
    }

    public CountryDTO update(long id, CountryDTO dto) {
        Country entity = countryService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(countryService.save(entity), dto);
        return dto;
    }

    public CountryDTO create(CountryDTO dto) {
        Country entity = new Country();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(countryService.save(entity), dto);
        return dto;
    }

    public CountryDTO getById(long id) {
        Country entity = countryService.findById(id).get();
        CountryDTO dto = new CountryDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }
    public List<CountryDTO> getAll(){
         List<CountryDTO> cdto = new ArrayList<CountryDTO>();
         countryService.getAllCountries().forEach(entity -> {
             CountryDTO dto = new CountryDTO();
             mapEntityToDto(entity,dto);
             cdto.add(dto);
         });
         return cdto;
    }
}
