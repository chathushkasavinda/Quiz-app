package com.ijse.quizonline.repository;

import com.ijse.quizonline.model.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    @Query("select DISTINCT q.subject FROM Question q")
    List<String> findDistinctSubject();

    Page<Question> findBySubject(String subjects, Pageable pageable);

}
