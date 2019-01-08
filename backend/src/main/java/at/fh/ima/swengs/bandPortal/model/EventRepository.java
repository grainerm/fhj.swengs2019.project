package at.fh.ima.swengs.bandPortal.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource()
public interface EventRepository extends PagingAndSortingRepository<Event,Long>, JpaRepository<Event, Long>, CrudRepository<Event, Long>{

    public List<Event> findByName(@Param("name") String name);
}
