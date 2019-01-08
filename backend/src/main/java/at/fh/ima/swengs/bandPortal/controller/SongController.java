package at.fh.ima.swengs.bandPortal.controller;

import at.fh.ima.swengs.bandPortal.dto.SongDTO;
import at.fh.ima.swengs.bandPortal.facade.SongFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class SongController {

    @Autowired
    private SongFacade songFacade;

    @GetMapping("/dto/songs/{id}")
    SongDTO getById(@PathVariable Long id) {
        return songFacade.getById(id);
    }

    @PostMapping("/dto/songs")
    SongDTO create(@RequestBody @Valid SongDTO dto) {
        return songFacade.create(dto);
    }

    @PutMapping("/dto/songs/{id}")
    SongDTO update(@RequestBody @Valid SongDTO dto, @PathVariable Long id) {
        return songFacade.update(id, dto);
    }
}
