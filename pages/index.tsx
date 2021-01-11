import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";

const H1 = styled.div`
  background-color: cornflowerblue;
`;

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <H1>hi Next.js 👋</H1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
