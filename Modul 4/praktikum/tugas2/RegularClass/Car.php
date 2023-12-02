<?php

namespace RegularClass;

include 'tugas2/AbstractClass/Vehicle.php';
include 'tugas2/Traits/DisplayDecorator.php';

use AbstractClass\Vehicle;
use Traits\DisplayDecorator;


class Car extends Vehicle
{
    use DisplayDecorator;
    protected $brand;
    protected $model;
    protected $engineModel;

    public function __construct($brand, $model, $engine)
    {
        $this->brand = $brand;
        $this->model = $model;
        $this->engineModel = $engine;
    }

    public function display()
    {
        $this->decorateDisplay(brand: $this->brand, model: $this->model, engine: $this->engineModel);
    }
}
