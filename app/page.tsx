// pages/index.js
import Image from "next/image";
import Layout from "./component/layout";

export default function Home() {
  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <h1 style={{ marginTop: '50px' }}>Welcome to the Home Page</h1>
</div>


    </Layout>
  );
}
