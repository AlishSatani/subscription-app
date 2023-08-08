import { RegisterInput, useRegisterMutation } from "@/generated/graphql";
import { useCookies } from "react-cookie";
import { RegisterSchema } from "../schema";
import { TOKEN_NAME } from ".";
import toast from "react-hot-toast";

export const useSignup = () => {
  const [cookies, setCookies] = useCookies();

  const [signupMutation, { data, loading, error }] = useRegisterMutation({
    onCompleted(data) {
      setCookies(TOKEN_NAME, data.register?.token);
      setCookies("currentUserId", data.register?.user?.id);

      toast.success("Singedup in successfully");
    },
    onError(error) {
      toast.error("Error signup in" + error.message);
    },
  });

  const handleSubmit = (input: RegisterInput) => {
    const sanitizedInput = RegisterSchema.cast(input, { assert: true, stripUnknown: true });

    signupMutation({
      variables: {
        input: sanitizedInput,
      },
    });
  };

  const user = data?.register?.user;

  const initialValues = RegisterSchema.cast({}, { assert: true, stripUnknown: true });

  return { initialValues, RegisterSchema, handleSubmit, user, loading, error };
};
