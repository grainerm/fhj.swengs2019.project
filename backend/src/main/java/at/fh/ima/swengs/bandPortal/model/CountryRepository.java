package at.fh.ima.swengs.bandPortal.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource()
public interface CountryRepository extends PagingAndSortingRepository<Country,Long>, JpaRepository<Country, Long>, CrudRepository<Country, Long> {

    public List<Country> findByName(@Param("name") String name);


    public List<Country> findCountriesByBandsIsNotNull();

    public List<Country> findCountriesByEventsIsNotNull();

    public List<Country> findCountriesByEventsIsNotNullAndBandsIsNotNull();

    public Optional<Country> findByNameCode(@Param("nameCode") String nameCode);

}
