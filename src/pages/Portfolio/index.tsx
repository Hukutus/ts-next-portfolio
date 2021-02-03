import React, { FC, useEffect, useState } from "react";
import { PortfolioCard } from "@/layouts/PortfolioLayout";
import Colors from "@/utils/Colors";
import { getPosts, PostInfo } from "@/api";

const Portfolio: FC = () => {
  const [posts, setPosts] = useState<PostInfo[]>([]);

  useEffect(() => {
    (async function asyncFunction() {
      setPosts(await getPosts());
    })();
  }, []);

  return (
    <>
      <div className="portfolio-container">
        <h1>My works</h1>

        <h2>Professional</h2>

        <div className="portfolio-flex">
          {posts
            ?.filter((post) => post.type === "professional")
            .map((postInfo) => (
              <PortfolioCard key={postInfo.text} {...postInfo} />
            ))}
        </div>

        <h2>Personal</h2>

        <div className="portfolio-flex">
          {posts
            ?.filter((post) => post.type === "personal")
            .map((postInfo) => (
              <PortfolioCard key={postInfo.text} {...postInfo} />
            ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-flex {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0 0 -1em -1em;
        }

        .portfolio-container {
          font-family: Quicksand, sans-serif;
          font-size: 1.5em;

          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0.2em 0.4em ${Colors.shadow};
          padding: 1em;
          border-radius: 0.5em;

          width: 50em;
          max-width: 90vw;

          margin: 0 auto 5em auto;
        }

        h1 {
          margin-top: 0;
        }

        @media only screen and (max-width: 820px) {
          .portfolio-container {
            margin-bottom: 1em;
          }
        }
      `}</style>
    </>
  );
};

export default Portfolio;
