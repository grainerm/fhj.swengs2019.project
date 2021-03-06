package at.fh.ima.swengs.bandPortal.facade;

import at.fh.ima.swengs.bandPortal.dto.EventsDTO;
import at.fh.ima.swengs.bandPortal.model.Country;
import at.fh.ima.swengs.bandPortal.model.Event;
import at.fh.ima.swengs.bandPortal.service.BandService;
import at.fh.ima.swengs.bandPortal.service.CountryService;
import at.fh.ima.swengs.bandPortal.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service()
@Transactional
public class EventFacade {

    @Autowired
    private EventService eventService;

    @Autowired
    private BandService bandService;

    @Autowired
    private CountryService countryService;


    void mapDtoToEntity(EventsDTO dto, Event entity){
        entity.setName(dto.getName());
        entity.setPlace(dto.getPlace());
        entity.setDate(dto.getDate());
        entity.setEventType(dto.getEventType());
        entity.setHostCountry(countryService.findByCode(dto.getHostCountry()).get());
        entity.setBands(bandService.getBands(dto.getBands()));
    }

    private void mapEntityToDto(Event entity, EventsDTO dto){
        dto.setEventID(entity.getEventID());
        dto.setName(entity.getName());
        dto.setPlace(entity.getPlace());
        dto.setDate(entity.getDate());
        dto.setEventType(entity.getEventType());
        dto.setHostCountry(entity.getHostCountry().getNameCode());
        dto.setBands(entity.getBands().stream().map((m) -> m.getId()).collect(Collectors.toSet()));
    }

    public EventsDTO update(Long id, EventsDTO dto) {
        Event entity = eventService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(eventService.save(entity), dto);
        return dto;
    }

    public EventsDTO create(EventsDTO dto) {
        Event entity = new Event();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(eventService.save(entity), dto);
        return dto;
    }

    public EventsDTO getById(Long id) {
        Event entity = eventService.findById(id).get();
        EventsDTO dto = new EventsDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }
}
