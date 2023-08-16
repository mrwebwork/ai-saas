import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-[100dvh] bg-gradient-to-r from-purple-600/70 via-rose-500/70 to-amber-500/90 text-center text-white">
      <h1 className="sr-only">Page Not Found</h1>
      <div className="text-5xl font-black tracking-wide animate-bounce">
        404
      </div>
      <h2 className="font-medium text-2xl">Looks Deserted Here!</h2>
      <p className="py-5 font-medium text-lg">
        It seems the page you're looking for is playing hide and seek!
      </p>
      <Link
        href="/dashboard"
        className="bg-slate-50 hover:bg-slate-50/90 transition px-8 py-1 font-semibold rounded-lg text-black"
      >
        Let’s Head Back
      </Link>
    </main>
  );
}
