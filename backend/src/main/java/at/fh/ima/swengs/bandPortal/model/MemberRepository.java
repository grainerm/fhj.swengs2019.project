package at.fh.ima.swengs.bandPortal.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource()
public interface MemberRepository extends PagingAndSortingRepository<Member,Long>, JpaRepository<Member, Long>, CrudRepository<Member, Long>{

    public List<Member> findByName(@Param("name") String name);
}
