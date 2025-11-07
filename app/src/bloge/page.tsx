import Link from "next/link";
interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
}

const blogePost: BlogPost[] = [
  {
    id: 1,
    title: "Bloge Page 1",
    date: "2024-06-01",
    content: "Welcome to the Bloge page of my Next.js application!",
  },
  {
    id: 2,
    title: "Bloge Page 2",
    date: "2024-06-01",
    content: "Welcome to the Bloge page of my Next.js application!",
  },
  {
    id: 3,
    title: "Bloge Page 3",
    date: "2024-06-01",
    content: "Welcome to the Bloge page of my Next.js application!",
  },
  {
    id: 4,
    title: "Bloge Page 4",
    date: "2024-06-01",
    content: "Welcome to the Bloge page of my Next.js application!",
  },
];

export default function BlogePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Bloge Page
        </h1>
        <div className="flex flex-col gap-8 mt-8 w-full">
          {blogePost.map((post) => (
            <Link
              href={`/bloge/${post.id}?title=${encodeURIComponent(post.title)}&date=${encodeURIComponent(post.date)}&content=${encodeURIComponent(post.content)}`}
              key={post.id}
            >
              <article className="border-b border-zinc-200 pb-6 dark:border-zinc-700 w-full">
                <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
                  {post.title}
                </h2>
                <time className="text-sm text-zinc-500 dark:text-zinc-400">
                  {post.date}
                </time>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  {post.content}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
