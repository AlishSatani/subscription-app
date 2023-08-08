import { AuthRestrict, Layout } from "@/components/layout";
import { UserForm } from "@/modules/users";

const Index: React.FC = () => {
  return (
    <Layout forbidWhen={AuthRestrict.NEVER}>
      <UserForm />
    </Layout>
  );
};

export default Index;
