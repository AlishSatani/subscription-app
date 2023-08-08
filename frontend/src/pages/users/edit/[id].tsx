import { AuthRestrict, Layout } from "@/components/layout";
import { UserForm } from "@/modules/users";
import { useRouter } from "next/router";

const Index: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;

   return (
     <Layout forbidWhen={AuthRestrict.NEVER}>
       <UserForm id={id as string} />
     </Layout>
   );
}

export default Index;