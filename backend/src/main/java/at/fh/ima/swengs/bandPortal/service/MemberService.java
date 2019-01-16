package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.model.BandRepository;
import at.fh.ima.swengs.bandPortal.model.Member;
import at.fh.ima.swengs.bandPortal.model.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service()
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private BandRepository bandRepository;


    public Optional<Member> findById(Long id) {
        return memberRepository.findById(id);
    }

    public Member save(Member entity) {
        return memberRepository.save(entity);
    }

    public List<Member> getMembers(List<Long> dtos) {
        List<Member> entities = new ArrayList<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(memberRepository.findById(dto).get()));
        }
        return entities;
    }

    public Optional<Band> getBand(Long id)
    {
       return bandRepository.findById(id);
    }
}
