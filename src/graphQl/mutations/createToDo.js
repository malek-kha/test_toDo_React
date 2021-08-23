import {gql} from '@apollo/client';;

const ADD_TODO_MUTATION = gql`
mutation AddToDO($name: String!) {
    createToDo(
        name: $name
    ) {
        id
        title
        ToDo {
            id
            name
        }
    }
}
`;
export default ADD_TODO_MUTATION;