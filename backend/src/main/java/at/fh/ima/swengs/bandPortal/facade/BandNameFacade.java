package at.fh.ima.swengs.bandPortal.facade;

import at.fh.ima.swengs.bandPortal.dto.BandNameDTO;
import at.fh.ima.swengs.bandPortal.model.Band;
import at.fh.ima.swengs.bandPortal.service.BandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service()
@Transactional
public class BandNameFacade {

    @Autowired
    private BandService bandService;

    void mapDtoToEntity(BandNameDTO dto, Band entity) {
        entity.setName(dto.getName());
        entity.setBandPicture("https://stmed.net/sites/default/files/band-%28music%29-wallpapers-30255-4113516.jpg");
    }

    void mapEntityToDto(Band entity, BandNameDTO dto) {
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setBandPicture(entity.getBandPicture());
    }

    public BandNameDTO update(Long id, BandNameDTO dto) {
        Band entity = bandService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(bandService.save(entity), dto);
        return dto;
    }

    public BandNameDTO create(BandNameDTO dto) {
        Band entity = new Band();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(bandService.save(entity), dto);
        return dto;
    }

    public BandNameDTO getById(Long id) {
        Band entity = bandService.findById(id).get();
        BandNameDTO dto = new BandNameDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }
}
