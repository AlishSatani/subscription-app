import { FormFieldLayout, FormLayout } from "@/components/forms";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Form } from "formik";
import { useUserForm } from "../users/hooks/useUserForm";

const SignUpForm = ({ id }: { id?: string }) => {
  const { initialvalues, validationSchema, handleSubmit, loading } =
    useUserForm(id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Card color="transparent" shadow={false} className="m-6">
        <Typography variant="h4" color="blue-gray">
          {id ? "Edit User" : "Create User"}
        </Typography>
        <FormLayout
          onSubmit={handleSubmit}
          initialValues={initialvalues}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {() => (
            <Form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <FormFieldLayout label="Name" name="name" />
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
                Register
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign In
                </a>
              </Typography>
            </Form>
          )}
        </FormLayout>
      </Card>
    </div>
  );
};

export default SignUpForm;
