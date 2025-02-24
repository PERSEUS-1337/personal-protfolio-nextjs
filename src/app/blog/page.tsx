import fs from "fs";
import path from "path";
import Image from "next/image";

type BlogMetadata = {
  title: string;
  date: string;
  summary: string;
  image?: string;
  tags?: string[];
};

export default async function BlogPage() {
  const blogDir = path.join(process.cwd(), "src/app/blog");

  // 1️⃣ Get all blog slugs dynamically
  const blogFiles = fs
    .readdirSync(blogDir)
    .filter((file) => fs.statSync(path.join(blogDir, file)).isDirectory());

  // 2️⃣ Import metadata dynamically using `import()`
  const blogs: Array<{ slug: string } & BlogMetadata> = await Promise.all(
    blogFiles.map(async (slug) => {
      const blogModule = await import(`@/app/blog/${slug}/page`);
      return { slug, ...blogModule.metadata };
    })
  );

  return (
    <div className="min-h-screen flex flex-col justify-start bg-gray-50 pt-40">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to My Blog</h1>
        <p className="mt-4 text-gray-700">
          Here you will find my latest thoughts on tech, development, and more.
        </p>
      </div>

      <section id="projects" className="py-10 scroll-mt-14">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <a
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="card shadow-xl rounded-md transition-colors duration-300 ease-in-out hover:bg-slate-100"
              >
                {blog.image && (
                  <figure>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-md"
                    />
                  </figure>
                )}
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <p className="text-gray-600 text-sm">{blog.date}</p>
                  <p>{blog.summary}</p>

                  {/* Dynamically Render Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="card-actions justify-end italic mt-2">
                      {blog.tags.map((tag, index) => (
                        <div key={index} className="badge badge-sm badge-outline badge-info">
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
