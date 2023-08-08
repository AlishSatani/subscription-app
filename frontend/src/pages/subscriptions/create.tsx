import { AuthRestrict, Layout } from "@/components/layout";
import { SubscriptionForm } from "@/modules/subscriptions";

const Index: React.FC = () => {
  return (
    <Layout forbidWhen={AuthRestrict.NEVER}>
      <SubscriptionForm />
    </Layout>
  );
};

export default Index;
