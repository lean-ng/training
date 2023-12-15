import Layout from '@theme/Layout';
import styles from './index.module.css';
import Heading from '@theme/Heading';

export default function Home() {
  return (
    <Layout title="Startseite">
      <main className={styles.container}>
        <Heading as="h1">Angular Training</Heading>
      </main>
    </Layout>
  );
}
