import { ApolloProvider } from '@apollo/client';
import React from "react";
import { client } from "./client";

export const GraphQLProvider: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};