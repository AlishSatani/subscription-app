import { AuthRestrict, Layout } from "@/components/layout";
import { SignupForm } from "@/modules/auth";

const signup = () => {
  return (
    <Layout forbidWhen={AuthRestrict.NEVER}>
      <SignupForm />
    </Layout>
  );
};

export default signup;
