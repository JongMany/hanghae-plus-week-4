import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import TestImage from "../assets/test-image.png";

export default function OtherPage() {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>{id} 페이지</title>
        <meta name="description" content="동적 파라미터 테스트" />
        {/* Open Graph */}
        <meta property="og:title" content={`${id} 페이지`} />
        <meta property="og:description" content={`${id} 페이지`} />
        <meta property="og:image" content={TestImage} />
        <meta
          property="og:url"
          content="https://seo-optimization-test.netlify.app/"
        />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta property="twitter:title" content="동적 파라미터 테스트" />
        <meta property="twitter:description" content={`${id} 페이지`} />
        <meta property="twitter:image" content={TestImage} />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <h1>{id} Page</h1>
      <Link to="/">Home</Link>
    </>
  );
}
