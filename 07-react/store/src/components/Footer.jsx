export default function Footer({ storeName }) {
  // const storeName = 'Kayfa store';
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      <p>
        © {year} {storeName}. All rights reserved.
      </p>
    </footer>
  );
}
