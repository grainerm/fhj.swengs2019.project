package at.fh.ima.swengs.moviedbv3.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface MovieRepository extends PagingAndSortingRepository<Movie, Long>, JpaRepository<Movie, Long>, CrudRepository<Movie, Long> {
}
