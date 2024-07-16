import React, { useState } from 'react';
import axios from 'axios';
import bdDistricts from './bdDistricts';
import Navbar from '../User/Navbar/Navbar';
import { baseUrl } from '../../BaseURL';
import { format, differenceInDays } from 'date-fns';

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

  const formatLastDonationDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, 'dd-MMMM-yyyy');
    const daysAgo = differenceInDays(new Date(), date);
    return `${formattedDate}(${daysAgo} days ago)`;
  };

  const physicalProblemOrNot = (e) => {
    if (e === "true") {
      return "Yes";
    }
    return "No";
  };

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto bg-gray-200 rounded-xl shadow-md space-y-6 mt-10">
        <h2 className="text-2xl font-bold text-center">Search for Blood</h2>
        <form onSubmit={handleSearch}>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
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
            <div className="flex-1 min-w-[200px]">
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
            <div className="flex-1 min-w-[200px]">
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

     <div className="w-3/4 mx-auto">
      {searched && searchResults.length > 0 && (
        <div className="mt-8 overflow-x-auto">
          <h3 className="text-lg font-semibold text-center mb-4">Donors Found:</h3>
          <div className="shadow-md rounded-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">Serial</th>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">Name</th>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">Blood Group</th>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">Age</th>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">District</th>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">Sub-district</th>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">Address</th>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">Last Donate</th>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">Weight</th>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">Mobile</th>
                  <th scope="col" className="px-4 py-2 text-left text-sm font-medium">Physical Problem</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {searchResults.map((donor, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="px-4 py-2 whitespace-nowrap">{index + 1}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{donor.name}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{donor.bloodGroup}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{donor.age}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{donor.district}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{donor.subDistrict}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{donor.address}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{formatLastDonationDate(donor.lastDonationDate)}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{donor.weight}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{donor.mobile}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{physicalProblemOrNot(donor.hasPhysicalProblem)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

