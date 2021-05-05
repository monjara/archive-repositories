package todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import todo.entity.Folder;

public interface FolderRepository extends JpaRepository<Folder, Long> {
    
}