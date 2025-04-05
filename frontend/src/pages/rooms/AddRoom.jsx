import Heading from '@/components/Heading';
import useAddRoom from '@/hooks/rooms/useAddRoom';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import RoomImageUploader from './RoomImageUploader';

const AddRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const { addRoom } = useAddRoom();

  const [imageURL, setImageURL] = useState(null); // For storing the uploaded image URL from Cloudinary
  const [imageFile, setImageFile] = useState(null); // To keep track of the selected file

  const handleImageUpload = async (roomData) => {
    if (!imageFile) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'Bookit'); // Replace with your Cloudinary upload preset
    formData.append('cloud_name', 'dtkglh0u7'); // Replace with your Cloudinary cloud name

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dtkglh0u7/image/upload`, // Replace <your_cloud_name> with your actual cloud name
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        setImageURL(data.secure_url); // Store the uploaded image URL
        const response = await addRoom({ ...roomData, image: data.secure_url });
        alert('Image uploaded successfully!');
      } else {
        alert('Failed to upload image.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('An error occurred while uploading the image.');
    }
  };

  const onSubmit = async (data) => {
    await handleImageUpload(data);
  };

  return (
    <>
      <Heading title="Add a Room" />
      <div className="bg-white shadow-lg rounded-lg p-6 w-120">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Room Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-solid border-neutral-300 rounded w-full py-2 px-3"
              placeholder="Enter a name (Large Conference Room)"
              required
              {...register('name')}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="border border-solid border-neutral-300 rounded w-full h-24 py-2 px-3"
              placeholder="Enter a description for the room"
              required
              {...register('description')}
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="sqft" className="block text-gray-700 font-bold mb-2">
              Square Feet
            </label>
            <input
              type="number"
              id="sqft"
              className="border border-solid border-neutral-300 rounded w-full py-2 px-3"
              placeholder="Enter room size in ft"
              required
              {...register('sqft')}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              className="border border-solid border-neutral-300 rounded w-full py-2 px-3"
              placeholder="Number of people the room can hold"
              required
              {...register('capacity')}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price_per_hour" className="block text-gray-700 font-bold mb-2">
              Price Per Hour
            </label>
            <input
              type="number"
              id="price_per_hour"
              className="border border-solid border-neutral-300 rounded w-full py-2 px-3"
              placeholder="Enter price per hour"
              required
              {...register('price_per_hour')}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="border border-solid border-neutral-300 rounded w-full py-2 px-3"
              placeholder="Enter full address"
              required
              {...register('address')}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="border border-solid border-neutral-300 rounded w-full py-2 px-3"
              placeholder="Location (Building, Floor, Room)"
              required
              {...register('location')}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="availability" className="block text-gray-700 font-bold mb-2">
              Availability
            </label>
            <input
              type="text"
              id="availability"
              className="border border-solid border-neutral-300 rounded w-full py-2 px-3"
              placeholder="Availability (Monday - Friday, 9am - 5pm)"
              required
              {...register('availability')}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amenities" className="block text-gray-700 font-bold mb-2">
              Amenities
            </label>
            <input
              type="text"
              id="amenities"
              className="border border-solid border-neutral-300 rounded w-full py-2 px-3"
              placeholder="Amenities CSV (projector, whiteboard, etc.)"
              required
              {...register('amenities')}
            />
          </div>

          <RoomImageUploader setImageFile={setImageFile} />

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRoom;
