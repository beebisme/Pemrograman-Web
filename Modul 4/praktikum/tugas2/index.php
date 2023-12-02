<?php

include 'tugas2/RegularClass/Car.php';

use RegularClass\Car;

$car1 = new Car(brand: "Nissan", model: "Skyline GT-R V⋅spec II", engine: "RB26DETT");
$car1->display();
