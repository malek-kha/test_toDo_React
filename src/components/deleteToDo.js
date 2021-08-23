import React from "react"
import {useMutation } from "@apollo/client";
import FETCH_ALL_TODO_LIST_QUERY from "../graphQl/queries/allTodoList";
import DELETE_TODO_MUTATION from "../graphQl/mutations/deleteToDo";


const CreateToDo = () => {
  const [deleteToDo] = useMutation(DELETE_TODO_MUTATION,
    { refetchQueries: [{ query: FETCH_ALL_TODO_LIST_QUERY }] });
  return (
    <div className="main">
    </div>
);     
};
export default CreateToDo;