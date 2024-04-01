import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TestImage from "../assets/test-image.png";

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
        <meta property="og:image" content={TestImage} />
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
        <meta property="twitter:image" content={TestImage} />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>Home</div>
      <Link to="/counter">Counter</Link>
    </>
  );
}
