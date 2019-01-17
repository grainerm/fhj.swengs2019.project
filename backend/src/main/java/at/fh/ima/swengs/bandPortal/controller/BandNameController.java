package at.fh.ima.swengs.bandPortal.controller;

import at.fh.ima.swengs.bandPortal.dto.BandNameDTO;
import at.fh.ima.swengs.bandPortal.facade.BandNameFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class BandNameController {

    @Autowired
    private BandNameFacade bandNameFacade;

    @GetMapping("/dto/bandNames/{id}")
    BandNameDTO getById(@PathVariable Long id) { return bandNameFacade.getById(id); }

    @PostMapping("/dto/bandNames")
    BandNameDTO create(@RequestBody @Valid BandNameDTO dto) {
        return bandNameFacade.create(dto);
    }

    @PutMapping("/dto/bandNames/{id}")
    BandNameDTO update(@RequestBody @Valid BandNameDTO dto, @PathVariable Long id) {
        return bandNameFacade.update(id, dto);
    }
}
