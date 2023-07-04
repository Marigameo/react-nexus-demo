import CommentsList from '@/components/CommentsList';
import { Suspense } from 'react'
import Loading from './loading';
import styles from './Home.module.css';
import Gallery from '@/components/Gallery';
import GalleryLoader from '@/components/GalleryLoader';

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className={styles['main-content']}>
        <h1 className='truncate text-xl font-medium text-white lg:text-2xl'>Streaming SSR Simplified with Next.JS </h1>

        <p>React 18 includes architectural improvements to React server-side rendering (SSR) performance. Suspense-enabled frameworks like Relay and Next.js have even simplified it. This article explains how <a href="https://nextjs.org/">Next.js</a> simplifies SSR streaming.</p>

        <p>The special file <code>loading.js</code> helps you create meaningful Loading UI with React Suspense.</p>

        <p>In addition to <code>loading.js</code>, you can also manually create Suspense Boundaries for your own UI components. The App Router supports streaming with Suspense for both Node.js and Edge runtimes.</p>

        <p>So what is streaming SSR?</p>

        <p>With SSR, there&apos;s a series of steps that need to be completed before a user can see and interact with a page:</p>
        <ol>
          <li>First, all data for a given page is fetched on the server.</li>
          <li>The server then renders the HTML for the page.</li>
          <li>The HTML, CSS, and JavaScript for the page are sent to the client.</li>
          <li>A non-interactive user interface is shown using the generated HTML and CSS.</li>
          <li>Finally, React hydrates the user interface to make it interactive.</li>
        </ol>

        <p>These steps are sequential and blocking, meaning the server can only render the HTML for a page once all the data has been fetched. And, on the client, React can only hydrate the UI once the code for all components in the page has been downloaded.</p>

        <p>Streaming allows you to break down the page&apos;s HTML into smaller chunks and progressively send those chunks from the server to the client.</p>

        <p>By using Suspense, you get the benefits of:</p>
        <ul>
          <li>Streaming Server Rendering - Progressively rendering HTML from the server to the client.</li>
          <li>Selective Hydration - React prioritizes what components to make interactive first based on user interaction.</li>
        </ul>

        <p>For more Suspense examples and use cases, please see the <a href="https://reactjs.org/docs/react-api.html#reactsuspense">React Documentation</a>.</p>

        {/* Second Section */}
        <section className={styles.container}>
          <Suspense fallback={<GalleryLoader />}>
            <Gallery />
          </Suspense>
        </section>

        <section>
          <Suspense fallback={<Loading />}>
            <CommentsList />
          </Suspense>
        </section>
      </main>
    </>
  );
}
