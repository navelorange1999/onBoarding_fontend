import React, { useState } from "react";
import { FormLayout, Button, Card, Heading, Stack } from "@shopify/polaris";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import CustomTextField from "@/components/Forms/CustomTextField";
import CustomeModal from "@/components/CustomModal";
import { LOGIN}  from "@/graphql/schemas/user/queries";
import { REGISTE } from "@/graphql/schemas/user/mutations";
import { client } from "@/graphql";
import { useUserContext } from "@/components/UserAccountProvider/utils";

const loginSchema = yup.object().shape({
    username: yup.string().trim().required(),
    password: yup.string().trim().required(),
  });
  
const registeSchema = yup.object().shape({
    username: yup.string().trim().required().max(6, "The length is not more than 6!"),
    password: yup.string().trim().required().min(3, "The length is not less than 3!"),
    comfirm_password: yup.string().trim().when("password", (password, schema) => {
        return password ? schema.oneOf([password], "The two password entries need to be consistent").required()
                        : schema
    })
})

export default function Login() {
    const loginMethods = useForm({
        resolver: yupResolver(loginSchema)
    });
    const registeMethods = useForm({
        resolver: yupResolver(registeSchema)
    })
    const {_id, setId} = useUserContext();
    const [active, setActive] = useState(false);
    

    const login = (querise: any) => {
        client.query({
            query: LOGIN,
            variables: {
                ...querise
            }
        }).then(res => {
            setId(res.data.getAdminModelByUsernameAndPassword._id);
        })
    }

    const registe = (params: any) => {
        client.mutate({
            mutation: REGISTE,
            variables: {
                username: params.username,
                password: params.password
            }
        }).then(res => {
            setId(res.data.createAdmin._id);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setActive(false);
        })
        
    }

    const handleClose = () => {
        setActive(false);
    }


    return (
        <div style={{width: "100%", padding: "10% 35%"}}>
            <Card sectioned>
                <Card.Section>
                    <Heading element="h1">Something Manager System</Heading>
                </Card.Section>
                <Card.Section>
                    <FormProvider {...loginMethods}>
                        <FormLayout>
                            <CustomTextField 
                                label="Username" 
                                name="username"
                                 />
                            <CustomTextField  
                                label="Password" 
                                name="password" 
                                type="password"/>
                            <Button fullWidth primary onClick={loginMethods.handleSubmit(login)}>Login</Button>
                        </FormLayout>
                    </FormProvider>
                </Card.Section>
                <Card.Section>
                   <Stack distribution="equalSpacing">
                        <Button onClick={() => {setActive(true)}} fullWidth plain>Regsite Now!</Button>
                        <Button onClick={() => {console.log(_id);}}fullWidth plain destructive>Forget Password?</Button>
                   </Stack>   
                </Card.Section>
            </Card>
            <CustomeModal 
                title="Regsite Now!" 
                active={active} 
                handleClose={handleClose}
                handleSubmit={registeMethods.handleSubmit(registe)}
            >
                <FormProvider {...registeMethods} >
                        <FormLayout>
                            <CustomTextField
                                requiredIndicator 
                                label="Username" 
                                name="username"/>
                            <CustomTextField 
                                requiredIndicator
                                label="Password" 
                                name="password" 
                                type="password"/>
                            <CustomTextField 
                                requiredIndicator 
                                label="Comfirm Password" 
                                name="comfirm_password" 
                                type="password"/>
                        </FormLayout>
                    </FormProvider>
            </CustomeModal>
        </div>
    )
}