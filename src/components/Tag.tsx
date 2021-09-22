import { FC } from "react";

const Tag: FC<Readonly<{ text: string }>> = ({ text }) => (
  <>
    <div className="tag">{text}</div>

    <style jsx>
      {`
        .tag {
          color: white;
          background: #3f51b5;

          font-size: 0.7em;
          border-radius: 0.5em;
          padding: 0.2em 0.5em;
          margin: 0.25em;
        }
      `}
    </style>
  </>
);

const Tags: FC<Readonly<{ tags: string[] }>> = ({ tags }) => (
  <>
    <div className="tags">
      {tags?.map((tag) => (
        <Tag text={tag} key={tag} />
      ))}
    </div>

    <style jsx>
      {`
        .tags {
          display: flex;
          margin: 1em -0.25em;
          flex-wrap: wrap;
        }
      `}
    </style>
  </>
);

export default Tags;
