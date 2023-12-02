<?php

namespace Traits;

trait DisplayDecorator
{
    public function decorateDisplay($brand, $model, $engine)
    {
        echo "---- Car Details ----\n";
        echo "Brand\t: $brand\n";
        echo "Model\t: $model\n";
        echo "Engine\t: $engine";
    }
}
