import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SEO 최적화 테스트</title>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="SEO 최적화 테스트" />
        {/* Open Graph */}
        <meta property="og:title" content="SEO 최적화 테스트" />
        <meta
          property="og:description"
          content="SEO 최적화 테스트 연습입니다."
        />
        <meta
          property="og:image"
          content="https://fastly.picsum.photos/id/344/400/300.jpg?hmac=XxhRgUM7_wftSba_ilWJuQcRl1X8kBFZKOIwETXPKRs"
        />
        <meta
          property="og:url"
          content="https://seo-optimization-test.netlify.app/"
        />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta property="twitter:title" content="SEO 최적화 테스트" />
        <meta
          property="twitter:description"
          content="SEO 최적화 테스트 연습입니다."
        />
        <meta
          property="twitter:image"
          content="https://fastly.picsum.photos/id/344/400/300.jpg?hmac=XxhRgUM7_wftSba_ilWJuQcRl1X8kBFZKOIwETXPKRs"
        />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>Home</div>
      <img
        src="https://fastly.picsum.photos/id/344/400/300.jpg?hmac=XxhRgUM7_wftSba_ilWJuQcRl1X8kBFZKOIwETXPKRs"
        alt="test"
        width="300px"
        height="300px"
      />
      <Link to="/counter">Counter</Link>
    </>
  );
}
