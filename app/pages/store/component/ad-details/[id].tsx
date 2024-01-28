"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface AdDetails {
  id: number;
  title: string;
  name: string;
  txt: string;
  // ... other properties
}

const AdDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [adDetails, setAdDetails] = useState<AdDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id && typeof id === 'string') {
        try {
          // Fetch ad details based on the id
          const response = await axios.get(`${process.env.BaseUrl}/ads/${id}`);
          setAdDetails(response.data); // Assuming the API returns details for the specific id
        } catch (error) {
          console.error('Error fetching ad details:', error);
        }
      }
    };

    fetchData();
  }, [id]);

  if (!adDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{adDetails.title}</h1>
      <p>{adDetails.txt}</p>
      <p>{adDetails.name}</p>
      {/* Add more components to display additional details */}
    </div>
  );
};

export default AdDetailsPage;