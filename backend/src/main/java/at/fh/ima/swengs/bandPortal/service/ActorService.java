package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Actor;
import at.fh.ima.swengs.bandPortal.model.ActorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service()
public class ActorService {

    @Autowired
    private ActorRepository actorRepository;

    public Optional<Actor> findById(Long id) {
        return actorRepository.findById(id);
    }

    public Actor save(Actor entity) {
        return actorRepository.save(entity);
    }
}
