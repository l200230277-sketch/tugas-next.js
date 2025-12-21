import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h2>404 - Invoice tidak ditemukan</h2>
      <Link
        href="/dashboard/invoices"
        className="mt-4 text-blue-500 underline"
      >
        Kembali ke daftar invoice
      </Link>
    </main>
  );
}
