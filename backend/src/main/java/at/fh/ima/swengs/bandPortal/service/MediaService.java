package at.fh.ima.swengs.bandPortal.service;

import at.fh.ima.swengs.bandPortal.model.Media;
import at.fh.ima.swengs.bandPortal.model.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class MediaService {

    private static final String UPLOAD_FOLDER = "uploads";

    @Autowired
    private MediaRepository mediaRepository;


    /**
     * Save a media.
     *
     * @param media the entity to save
     * @return the persisted entity
     */
    public Media save(Media media) {
        return mediaRepository.save(media);
    }


    /**
     * Get one media by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public Optional<Media> findOne(Long id) {
        return mediaRepository.findById(id);
    }

    /**
     * Delete the media by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        mediaRepository.deleteById(id);
    }

    public Media createMedia(MultipartFile multipartFile) throws IOException {
        Media dbMedia = new Media();
        dbMedia.setOriginalFileName(multipartFile.getOriginalFilename());
        dbMedia.setContentType(multipartFile.getContentType());
        dbMedia.setSize(multipartFile.getSize());
        Media savedDbMedia = save(dbMedia);

        File dest = retrieveMediaFile(savedDbMedia);
        try (FileOutputStream fos = new FileOutputStream(dest)) {
            fos.write(multipartFile.getBytes());
        }
        return savedDbMedia;
    }

    public File retrieveMediaFile(Media media) {
        File uploadsDir = retrieveUploadsDirectory();
        String filePath = uploadsDir.getAbsolutePath() + "/" + media.getId();
        return new File(filePath);
    }

    private File retrieveUploadsDirectory() {
        String uploadsDirPath = UPLOAD_FOLDER;
        File uploadsDir = new File(uploadsDirPath);
        if (!uploadsDir.exists()) {
            uploadsDir.mkdir();
        }
        return uploadsDir;
    }

    public Set<Media> getMedia(Set<Long> dtos) {
        Set<Media> entities = new HashSet<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(mediaRepository.findById(dto).get()));
        }
        return entities;
    }


}
