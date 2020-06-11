<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller
{
    public function index()
    {
      return response()->json(
        Todo::where('title', 'my new todo item')->get()
      );
    }

    public function create(Request $request)
    {
      $todo = new Todo();

      $todo->title = $request->title;
      $result = $todo->save();

      return response()->json([
        'result' => $result,
        'todo' => $todo
      ]);
    }
}
