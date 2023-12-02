<?php

namespace AbstractClass;

abstract class Vehicle
{
    protected $brand;
    protected $model;

    public function __construct($brand, $model)
    {
        $this->brand = $brand;
        $this->model = $model;
    }

    abstract public function display();
}
