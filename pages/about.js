import Layout from '../comps/MyLayout';
import Layout2 from '../comps/MyLayout';
// const Page = () => <p>Hello Next.js</p>;
// export default Layout2(Page);

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
