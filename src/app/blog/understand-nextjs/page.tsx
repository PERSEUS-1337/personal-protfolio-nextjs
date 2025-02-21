export const metadata = {
  title: "Understanding Next.js Routing",
  date: "February 21, 2025",
  summary:
    "Next.js simplifies routing by allowing developers to create file-based routes within the `app` directory. This means that any folder or file inside `app` automatically corresponds to a URL path.",
  image: "/images/blogs/understand-nextjs.jpg", // Optional
  tags: ["JavaScript", "Next.js"]
};

export default function TestBlogPage() {
  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold">{metadata.title}</h1>
      <p className="mt-4 text-gray-700">Published on {metadata.date}</p>

      <div className="mt-6 text-lg leading-relaxed text-gray-800">
        <p>{metadata.summary}</p>

        <h2 className="mt-6 text-2xl font-semibold">How Routing Works</h2>
        <p className="mt-2">
          In Next.js, a file named `page.tsx` inside a folder represents a
          route. For example:
        </p>
        <pre className="bg-gray-100 p-4 rounded mt-4">
          {`
          /app/page.tsx       ->  /
          /app/blog/page.tsx   ->  /blog
          /app/blog/test/page.tsx -> /blog/test
          `}
        </pre>

        <h2 className="mt-6 text-2xl font-semibold">Dynamic Routing</h2>
        <p className="mt-2">
          You can also create dynamic routes by using square brackets, such as:
        </p>
        <pre className="bg-gray-100 p-4 rounded mt-4">
          {`/app/blog/[slug]/page.tsx -> /blog/:slug`}
        </pre>

        <p className="mt-4">
          This allows you to handle multiple blog posts dynamically.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Conclusion</h2>
        <p className="mt-2">
          Next.js provides an intuitive way to manage routes, making it an
          excellent choice for building modern web applications.
        </p>
      </div>
    </div>
  );
}
