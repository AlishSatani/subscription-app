import { FormFieldLayout, FormLayout } from "@/components/forms";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Form } from "formik";
import { useLogin } from "./hooks";

const LoginForm = () => {
  const { handleSubmit, loading, initialValues, validationSchema } = useLogin();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Card color="transparent" shadow={false} className="m-6">
        <Typography variant="h4" color="blue-gray">
          Log In
        </Typography>
        <FormLayout
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <FormFieldLayout label="Email" name="email" />
                <FormFieldLayout
                  type="password"
                  label="Password"
                  name="password"
                />
              </div>
              <Button
                className="mt-6"
                fullWidth
                type="submit"
                disabled={loading}
              >
                Log In
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Don&apos;t have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign Up
                </a>
              </Typography>
            </Form>
          )}
        </FormLayout>
      </Card>
    </div>
  );
};

export default LoginForm;
