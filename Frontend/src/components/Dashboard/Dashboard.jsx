import React, { useState } from 'react';
import { FaLink, FaChartLine, FaEye, FaPlus } from 'react-icons/fa';

// Mock data for frontend-only testing
const mockLinks = [
  {
    id: 1,
    originalUrl: 'https://example.com/very/long/url/that/needs/shortening/for/social/media/posts',
    shortUrl: 'link.ly/abc123',
    clicks: 42,
    createdAt: '2023-05-15T10:30:00'
  },
  {
    id: 2,
    originalUrl: 'https://google.com/search?q=react+frontend+development+best+practices+for+2023',
    shortUrl: 'link.ly/def456',
    clicks: 17,
    createdAt: '2023-05-16T14:20:00'
  },
  {
    id: 3,
    originalUrl: 'https://github.com/facebook/react/blob/main/CHANGELOG.md',
    shortUrl: 'link.ly/ghi789',
    clicks: 105,
    createdAt: '2023-05-17T09:15:00'
  }
];

const Dashboard = () => {
  const [links, setLinks] = useState(mockLinks);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateLink = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newLink = {
        id: links.length + 1,
        originalUrl: newUrl,
        shortUrl: `link.ly/${Math.random().toString(36).substring(2, 8)}`,
        clicks: 0,
        createdAt: new Date().toISOString()
      };
      
      setLinks([newLink, ...links]);
      setNewUrl('');
      setShowCreateModal(false);
      setIsLoading(false);
    }, 1000);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Dashboard Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-600">Manage your shortened URLs and track their performance</p>
            </div>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              <FaPlus /> Create New Link
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaLink className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-600">Total Links</p>
                <h2 className="text-2xl font-bold text-gray-800">{links.length}</h2>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FaEye className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-600">Total Clicks</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  {links.reduce((total, link) => total + link.clicks, 0)}
                </h2>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <FaChartLine className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-600">Avg. Clicks per Link</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  {links.length > 0 
                    ? Math.round(links.reduce((total, link) => total + link.clicks, 0) / links.length) 
                    : 0}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Links Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Your Links</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original URL</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Short URL</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {links.map((link) => (
                  <tr key={link.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-xs">
                            {link.originalUrl}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-blue-600 font-medium">{link.shortUrl}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{link.clicks}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(link.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Create Link Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Short Link</h2>
            
            <form onSubmit={handleCreateLink}>
              <div className="mb-4">
                <label htmlFor="originalUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Original URL
                </label>
                <input
                  type="url"
                  id="originalUrl"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://example.com/your-long-url"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-70"
                >
                  {isLoading ? 'Creating...' : 'Create Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;