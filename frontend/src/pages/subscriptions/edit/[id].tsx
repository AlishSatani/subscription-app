import { AuthRestrict, Layout } from "@/components/layout";
import { SubscriptionForm } from "@/modules/subscriptions";
import { useRouter } from "next/router";

const Index: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <Layout forbidWhen={AuthRestrict.NEVER}>
      <SubscriptionForm id={id as string} />
    </Layout>
  );
};

export default Index;
