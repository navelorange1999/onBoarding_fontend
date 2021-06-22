import { FormLayout, TextField, Button, Card, Heading, Layout } from "@shopify/polaris";
import { useForm, Controller } from "react-hook-form";

export default function Login() {

    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div style={{width: "100%", padding: "10% 35%"}}>
            <Card sectioned>
                <Card.Section>
                    <Heading element="h1">Something Manager System</Heading>
                </Card.Section>
                <Card.Section>
                    <FormLayout>
                        <Controller
                            name="Username"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <TextField {...field} label="Username" />}
                        />
                        <Controller
                            name="Password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <TextField {...field} type="password" label="Password" />}
                        />
                        <Button fullWidth primary onClick={handleSubmit(onSubmit)}>Login</Button>
                    </FormLayout>
                </Card.Section>
                <Card.Section>
                   <Layout>
                       <Layout.Section secondary>
                            <Button fullWidth plain textAlign="left">Regsite Now!</Button>
                       </Layout.Section>
                       <Layout.Section secondary>
                            <Button fullWidth plain destructive textAlign="right">Forget Password?</Button>
                       </Layout.Section>
                   </Layout>   
                </Card.Section>
            </Card>
        </div>
    )
}