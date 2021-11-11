package com.cars.cars.services;

import com.cars.cars.Models.Car;
import com.cars.cars.Repository.CaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    @Autowired
    private CaRepository caRepository;

    public List<Car> getAllCars(){
       return caRepository.findAll();
    }

    public Optional<Car> getCarById(Long id){
        return caRepository.findById(id);
    }

    public void saveCar(Car newCar){
        caRepository.save(newCar);
    }

    public void deleteCar(Long id){caRepository.deleteById(id);}
    public void updateCar(Long id,Car upcar){

        Car c = caRepository.getById(id);
        c.setModel(upcar.getModel());
        caRepository.save(c);

    }

}
