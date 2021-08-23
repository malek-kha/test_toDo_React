import React from "react"
import { useQuery } from "@apollo/client";
import FETCH_ALL_TODO_LIST_QUERY from "../graphQl/queries/allTodoList"


const ListToDo = (title) => {
const { data, loading, error } = useQuery(FETCH_ALL_TODO_LIST_QUERY, {
    variables: { title },
  });
  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        ERROR:
        {error.message}
      </p>
    );
  }
  const toDo = data.ToDoList;
  return (
    <div className="main">
    <div className="col-sm-4" key={toDo.id}>
        <div className='pa3 bg-black-05 ma3'>
            <div className='book'>
                <h2 align="center"> {toDo.title}&nbsp; </h2>
                <p align="center">  {toDo.ToDo.name}</p>
            </div>
        </div>
    </div>
    </div>
);     
};
export default ListToDo;