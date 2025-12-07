import next from "eslint-config-next";

const eslintConfig = [
  ...next,
  {
    ignores: ["_src_old/**", ".yarn/**"],
  },
];

export default eslintConfig;
