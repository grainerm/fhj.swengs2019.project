package at.fh.ima.swengs.bandPortal.controller;

import at.fh.ima.swengs.bandPortal.dto.ActorDTO;
import at.fh.ima.swengs.bandPortal.facade.ActorFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class ActorController {

    @Autowired
    private ActorFacade actorFacade;

    @GetMapping("/dto/actors/{id}")
    ActorDTO getById(@PathVariable Long id) {
        return actorFacade.getById(id);
    }

    @PostMapping("/dto/actors")
    ActorDTO create(@RequestBody @Valid ActorDTO dto) {
        return actorFacade.create(dto);
    }

    @PutMapping("/dto/actors/{id}")
    ActorDTO update(@RequestBody @Valid ActorDTO dto, @PathVariable Long id) {
        return actorFacade.update(id, dto);
    }

}
