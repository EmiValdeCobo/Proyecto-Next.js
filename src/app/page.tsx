import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a Mi Sitio Web</h1>
      <p className="text-lg text-center mb-4">
        Este es un sitio web personal donde podrás conocer más sobre mí y contactarme.
      </p>
      <div className="flex gap-4">
        <Link
          href="/about"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Acerca de mí
        </Link>
        <Link
          href="/contact"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Contáctame
        </Link>
      </div>
    </div>
  );
}
