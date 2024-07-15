import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import bdDistricts from './bdDistricts';
import Navbar from '../User/Navbar/Navbar';
import { baseUrl } from '../../BaseURL';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    address: '',
    mobile: '',
    district: '',
    subDistrict: '',
    age: '',
    weight: '',
    lastDonationDate: '',
    hasPhysicalProblem: '',
  });

  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [subDistricts, setSubDistricts] = useState([]);

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setSubDistricts(bdDistricts[district] || []);
    setFormData({ ...formData, district }); 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      await axios.post(`${baseUrl}/api/donation`, formData); 
    } catch (error) {
      console.error('Error submitting donation:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-2xl mx-auto bg-gray-200 rounded-xl shadow-md space-y-6 mt-10">
        <h2 className="text-2xl font-bold text-center">Blood Donation Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">District (Zela)</label>
              <select
                name="district"
                value={selectedDistrict}
                onChange={handleDistrictChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="" disabled>Select District</option>
                {Object.keys(bdDistricts).map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Sub-district (Upzela)</label>
              <select
                name="subDistrict"
                value={formData.subDistrict}
                onChange={handleChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="" disabled>Select Sub-district</option>
                {subDistricts.map((subDistrict) => (
                  <option key={subDistrict} value={subDistrict}>{subDistrict}</option>
                ))}
              </select>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo                -300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Weight</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Last Donation Date</label>
              <input
                type="date"
                name="lastDonationDate"
                value={formData.lastDonationDate}
                onChange={handleChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Physical Problem</label>
              <select
                name="hasPhysicalProblem"
                value={formData.hasPhysicalProblem}
                onChange={handleChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          <div className="p-4">
            <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DonationForm;
