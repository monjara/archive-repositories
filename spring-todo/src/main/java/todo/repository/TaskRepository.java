package todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import todo.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
    
}