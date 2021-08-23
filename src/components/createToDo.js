import React from "react"
import {useMutation } from "@apollo/client";
import FETCH_ALL_TODO_LIST_QUERY from "../graphQl/queries/allTodoList";
import ADD_TODO_MUTATION from "../graphQl/mutations/createToDo";


const CreateToDo = () => {
  const [createToDo] = useMutation(ADD_TODO_MUTATION,
    { refetchQueries: [{ query: FETCH_ALL_TODO_LIST_QUERY }] });
  return (
    <div className="main">
    </div>
);     
};
export default CreateToDo;