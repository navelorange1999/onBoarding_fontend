import React, {FC} from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@shopify/polaris";

export interface ICustomTextFieldProps 
    extends Omit<TextFieldProps, 'onChange' | 'readonly' | 'disabled'> {
    name: string;
    defaultValue?: any;
    disable?: boolean;
    readonly?: boolean;
    onChange?: (value:string) => void;
}

const CustomTextField: FC<ICustomTextFieldProps> = ({
    name,
    defaultValue,
    onChange: handleChange,
    ...rest
}) => {
    const {control, formState} = useFormContext();
    return (
        <Controller 
            control={control}
            name={name}
            defaultValue={defaultValue ? defaultValue : ""}
            render={({
                field: {onChange, value}
            }) => {
                return (
                    <TextField 
                        name={name}
                        value={value}
                        onChange={(newValue) => {
                            onChange(newValue);
                            handleChange && handleChange(newValue)
                        }}
                        error={formState.errors[`${name}`]?.message}
                        {...rest} 
                    />
                )
            }} 
            />
    )
}

export default CustomTextField;