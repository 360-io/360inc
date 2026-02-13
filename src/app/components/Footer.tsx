export function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-xl text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <nav className="grid grid-cols-2 md:flex md:justify-center md:gap-12 gap-y-8 gap-x-4 mb-12">
          <a href="/" className="text-sm md:text-base font-bold tracking-wider hover:text-gray-300 transition-colors text-center">Home</a>
          <a href="/#products" className="text-sm md:text-base font-bold tracking-wider hover:text-gray-300 transition-colors text-center">Solution +</a>
          <a href="/projects/" className="text-sm md:text-base font-bold tracking-wider hover:text-gray-300 transition-colors text-center">Project</a>
          <a href="/about/" className="text-sm md:text-base font-bold tracking-wider hover:text-gray-300 transition-colors text-center">About Us</a>
          <a href="/blog/" className="text-sm md:text-base font-bold tracking-wider hover:text-gray-300 transition-colors text-center">Blog</a>
          <a href="/contact/" className="text-sm md:text-base font-bold tracking-wider hover:text-gray-300 transition-colors text-center">Contact</a>
        </nav>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <a href="/privacy-policy/" className="hover:text-white transition-colors whitespace-nowrap">プライバシーポリシー</a>
            <a href="/legal/" className="hover:text-white transition-colors whitespace-nowrap">特定商取引法に基づく表記</a>
          </div>
          <p>© 2026 360Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
