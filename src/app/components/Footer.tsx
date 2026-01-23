export function Footer() {
  return (
    <footer className="bg-black/[0.66] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg mb-4">製品</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">最新製品</a></li>
              <li><a href="#" className="hover:text-white transition-colors">すべての製品</a></li>
              <li><a href="#" className="hover:text-white transition-colors">アクセサリー</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">企業情報</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ニュース</a></li>
              <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">サポート</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
              <li><a href="#" className="hover:text-white transition-colors">保証について</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">フォロー</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
            </ul>
          </div>
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
