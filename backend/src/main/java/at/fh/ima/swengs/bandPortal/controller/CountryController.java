package at.fh.ima.swengs.bandPortal.controller;

import at.fh.ima.swengs.bandPortal.dto.CountryDTO;
import at.fh.ima.swengs.bandPortal.facade.CountryFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class CountryController {

    @Autowired
    private CountryFacade countryFacade;

    @GetMapping("/dto/countries/{id}")
    CountryDTO getById(@PathVariable Long id) {
        return countryFacade.getById(id);
    }

    @PostMapping("/dto/countries")
    CountryDTO create(@RequestBody @Valid CountryDTO dto) {
        return countryFacade.create(dto);
    }

    @PutMapping("/dto/countries/{id}")
    CountryDTO update(@RequestBody @Valid CountryDTO dto, @PathVariable Long id) {
        return countryFacade.update(id, dto);
    }

}
