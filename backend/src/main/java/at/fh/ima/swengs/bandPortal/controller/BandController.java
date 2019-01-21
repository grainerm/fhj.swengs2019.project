package at.fh.ima.swengs.bandPortal.controller;

import at.fh.ima.swengs.bandPortal.dto.BandDTO;
import at.fh.ima.swengs.bandPortal.facade.BandFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class BandController {

    @Autowired
    private BandFacade bandFacade;

    @GetMapping("/dto/bands/{id}")
    BandDTO getById(@PathVariable Long id) { return bandFacade.getById(id); }

    @PostMapping("/dto/bands")
    BandDTO create(@RequestBody @Valid BandDTO dto) {
        return bandFacade.create(dto);
    }

    @PutMapping("/dto/bands/{id}")
    BandDTO update(@RequestBody @Valid BandDTO dto, @PathVariable Long id) {
        return bandFacade.update(id, dto);
    }


}
