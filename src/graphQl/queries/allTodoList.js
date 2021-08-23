import {gql} from '@apollo/client';;

const FETCH_ALL_TODO_LIST_QUERY = gql`
{
    AllToDoList{
            id
            title
            ToDo {
              id
              name
            }
        }
}
`;
export default FETCH_ALL_TODO_LIST_QUERY;