package com.cars.cars.Models;

import com.fasterxml.jackson.annotation.JsonView;
import org.w3c.dom.Text;

import javax.persistence.*;



@Entity
@Table(name="car")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonView(View.Summary.class)
    private String model;
    @JsonView(View.Summary.class)
    private String brand;
    @JsonView(View.Summary.class)
    private String picture;
    @JsonView(View.Summary.class)
    private String details;


    public Car(Long id, String model, String brand, String picture, String details) {
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.picture = picture;
        this.details = details;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Car() {
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return this.model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", model='" + model + '\'' +
                ", brand='" + brand + '\'' +
                ", picture='" + picture + '\'' +
                ", details='" + details + '\'' +
                '}';
    }
}
