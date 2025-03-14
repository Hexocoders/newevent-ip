import Image from "next/image";
import Link from "next/link";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-b from-purple-900 to-purple-700 text-white">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <p className="text-gray-300 text-xl mb-2">Pick up your</p>
          <h1 className="text-4xl font-bold mb-8">wonderful plans</h1>
          
          {/* Search Bar */}
          <div className="flex w-full max-w-2xl mx-auto px-4">
            <div className="flex-1 flex bg-white rounded-l-md">
              <input
                type="text"
                placeholder="Find the event you're interested in"
                className="w-1/2 p-3 text-gray-800 outline-none"
              />
              <input
                type="text"
                placeholder="New York, NY"
                className="w-1/2 p-3 text-gray-800 border-l outline-none"
              />
            </div>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* New Events Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">New events in <span className="text-purple-600">NYC</span></h2>
            <button className="text-gray-500 text-sm">View more</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EventCard
              id={1}
              title="Urban Marathon"
              image="/urban.png"
              date="Monday, June 06 | 06:00 AM"
              location="New York, NY"
              price="$20"
            />
            <EventCard
              id={2}
              title="Melody Mania"
              image="/melody.png"
              date="Wednesday, June 21 | 07:00 PM"
              location="New York, NY"
              price="$40"
            />
            <EventCard
              id={3}
              title="Rockin' the Stage"
              image="/stage.png"
              date="Monday, March 14 | 04:00 PM"
              location="New York, NY"
              price="$125.00"
            />
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Explore by <span className="text-gray-500">categories</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <CategoryCard icon="🎵" title="Music" />
            <CategoryCard icon="🏃" title="Sport" />
            <CategoryCard icon="🎨" title="Exhibition" />
            <CategoryCard icon="💼" title="Business" />
            <CategoryCard icon="📸" title="Photography" />
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Upcoming <span className="text-gray-500">in 24h</span></h2>
            <button className="text-gray-500 text-sm">View more</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EventCard
              id={4}
              title="Musical Fusion Festival"
              image="/festival.png"
              date="Monday, June 06 | 06:00 AM"
              location="New York, NY"
              price="$100"
              large
            />
            <EventCard
              id={5}
              title="Business in the United States"
              image="/business.png"
              date="Tuesday, June 7 | 06:00 AM"
              location="Atlanta"
              price="$50"
              large
            />
          </div>
        </div>

        {/* More Events Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">More events</h2>
            <button className="text-gray-500 text-sm">View more</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EventCard
              id={6}
              title="Marathon"
              image="/marathon.png"
              date="Monday, June 06 | 06:00 AM"
              location="New York, NY"
              price="$125"
            />
            <EventCard
              id={7}
              title="Rock Festival"
              image="/rock.png"
              date="Monday, March 21 | 06:00 PM"
              location="New York, NY"
              price="$175"
            />
            <EventCard
              id={8}
              title="Harmony of Melodies Concert"
              image="/harmony.png"
              date="Wednesday, June 24 | 07:00 PM"
              location="New York, NY"
              price="$150"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Event Card Component
function EventCard({ id = 1, title, image, date, location, price, large = false }) {
  return (
    <Link href={`/events/${id}`} className={`block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
      <div className={`relative ${large ? 'h-64' : 'h-48'}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600">{date}</p>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm text-gray-500 mt-2">From {price}</p>
      </div>
    </Link>
  );
}

// Category Card Component
function CategoryCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
      <span className="text-2xl mb-2">{icon}</span>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}
