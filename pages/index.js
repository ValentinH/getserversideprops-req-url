import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export function getServerSideProps({ req, resolvedUrl, locale }) {
  return {
    props: {
      url: req.url,
      resolvedUrl,
      locale,
    },
  };
}

export default function Home(props) {
  return (
    <>
      <h1>Root</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <ul>
        <li>
          <Link href="/1">/1</Link>
        </li>
        <li>
          <Link href="/fr/1">/fr/1</Link>
        </li>
        <li>
          <Link href="/fr/simple-page">/fr/simple-page</Link>
        </li>
        <li>
          <Link href="/fr/simple-nested/example">/fr/simple-nested/example</Link>
        </li>
      </ul>
    </>
  );
}
