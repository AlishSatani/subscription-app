import { AuthRestrict, Layout } from "@/components/layout";
import { UsersTable } from "@/modules/users";

const Index: React.FC = () => {
  return (
    <Layout forbidWhen={AuthRestrict.NEVER}>
      <UsersTable />
    </Layout>
  );
};

export default Index;
