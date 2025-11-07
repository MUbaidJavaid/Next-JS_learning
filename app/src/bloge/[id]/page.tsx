export default async function SingleBlogePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { title?: string; date?: string; content?: string };
}) {
  const { id } = await params;
  const { title, date, content } = await searchParams;

  console.log("Params:", params);
  console.log("Search Params:", searchParams);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          {title || `Blog Post ${id}`}
        </h1>
        <time className="text-sm text-zinc-500 dark:text-zinc-400">
          {date || "No date provided"}
        </time>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          {content || "No content provided"}
        </p>
      </main>
    </div>
  );
}
