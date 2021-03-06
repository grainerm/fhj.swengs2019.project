package at.fh.ima.swengs.bandPortal.facade;

import at.fh.ima.swengs.bandPortal.dto.BandDTO;
import at.fh.ima.swengs.bandPortal.dto.CountryDTO;
import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.service.*;
import at.fh.ima.swengs.bandPortal.service.BandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.security.core.userdetails.User;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service()
@Transactional
public class BandFacade {

    @Autowired
    private BandService bandService;

    @Autowired
    private MemberService memberService;

    @Autowired
    private EventService eventService;

    @Autowired
    private AlbumService albumService;

    @Autowired
    private CountryService countryService;

    void mapDtoToEntity(BandDTO dto, Band entity) {
        entity.setName(dto.getName());
        // entity.setBandPicture(dto.getBandPicture().iterator().next());
        entity.setBandPicture(dto.getBandPicture());
        entity.setGenre(dto.getGenre());
        entity.setAlbums(albumService.getAlben(dto.getAlbums()));
        entity.setEvents(eventService.getEvents(dto.getEvents()));
        //dto.getCountry().
        if(dto.getCountry() != null)
            entity.setCountry(countryService.findByCode(dto.getCountry()).get());
        entity.setMember(memberService.getMembers(dto.getMember()));
        entity.setFoundingYear(dto.getFoundingYear());
        entity.setDescription(dto.getDescription());
    }

    private void mapEntityToDto(Band entity, BandDTO dto) {
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setBandPicture(entity.getBandPicture());
        dto.setGenre(entity.getGenre());
        dto.setAlbums(entity.getAlbums().stream().map((s) -> s.getAlbumID()).collect(Collectors.toList()));
        dto.setEvents(entity.getEvents().stream().map((s) -> s.getEventID()).collect(Collectors.toSet()));
        if(entity.getCountry() != null)
            dto.setCountry(entity.getCountry().getNameCode());
        dto.setMember(entity.getMember().stream().map((s) -> s.getMemberID()).collect(Collectors.toList()));
        dto.setFoundingYear(entity.getFoundingYear());
        dto.setDescription(entity.getDescription());
    }

    public BandDTO update(Long id, BandDTO dto) {
        Band entity = bandService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(bandService.save(entity), dto);
        return dto;
    }

    public BandDTO create(BandDTO dto) {
        Band entity = new Band();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(bandService.save(entity), dto);
        return dto;
    }

    public BandDTO getById(Long id) {
        Band entity = bandService.findById(id).get();
        BandDTO dto = new BandDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }

}
