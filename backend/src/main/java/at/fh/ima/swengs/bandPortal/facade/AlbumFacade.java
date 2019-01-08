package at.fh.ima.swengs.bandPortal.facade;

import at.fh.ima.swengs.bandPortal.dto.AlbumDTO;
import at.fh.ima.swengs.bandPortal.model.Album;
import at.fh.ima.swengs.bandPortal.service.AlbumService;
import at.fh.ima.swengs.bandPortal.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service()
@Transactional
public class AlbumFacade {

    @Autowired
    private AlbumService albumService;

    @Autowired
    private SongService songService;

    void mapDtoToEntity(AlbumDTO dto, Album entity) {
        entity.setBand(dto.getBand());
        entity.setName(dto.getName());
        entity.setReleaseYear(dto.getReleaseYear());
        entity.setSongs(songService.getSongs(dto.getSongs()));
    }

    private void mapEntityToDto(Album entity, AlbumDTO dto) {
        dto.setAlbumID(entity.getAlbumID());
        dto.setBand(entity.getBand());
        dto.setName(entity.getName());
        dto.setReleaseYear(entity.getReleaseYear());
        dto.setSongs(entity.getSongs().stream().map((s) -> s.getId()).collect(Collectors.toList()));
    }

    public AlbumDTO update(Long id, AlbumDTO dto) {
        Album entity = albumService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(albumService.save(entity), dto);
        return dto;
    }

    public AlbumDTO create(AlbumDTO dto) {
        Album entity = new Album();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(albumService.save(entity), dto);
        return dto;
    }

    public AlbumDTO getById(Long id) {
        Album entity = albumService.findById(id).get();
        AlbumDTO dto = new AlbumDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }
}
