import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h1>This is blog page</h1>
      <ul>
        <Link href="/blog/idnumber">Blog 1</Link>
      </ul>
    </div>
  );
};

export default Blog;
