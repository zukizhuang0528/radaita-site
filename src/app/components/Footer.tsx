import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0A0A0A] pt-24 pb-12">
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
        
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">Logo</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-12">
            The premium data processing platform for modern enterprise and forward-thinking individuals.
          </p>
          <p className="text-xs text-gray-600">
            © 2024 Logo. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">Product</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Platform Overview</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Data Labeling</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Integration API</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">Resources</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Documentation</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Engineering Blog</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Case Studies</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Community</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Careers</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Security</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
