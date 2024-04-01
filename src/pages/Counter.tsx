import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TestImage from "../assets/test-image.png";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>카운터페이지</title>
        <meta name="description" content="카운터페이지" />
        {/* Open Graph */}
        <meta property="og:title" content="카운터페이지" />
        <meta property="og:description" content="카운터페이지입니다." />
        <meta property="og:image" content={TestImage} />
        <meta
          property="og:url"
          content="https://seo-optimization-test.netlify.app/"
        />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta property="twitter:title" content="카운터페이지" />
        <meta property="twitter:description" content="카운터페이지입니다." />
        <meta property="twitter:image" content={TestImage} />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>
        <span>Count: {count}</span>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
