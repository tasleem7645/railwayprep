import React from 'react';
import { Home, CheckSquare, Search, Zap, Crown, User } from 'lucide-react';

export default function MobileBottomNav({
  activeTab,
  onSelectTab,
  onOpenPassPro,
  onOpenDashboard,
  onOpenAuth,
  user = null,
  hasPassPro = false,
}) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'mock-tests', label: 'Tests', icon: CheckSquare },
    { id: 'pyq-explorer', label: 'PYQs', icon: Search },
    { id: 'daily-quiz', label: 'Quiz', icon: Zap },
  ];

  return (
    <nav
      aria-label="Mobile Quick Navigation"
      className="lg:hidden print:hidden fixed bottom-0 inset-x-0 z-30 bg-[#070B18]/95 backdrop-blur-lg border-t border-slate-800/90 px-2 pt-1.5 pb-[calc(0.45rem+env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.45)]"
    >
      <div className="grid grid-cols-5 items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onSelectTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-colors cursor-pointer touch-manipulation ${
                active ? 'text-teal-400 font-black' : 'text-slate-400 hover:text-slate-200 font-semibold'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              <Icon className={`w-5 h-5 ${active ? 'stroke-[2.5]' : 'stroke-[1.9]'}`} />
              <span className="text-[10px] mt-0.5 leading-none">{item.label}</span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => {
            if (!user) onOpenAuth();
            else if (hasPassPro) onOpenDashboard();
            else onOpenPassPro();
          }}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-colors cursor-pointer touch-manipulation ${
            user
              ? hasPassPro
                ? 'text-amber-400 font-black'
                : 'text-emerald-400 font-bold'
              : 'text-amber-300 font-bold'
          }`}
        >
          {user && !hasPassPro ? (
            <User className="w-5 h-5" />
          ) : (
            <Crown className={`w-5 h-5 ${hasPassPro ? 'fill-amber-400' : ''}`} />
          )}
          <span className="text-[10px] mt-0.5 leading-none">
            {!user ? 'Login' : hasPassPro ? 'Pro' : 'Account'}
          </span>
        </button>
      </div>
    </nav>
  );
}
