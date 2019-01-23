package at.fh.ima.swengs.bandPortal.facade;

import at.fh.ima.swengs.bandPortal.dto.BandDTO;
import at.fh.ima.swengs.bandPortal.dto.UserDTO;
import at.fh.ima.swengs.bandPortal.model.BandRepository;
import at.fh.ima.swengs.bandPortal.model.User;
import at.fh.ima.swengs.bandPortal.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service()
@Transactional
public class UserFacade {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BandRepository bandRepository;

    @Autowired
    private UserDetailsService userDetailsService;

    void mapDtoToEntity(UserDTO dto, User entity) {
        entity.setUsername(dto.getUsername());
        if(!dto.getPassword().equals(entity.getPassword()))
            entity.setPassword(new BCryptPasswordEncoder().encode(dto.getPassword()));
        entity.setAdmin(dto.isAdmin());
        if(dto.getBand_id() != null)
            entity.setBand(bandRepository.findById(dto.getBand_id()).get());
    }

    void mapEntityToDto(User entity, UserDTO dto) {
        dto.setId(entity.getId());
        dto.setUsername(entity.getUsername());
        dto.setPassword(entity.getPassword());
        if(entity.getBand() != null)
            dto.setBand_id(entity.getBand().getId());
        dto.setAdmin(entity.isAdmin());
    }

    public UserDTO update(Long id, UserDTO dto) {
        User entity = userRepository.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(userRepository.save(entity), dto);
        return dto;
    }

    public UserDTO create(UserDTO dto) {
        User entity = new User();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(userRepository.save(entity), dto);
        return dto;
    }

    public UserDTO getById(Long id) {
        User entity = userRepository.findById(id).get();
        UserDTO dto = new UserDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }

public UserDTO getUserBand() {
        String username = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        User entity = userRepository.findByUsername(username);
    UserDTO dto = new UserDTO();
    mapEntityToDto(entity, dto);
    return dto;
    }
}
