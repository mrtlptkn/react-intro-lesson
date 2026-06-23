import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <span className="text-xl font-bold text-violet-400 tracking-tight">ReactApp</span>
          <div className="flex gap-1">
            {[
              { to: '/', label: 'Anasayfa' },
              { to: '/test', label: 'Test' },
              { to: '/todos', label: 'Todos' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-violet-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-violet-400 font-semibold mb-3">ReactApp</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              React, TypeScript ve Vite ile geliştirilmiş modern bir web uygulaması.
            </p>
          </div>
          <div>
            <h3 className="text-gray-300 font-semibold mb-3">Sayfalar</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/" className="text-gray-500 hover:text-violet-400 transition-colors">Anasayfa</NavLink></li>
              <li><NavLink to="/test" className="text-gray-500 hover:text-violet-400 transition-colors">Test</NavLink></li>
              <li><NavLink to="/todos" className="text-gray-500 hover:text-violet-400 transition-colors">Todos</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-300 font-semibold mb-3">Kaynaklar</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://react.dev" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors">React Docs</a></li>
              <li><a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors">Vite Docs</a></li>
              <li><a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors">Tailwind CSS</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-4 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} ReactApp. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  )
}
