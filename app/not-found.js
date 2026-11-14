import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <Link href="/" className="mt-4 inline-block underline">
        Go home
      </Link>
    </div>
  );
}
