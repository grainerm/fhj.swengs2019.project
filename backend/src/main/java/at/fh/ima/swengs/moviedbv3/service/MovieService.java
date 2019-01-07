package at.fh.ima.swengs.moviedbv3.service;

import at.fh.ima.swengs.moviedbv3.model.Movie;
import at.fh.ima.swengs.moviedbv3.model.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service()
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public Set<Movie> getMovies(Set<Long> dtos) {
        Set<Movie> entities = new HashSet<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(movieRepository.findById(dto).get()));
        }
        return entities;
    }

}
