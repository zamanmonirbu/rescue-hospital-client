import React, { useState } from 'react';
import axios from 'axios';
import bdDistricts from './bdDistricts';
import Navbar from '../User/Navbar/Navbar';
import { baseUrl } from '../../BaseURL';


const BloodNeedForm = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedSubDistrict, setSelectedSubDistrict] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [subDistricts, setSubDistricts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setSubDistricts(bdDistricts[district] || []);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${baseUrl}/api/blood/need/search`, {
        params: {
          district: selectedDistrict,
          subDistrict: selectedSubDistrict,
          bloodGroup: selectedBloodGroup,
        },
      });
      setSearchResults(response.data);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-md mx-auto bg-gray-200 rounded-xl shadow-md space-y-6 mt-10">
        <h2 className="text-2xl font-bold text-center">Search for Blood</h2>
        <form onSubmit={handleSearch}>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">District</label>
              <select
                value={selectedDistrict}
                onChange={handleDistrictChange}
                className="py-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="" disabled>Select District</option>
                {Object.keys(bdDistricts).map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Sub-district</label>
              <select
                value={selectedSubDistrict}
                onChange={(e) => setSelectedSubDistrict(e.target.value)}
                className="py-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="" disabled>Select Sub-district</option>
                {subDistricts.map((subDistrict) => (
                  <option key={subDistrict} value={subDistrict}>{subDistrict}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Blood Group</label>
              <select
                value={selectedBloodGroup}
                onChange={(e) => setSelectedBloodGroup(e.target.value)}
                className="py-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
            <div className="flex-1 flex items-end">
              <button type="submit" className="mt-4 w-full px-4 py-4 bg-green-600 text-white rounded-md hover:bg-green-700">
                Search
              </button>
            </div>
          </div>
        </form>     
      </div>

      <div className="w-1/2 m-auto">
        {searched && searchResults.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-center">Donors Found:</h3>
            <table className="mt-2 w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Serial</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Blood Group</th>
                  <th className="border border-gray-300 px-4 py-2">District</th>
                  <th className="border border-gray-300 px-4 py-2">Sub-district</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((donor, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-2">{donor.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{donor.bloodGroup}</td>
                    <td className="border border-gray-300 px-4 py-2">{donor.district}</td>
                    <td className="border border-gray-300 px-4 py-2">{donor.subDistrict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {searched && searchResults.length === 0 && (
          <p className="text-center mt-4">No donors found.</p>
        )}
      </div>
    </>
  );
};

export default BloodNeedForm;
