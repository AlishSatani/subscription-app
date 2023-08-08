import { ApolloError } from "@apollo/client";
import { Navbar } from "./NavBar";

export enum AuthRestrict {
  NEVER = 0,
  LOGGED_OUT = 1 << 0,
  LOGGED_IN = 1 << 1,
  NOT_ADMIN = 1 << 2,
}

interface LayoutProps {
  children: React.ReactNode | Function;
  forbidWhen?: AuthRestrict;
}

export interface LayoutChildProps {
  error?: ApolloError | Error;
  loading: boolean;
  currentUser?: null;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  forbidWhen = AuthRestrict.NEVER,
}) => {
  const forbidsLoggedIn = forbidWhen & AuthRestrict.LOGGED_IN;
  const forbidsLoggedOut = forbidWhen & AuthRestrict.LOGGED_OUT;
  const forbidsNotAdmin = forbidWhen & AuthRestrict.NOT_ADMIN;

  const renderChildren = (props?: LayoutChildProps) => {
    const inner = typeof children === "function" ? children(props) : children;

    if (forbidsLoggedIn || forbidsNotAdmin) {
      return (
        // ! redirect to appropriate page (home or dashboard)
        null
      );
    }

    if (forbidsLoggedOut) {
      return (
        // ! Redirect to auth page
        null
      );
    }

    return inner;
  };

  return (
    <main className="hidden flex-col md:flex container p-4">
      <Navbar />
      <section className="flex align-center justify-center p-4">
        {renderChildren()}
      </section>
    </main>
  );
};

export default Layout;
