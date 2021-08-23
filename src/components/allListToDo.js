import React from "react"
import { useQuery } from "@apollo/client";
import FETCH_ALL_TODO_LIST_QUERY from "../graphQl/queries/allTodoList"


const AllListToDo = () => {
const { data, loading, error } = useQuery(FETCH_ALL_TODO_LIST_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        ERROR:
        {error.message}
      </p>
    );
  }
  const toDo = data.AllToDoList;
  return (
    <div className="main">
        {toDo.map(post => (
                <div className="col-sm-4" key={post.id}>
                    <div className='pa3 bg-black-05 ma3'>
                        <div className='book'>
                            <h2 align="center"> {post.title}&nbsp; </h2>
                            <p align="center">  {post.ToDo.name}</p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
);     
};
export default AllListToDo;