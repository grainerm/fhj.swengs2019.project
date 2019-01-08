package at.fh.ima.swengs.bandPortal.controller;

import at.fh.ima.swengs.bandPortal.dto.MembersDTO;
import at.fh.ima.swengs.bandPortal.facade.MemberFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class MemberController {

    @Autowired
    private MemberFacade memberFacade;

    @GetMapping("/dto/members/{id}")
    MembersDTO getById(@PathVariable Long id) {
        return memberFacade.getById(id);
    }

    @PostMapping("/dto/members")
    MembersDTO create(@RequestBody @Valid MembersDTO dto) {
        return memberFacade.create(dto);
    }

    @PutMapping("/dto/members/{id}")
    MembersDTO update(@RequestBody @Valid MembersDTO dto, @PathVariable Long id) {
        return memberFacade.update(id, dto);
    }
}
