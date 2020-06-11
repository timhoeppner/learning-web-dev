<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    public function getDoneAttribute($value)
    {
      return (bool)$value;
    }

    public function getDeletedAttribute($value)
    {
      return (bool)$value;
    }
}
