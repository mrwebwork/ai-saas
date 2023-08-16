import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-slate-800/60 via-slate-400/60 to-slate-500/80 text-center text-black">
      <h1 className="text-5xl pb-5 font-black tracking-wide">404</h1>
      <h2 className="font-medium text-2xl">Looks Deserted Here!</h2>
      <p className="py-5 font-medium text-lg">
        It seems the page you're looking for is playing hide and seek!
      </p>
      <Link
        href="/dashboard"
        className="bg-slate-50 px-8 py-1 font-semibold rounded-lg"
      >
        Let’s Head Back
      </Link>
    </div>
  );
}
