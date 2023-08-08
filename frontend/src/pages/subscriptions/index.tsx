import { AuthRestrict, Layout } from "@/components/layout";
import { SubsctriptionsTable } from "@/modules/subscriptions";

const Index: React.FC = () => {
  return (
    <Layout forbidWhen={AuthRestrict.NEVER}>
      <SubsctriptionsTable />
    </Layout>
  );
};

export default Index;
