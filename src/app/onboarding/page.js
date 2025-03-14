'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Onboarding() {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState({
    music: ['EDM'],
    sport: ['Football (soccer)', 'Athletics'],
    business: ['Product Launches'],
    exhibition: ['Oil paints', 'Colored pencils']
  });

  const toggleInterest = (category, interest) => {
    setSelectedInterests(prev => ({
      ...prev,
      [category]: prev[category].includes(interest)
        ? prev[category].filter(i => i !== interest)
        : [...prev[category], interest]
    }));
  };

  const isSelected = (category, interest) => {
    return selectedInterests[category].includes(interest);
  };

  const handleNext = () => {
    // Save selected interests to state/localStorage/API
    router.push('/onboarding/location');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 p-8 flex flex-col">
        <div className="flex flex-1">
          {/* Left side with questions */}
          <div className="w-1/2 pr-8">
            <div className="mb-4 text-sm text-gray-500">Tell us</div>
            
            {/* Progress Steps */}
            <div className="flex flex-col gap-16 mb-8">
              {/* Step 1 - Interests */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <h1 className="text-5xl font-bold">What Are Your Interests?</h1>
              </div>

              {/* Step 2 - Location */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
                <h2 className="text-2xl text-gray-400">What is your preferred location?</h2>
              </div>
            </div>
          </div>

          {/* Right side with categories */}
          <div className="w-1/2 space-y-8">
            {/* Music Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🎵</span>
                <h2 className="text-xl font-semibold">Music</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Blues & Jazz', 'Country', 'EDM', 'Hip Hop', 'RAP',
                  'Pop', 'R&B', 'Electronic', 'Experimental', 'Psychedelic'
                ].map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest('music', interest)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      isSelected('music', interest)
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Sport Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">⚽</span>
                <h2 className="text-xl font-semibold">Sport</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Football (soccer)', 'Basketball', 'Tennis', 'Baseball',
                  'Swimming', 'Volleyball', 'Athletics', 'Rugby', 'Ice hockey'
                ].map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest('sport', interest)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      isSelected('sport', interest)
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Business Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">💼</span>
                <h2 className="text-xl font-semibold">Business</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Trade Shows', 'Product Launches', 'Business Seminars',
                  'Workshops', 'Business Awards', 'Investor Pitch Events'
                ].map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest('business', interest)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      isSelected('business', interest)
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Exhibition Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🎨</span>
                <h2 className="text-xl font-semibold">Exhibition</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Oil paints', 'Canvas', 'Watercolor set', 'Sketchbook',
                  'Charcoal pencils', 'Chalkboard', 'Pottery wheel',
                  'Colored pencils', 'Wood carving tools'
                ].map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest('exhibition', interest)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      isSelected('exhibition', interest)
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end gap-4 mt-8 mb-8 px-8">
          <Link 
            href="/" 
            className="px-6 py-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            Skip
          </Link>
          <button 
            onClick={handleNext}
            className="px-6 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
} 