export function Footer() {
  return (
    <footer className="bg-black/[0.66] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 border-b border-gray-800 pb-12">
          <a href="/" className="text-lg font-bold hover:text-gray-300 transition-colors">Home</a>
          <a href="/#products" className="text-lg font-bold hover:text-gray-300 transition-colors">Solution +</a>
          <a href="/projects" className="text-lg font-bold hover:text-gray-300 transition-colors">Project</a>
          <a href="/about" className="text-lg font-bold hover:text-gray-300 transition-colors">About Us</a>
          <a href="/blog" className="text-lg font-bold hover:text-gray-300 transition-colors">Blog</a>
          <a href="/contact" className="text-lg font-bold hover:text-gray-300 transition-colors">Contact</a>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 360Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="/legal" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
