// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`, // mdx 파일경로 패턴
  contentType: "mdx",
  // mdx로 작성한 글 정보에 대해 입력해야하는 필드 정의
  /*
    [필드명]: {
      type: '자료형',
      required: '필수여부',
    }
  */
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
    thumbnail: {
      type: "string",
      required: true,
    },
    createdAt: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (post) => {
        const [_, id] = post._raw.flattenedPath.split("/");

        return id || post._raw.flattenedPath;
      },
    },
    url: {
      type: "string",
      resolve: (post) => {
        const [_, temp] = post._raw.flattenedPath.split("/");
        return `/post/${temp || post._raw.flattenedPath}`;
      },
    },
    category: {
      type: "string",
      resolve: (post) => {
        const [category, _] = post._raw.flattenedPath.split("/");
        return category || post._raw.flattenedPath;
      },
    },
  },
}));

const contentSource = makeSource({
  // 마크다운 파일이 저장되어 있는 루트 폴더
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode as any, { theme: "github-dark" }]],
  },
});

export default contentSource;
