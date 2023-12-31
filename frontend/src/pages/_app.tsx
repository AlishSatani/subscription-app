import { WithApollo } from "@/modules/apollo";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-tailwind/react";
import type { Metadata, NextPage } from "next";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const App: NextPage<AppProps> = ({ Component, ...pageProps }) => {
  return (
    <WithApollo>
      {({ client }: { client: ApolloClient<any> }) => {
        return (
          <ApolloProvider client={client}>
            <ThemeProvider>
              <Component {...pageProps} />
              <Toaster />
            </ThemeProvider>
          </ApolloProvider>
        );
      }}
    </WithApollo>
  );
};

export default App;
