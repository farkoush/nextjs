import Layout from '../comps/MyLayout';
const contactPageContent = <p>This is the contact page</p>;
export default function Contact(){
    return(
        <Layout children = {contactPageContent} />
    );
}