import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
      <h1>/[id]/</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>

      <Link href="/">Go back to /</Link>
    </>
  );
}
