import { Container } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
export default function Page(props) {
  const { title, children } = props;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container>{children}</Container>
    </>
  );
}
