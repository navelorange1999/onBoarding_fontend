import { gql } from "@apollo/client";

export const LOGIN = gql`
    query login($username: String!, $password: String!) {
        getAdminModelByUsernameAndPassword(username: $username, password: $password){
            _id
        }
    }
`