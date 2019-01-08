package at.fh.ima.swengs.bandPortal.controller;

import at.fh.ima.swengs.bandPortal.dto.EventsDTO;
import at.fh.ima.swengs.bandPortal.facade.EventFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class EventController {

    @Autowired
    private EventFacade eventFacade;

    @GetMapping("/dto/events/{id}")
    EventsDTO getById(@PathVariable Long id) {
        return eventFacade.getById(id);
    }

    @PostMapping("/dto/events")
    EventsDTO create(@RequestBody @Valid EventsDTO dto) {
        return eventFacade.create(dto);
    }

    @PutMapping("/dto/events/{id}")
    EventsDTO update(@RequestBody @Valid EventsDTO dto, @PathVariable Long id) {
        return eventFacade.update(id, dto);
    }
}
