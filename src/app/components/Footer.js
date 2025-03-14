export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-['Great_Vibes'] text-3xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">Event-ip</h3>
            <p className="text-gray-400">All</p>
            <p className="text-gray-400">Music</p>
            <p className="text-gray-400">Sport</p>
            <p className="text-gray-400">Exhibition</p>
            <p className="text-gray-400">Photography</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <p className="text-gray-400">User guides</p>
            <p className="text-gray-400">Help Center</p>
            <p className="text-gray-400">Partners</p>
            <p className="text-gray-400">News</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <p className="text-gray-400">About</p>
            <p className="text-gray-400">Join us</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay in the loop</h3>
            <p className="text-gray-400 mb-4">For product announcements and exclusive insights</p>
            <button className="bg-white text-gray-900 px-6 py-2 rounded">Subscribe</button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
          <select className="bg-transparent text-gray-400">
            <option>English</option>
          </select>
          <div className="flex gap-4 text-gray-400">
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 