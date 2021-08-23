import {gql} from '@apollo/client';;

const DELETE_TODO_MUTATION = gql`
mutation deleteToDO($id: ID!) {
    deleteToDO(id: $id) {
        id
    }
}
`;
export default DELETE_TODO_MUTATION;