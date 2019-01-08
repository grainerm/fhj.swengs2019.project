package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Member;
import at.fh.ima.swengs.bandPortal.model.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service()
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;


    public Optional<Member> findById(Long id) {
        return memberRepository.findById(id);
    }

    public Member save(Member entity) {
        return memberRepository.save(entity);
    }

    public Set<Member> getMembers(Set<Long> dtos) {
        Set<Member> entities = new HashSet<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(memberRepository.findById(dto).get()));
        }
        return entities;
    }
}
