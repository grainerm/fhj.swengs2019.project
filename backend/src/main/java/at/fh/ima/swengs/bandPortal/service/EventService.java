package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Event;
import at.fh.ima.swengs.bandPortal.model.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service()
public class EventService {

    @Autowired
    private EventRepository eventRepository;


    public Optional<Event> findById(Long id) {
        return eventRepository.findById(id);
    }

    public Event save(Event entity) {
        return eventRepository.save(entity);
    }

    public Set<Event> getEvents(Set<Long> dtos) {
        Set<Event> entities = new HashSet<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(eventRepository.findById(dto).get()));
        }
        return entities;
    }
}
