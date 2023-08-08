import { AuthRestrict, Layout } from "@/components/layout";

interface HomeProps {
  children: React.ReactNode;
}

// ! currently jwt is not authenticating but we have jwt store on each login adn sighup in cookies, so i have't passed auth restriction to layout

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout forbidWhen={AuthRestrict.NEVER}>
      Home Page! Please discover other plages.
    </Layout>
  );
};

export default Home;
