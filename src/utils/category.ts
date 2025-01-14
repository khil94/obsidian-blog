import { Post, allPosts } from "@/contentlayer/generated";

export const categoryList = new Set(allPosts.map((v) => v.category));

type IPostListByCategory = Record<string, Post[]>;

// export const PostListByCategory = allPosts.reduce((prev, curr) => {
//   prev[curr.category] = [...(prev[curr.category] || []), curr];
//   return prev;
// }, {} as IPostListByCategory);

export const PostListByCategory = (postList: Post[], category: string) => {
  return postList.filter((v) => v.category === category);
};
