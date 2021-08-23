import gql from '@apollo/client';;

const FETCH_TODO_LIST_QUERY = gql`
query List_ToDo($title: String!){
    ToDoList(title: $title) {
        id
        title
        ToDo {
            id
            name
        }
    }
}
`;
export default FETCH_TODO_LIST_QUERY;