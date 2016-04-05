/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.maitland.meals;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author David
 */
public interface MealRepository extends PagingAndSortingRepository<Meal, Long> {

	List<Meal> findByName(@Param("name") String name);
}
