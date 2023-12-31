import { LoginInput, useLoginMutation } from "@/generated/graphql";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { LoginSchema } from "../schema";
import { TOKEN_NAME } from ".";

export const useLogin = () => {
  const [cookies, setCookies] = useCookies();

  const router = useRouter();

  const [loginMutation, { data, loading, error }] = useLoginMutation({
    onCompleted(data) {
      setCookies(TOKEN_NAME, data.login?.token);
      setCookies("currentUserId", data.login?.user?.id);

      toast.success("Logged in successfully");

      router.replace("/");
    },
    onError(error) {
      toast.error("Error logging in" + error.message);
    },
  });

  const handleSubmit = (input: LoginInput) => {
    const sanitizedInput = LoginSchema.cast(input, { assert: true, stripUnknown: true });

    loginMutation({
      variables: {
        input: sanitizedInput,
      },
    });
  };

  const user = data?.login?.user;

  const initialValues = LoginSchema.cast({}, { assert: true, stripUnknown: true });

  return { initialValues, validationSchema: LoginSchema, handleSubmit, user, loading, error };
};
