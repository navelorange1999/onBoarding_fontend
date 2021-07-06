import { gql } from "@apollo/client";

export const LOGIN = gql`
    query login($username: String!, $password: String!) {
        getAdminModelByUsernameAndPassword(username: $username, password: $password){
            _id
        }
    }
`

export const GETALLADMIN = gql`
    query getAllAdmin {
        getAllAdmin {
            _id,
            username
        }
    }
`