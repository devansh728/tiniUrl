import { useQuery } from '@tanstack/react-query';
import api from '../api/api';

/**
 * Fetches total clicks for a specific short URL and date range.
 * 
 * @param {Object} options - Query options
 * @param {Array} options.queryKey - Query key for caching
 * @param {Function} options.queryFn - Query function (optional, provided internally)
 * @param {boolean} options.enabled - Whether the query should run
 * @param {string} options.token - Bearer token for auth
 * @param {string} options.shortUrl - The short URL ID (used in the path)
 * @param {string} options.startDate - Start of the date range (YYYY-MM-DD)
 * @param {string} options.endDate - End of the date range (YYYY-MM-DD)
 */
export const useFetchTotalClicks = (options) => {
  const { token, shortUrl, startDate, endDate, queryKey, enabled = false } = options;

  return useQuery({
    queryKey,
    queryFn: async () => {
      if (!token || !shortUrl || !startDate || !endDate) {
        return [];
      }
      
      const response = await api.get(
        `/api/urls/analytics/${shortUrl}`,
        {
          params: { startDate, endDate },
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      // Transform the data
      const data = response.data;
      return Object.keys(data).map((date) => ({
        clickDate: date,
        count: data[date],
      }));
    },
    enabled: enabled && !!token && !!shortUrl && !!startDate && !!endDate,
    staleTime: 5000,
  });
};