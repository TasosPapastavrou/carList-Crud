package com.cars.cars.Repository;

import com.cars.cars.Models.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CaRepository extends JpaRepository<Car,Long> {
}
