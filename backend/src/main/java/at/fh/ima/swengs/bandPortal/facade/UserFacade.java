package at.fh.ima.swengs.bandPortal.facade;

import at.fh.ima.swengs.bandPortal.dto.UserDTO;
import at.fh.ima.swengs.bandPortal.model.User;
import at.fh.ima.swengs.bandPortal.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service()
@Transactional
public class UserFacade {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    void mapDtoToEntity(UserDTO dto, User entity) {
        entity.setId(dto.getId());
        entity.setUsername(dto.getUsername());
        entity.setPassword(dto.getPassword());
        entity.setAdmin(dto.isAdmin());
        entity.setBand(dto.getBand());
    }

    void mapEntityToDto(User entity, UserDTO dto) {
        dto.setId(entity.getId());
        dto.setUsername(entity.getUsername());
        dto.setPassword(entity.getPassword());
        dto.setBand(entity.getBand());
    }
/*
    public UserDTO update(Long id, UserDTO dto) {
        User entity = userDetailsService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(userDetailsService.save(entity), dto);
        return dto;
    }

    public UserDTO create(UserDTO dto) {
        User entity = new User();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(userDetailsService.save(entity), dto);
        return dto;
    }

    public UserDTO getById(Long id) {
        User entity = userDetailsService.findById(id).get();
        UserDTO dto = new UserDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }*/


}
