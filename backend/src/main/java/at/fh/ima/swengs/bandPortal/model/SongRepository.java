package at.fh.ima.swengs.bandPortal.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource()
public interface SongRepository extends PagingAndSortingRepository<Song,Long>, JpaRepository<Song, Long>, CrudRepository<Song, Long> {

    public List<Song> findByName(@Param("name") String name);
}
