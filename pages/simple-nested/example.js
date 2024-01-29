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

export default function Page(props) {
  return (
    <>
      <h1>/simple-nested/example</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>

      <Link href="/">Go back to /</Link>
    </>
  );
}
