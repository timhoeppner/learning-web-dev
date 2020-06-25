<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller
{
    public function index()
    {
      return response()->json(
        Todo::where('deleted', false)->get()
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

    public function state(Request $request, Todo $todo)
    {
      $todo->done = $request->done;
      $result = $todo->save();

      return response()->json([
        'result' => $result,
        'todo' => $todo
      ]);
    }

    public function delete(Todo $todo)
    {
      $todo->deleted = true;
      $result = $todo->save();

      return response()->json([
        'result' => $result,
        'todo' => $todo,
        'all' => Todo::where('deleted', false)->get()
      ]);
    }
}
