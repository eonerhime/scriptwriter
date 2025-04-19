import Image from "next/image";
import BackButton from "./BackButton";

function BlogContent({ blog }) {
  console.log("Blog Content:", blog);

  return (
    <div className="mt-32 mb-12">
      <BackButton />
      <div className="pt-4">
        {/* Blog Title */}
        <div className="flex flex-col gap-2 mb-2 mt-2">
          <label htmlFor="title" className="uppercase text-xl font-semibold">
            {blog.title}{" "}
          </label>
        </div>

        {/* Blog Image */}
        <div className="flex flex-col gap-3 my-6 w-full sm:w-6/12 max-w-full sm:max-w-none">
          <Image
            src={blog.image}
            alt={blog.title}
            width={400}
            height={400}
            className="w-full h-auto rounded-md mb-4"
          />
        </div>

        {/* Blog Post */}
        <pre className="flex flex-col gap-2 mb-3 w-full whitespace-pre-wrap font-normal text-base">
          {blog.content}
        </pre>
      </div>
    </div>
  );
}

export default BlogContent;
