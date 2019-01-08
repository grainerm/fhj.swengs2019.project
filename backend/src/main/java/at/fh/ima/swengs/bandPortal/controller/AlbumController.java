package at.fh.ima.swengs.bandPortal.controller;

import at.fh.ima.swengs.bandPortal.dto.AlbumDTO;
import at.fh.ima.swengs.bandPortal.facade.AlbumFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class AlbumController {

    @Autowired
    private AlbumFacade albumFacade;

    @GetMapping("/dto/alben/{id}")
    AlbumDTO getById(@PathVariable Long id) {
        return albumFacade.getById(id);
    }

    @PostMapping("/dto/albeb")
    AlbumDTO create(@RequestBody @Valid AlbumDTO dto) {
        return albumFacade.create(dto);
    }

    @PutMapping("/dto/alben/{id}")
    AlbumDTO update(@RequestBody @Valid AlbumDTO dto, @PathVariable Long id) {
        return albumFacade.update(id, dto);
    }

}
