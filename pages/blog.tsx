import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { sortByDate } from "../utils";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="py-4 px-8 bg-white shadow-lg rounded-lg my-3">
        {post.frontmatter.cover_image && (
          <img src={post.frontmatter.cover_image} alt="" />
        )}
        <h3 className="text-xl">{post.frontmatter.title}</h3>
        <div className="">Posted on {post.frontmatter.date}</div>
        <p>{post.frontmatter.excerpt}</p>
        <a className="mt-10">Read More</a>
      </div>
    </Link>
  );
};

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="flex justify-center">
        <div className="max-w-screen-md my-5 mx-4 md:mx-0">
          {posts.filter((post) => post.frontmatter?.is_published !== false).map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
