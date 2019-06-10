import Layout from '../comps/MyLayout.js';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.children}`}>
      <a>{props.children}</a>
    </Link>
  </li>
);
export default function Blog(){
  return (
    <layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink children="Hello Next.js" />
        <PostLink children="Learn Next.js is awesome" />
        <PostLink>Deploy apps with Zeit</PostLink>
      </ul>
    </layout>
  );
}