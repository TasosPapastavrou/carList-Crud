package com.cars.cars.Controller;

import com.cars.cars.Models.Car;
import com.cars.cars.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class CarController {


    @Autowired
    private CarService carService;

    @GetMapping("getCars")
    public List<Car> getCarList(){
        List<Car> allcars = carService.getAllCars();
        return allcars;
    }

    @GetMapping("Car/{id}")
    public Optional<Car> getCarBID(@PathVariable(value = "id") Long Carid){
        return carService.getCarById(Carid);

    }

    @PostMapping("newCar")
    public String setNewCar(@RequestBody Car newcar){
            carService.saveCar(newcar);
            return "new record" +" "+
                    newcar;
    }

    @GetMapping("deleteCar/{id}")
    public String deleteCar(@PathVariable(value="id")Long Carid){
        carService.deleteCar(Carid);
        return "i delete car from list";
    }

    @PutMapping("/update/{id}")
    public String updateCar(@RequestBody Car upCar,@PathVariable(value = "id")Long carid ){
        carService.updateCar(carid,upCar);
        return "i update the car value";
    }

}
