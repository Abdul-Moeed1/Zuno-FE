import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm, type SubmitHandler } from "react-hook-form"
import type { InferType } from "yup"
import * as yup from "yup"
import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/inputs/Input"
import { AuthService } from "../../../generated/services/AuthService"

export const Login = () => {

    const schema = yup.object({
        email: yup.string().required("Email is required").email("Please enter a valid email"),
        password: yup.string().required("Password is required"),
    })

    type loginForm = InferType<typeof schema>;


    const form = useForm<loginForm>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema),
        mode: "onSubmit"
    })

    const onSubmit: SubmitHandler<loginForm> = async (values) => {
        const res = await AuthService.authControllerLogin(values)
        console.log("res", res);

    }



    return (
        <>
            <div className="flex flex-col gap-5 max-w-3xl mx-auto my-auto h-screen">
                <Controller
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <Input {...field} innerLabel="Email" error={fieldState.error?.message} />
                    )}
                />
                <Controller
                    control={form.control}
                    name="password"
                    render={({ field, fieldState }) => (
                        <Input {...field} innerLabel="Password" error={fieldState.error?.message} type="password" />
                    )}
                />
                <Button onClick={form.handleSubmit(onSubmit)} className="" disabled={form.formState.isSubmitting}> {form.formState.isSubmitting ? "Submitting" : "Login"} </Button>
            </div>
        </>
    )
}