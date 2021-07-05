import { gql } from "@apollo/client";

export const REGISTE = gql`
    mutation registe($username: String!, $password: String!) {
        createAdmin(username: $username, password: $password) {
            _id
        }
    }
`