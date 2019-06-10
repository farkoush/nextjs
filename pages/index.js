import Layout from '../comps/MyLayout.js';
const aboutPageContent = <p>This is the about page</p>;
export default function Index() {
  return (
    // <Layout>
    //   <p>Hello Next.js</p>
    //   <div>Helloo Next.js</div>
    // </Layout>
    <Layout children={aboutPageContent} />
  );
}