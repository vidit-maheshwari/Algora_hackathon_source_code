import React, { useState } from 'react';
import axios from 'axios';
import YTVideoEmbed from './YTVideoEmbed'; // Adjust the path if necessary
import YTLoader from './YTLoader';

const YoutubeRecommendationSystem = () => {
  const [searchInput, setSearchInput] = useState('');
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');

  const handleSearch = async () => {
    try {
      setLoading(true); // Start loading

      const response = await axios.post('http://localhost:5002/youtube', {
        keywords: searchInput
      });

      setRecommendedVideos(response.data.urls.map(url => ({ url }))); // Assuming response.data.urls is an array of strings
      setTitle(response.data.title); // Set the title from the response
      setLoading(false); // Stop loading
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setLoading(false); // Stop loading in case of error
    }
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <div className="mb-4 flex justify-center items-center">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter search keywords"
          className="px-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>

      <div>
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <YTLoader />
          </div>
        ) : recommendedVideos.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {recommendedVideos.map((video, index) => {
              const videoId = video.url.split('v=')[1]; // Extract video ID from the URL
              return (
                <li key={index} className="bg-white border border-gray-200 p-2 rounded-lg shadow-sm">
                  <YTVideoEmbed videoId={videoId} />
                  {/* Displaying a title placeholder since title is not provided in the sample response */}
                  <p className='text-center text-sm font-semibold'>Video Title Placeholder</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default YoutubeRecommendationSystem;
