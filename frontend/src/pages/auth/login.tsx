import { AuthRestrict, Layout } from "@/components/layout";
import { LoginForm } from "@/modules/auth";

const login = () => {
  return (
    <Layout forbidWhen={AuthRestrict.NEVER}>
      <LoginForm />
    </Layout>
  );
};

export default login;
