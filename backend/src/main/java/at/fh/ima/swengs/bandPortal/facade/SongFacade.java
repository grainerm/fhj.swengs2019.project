package at.fh.ima.swengs.bandPortal.facade;

import at.fh.ima.swengs.bandPortal.dto.SongDTO;
import at.fh.ima.swengs.bandPortal.model.Song;
import at.fh.ima.swengs.bandPortal.service.AlbumService;
import at.fh.ima.swengs.bandPortal.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service()
@Transactional
public class SongFacade {

    @Autowired
    private SongService songService;

    @Autowired
    private AlbumService albumService;

    void mapDtoToEntity(SongDTO dto, Song entity){
        entity.setName(dto.getName());
        entity.setAlbum(albumService.findById(dto.getAlbum()).get());
        entity.setLength(dto.getLength());
    }

    private void mapEntityToDto(Song entity, SongDTO dto){
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setAlbum(entity.getAlbum().getAlbumID());
        dto.setLength(entity.getLength());
    }

    public SongDTO update(Long id, SongDTO dto) {
        Song entity = songService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(songService.save(entity), dto);
        return dto;
    }

    public SongDTO create(SongDTO dto) {
        Song entity = new Song();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(songService.save(entity), dto);
        return dto;
    }

    public SongDTO getById(Long id) {
        Song entity = songService.findById(id).get();
        SongDTO dto = new SongDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }
}
