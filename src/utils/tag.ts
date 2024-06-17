import { Post, allPosts } from "@/contentlayer/generated";

const getTagList = () => {
  const temp = new Set<string>();
  allPosts.forEach((v) => {
    v.tags.split(",").forEach((t) => temp.add(t.trim()));
  });
  return temp;
};

export const tagList = getTagList();

type IPostListByTag = Record<string, Post[]>;

export const PostListByTag = allPosts.reduce((prev, curr) => {
  const allTags = curr.tags.split(",");
  allTags.forEach((v) => {
    prev[v.trim()] = [...(prev[v.trim()] || []), curr];
  });
  return prev;
}, {} as IPostListByTag);
