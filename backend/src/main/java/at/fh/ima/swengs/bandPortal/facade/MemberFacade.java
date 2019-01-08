package at.fh.ima.swengs.bandPortal.facade;

import at.fh.ima.swengs.bandPortal.dto.MembersDTO;
import at.fh.ima.swengs.bandPortal.model.Member;
import at.fh.ima.swengs.bandPortal.service.BandService;
import at.fh.ima.swengs.bandPortal.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service()
@Transactional
public class MemberFacade {

    @Autowired
    private MemberService memberService;

    void mapDtoToEntity(MembersDTO dto, Member entity){
        entity.setName(dto.getName());
        entity.setRole(dto.getRole());
        entity.setBand(dto.getBand());
    }

    private void mapEntityToDto(Member entity, MembersDTO dto){
        dto.setMemberID(entity.getMemberID());
        dto.setName(entity.getName());
        dto.setRole(entity.getRole());
        dto.setBand(entity.getBand());
    }

    public MembersDTO update(Long id, MembersDTO dto) {
        Member entity = memberService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(memberService.save(entity), dto);
        return dto;
    }

    public MembersDTO create(MembersDTO dto) {
        Member entity = new Member();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(memberService.save(entity), dto);
        return dto;
    }

    public MembersDTO getById(Long id) {
        Member entity = memberService.findById(id).get();
        MembersDTO dto = new MembersDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }
}
