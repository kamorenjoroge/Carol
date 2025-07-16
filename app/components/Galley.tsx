"use client";
import { useState } from "react";
import { FaEye, FaFilter } from 'react-icons/fa';
import Image from 'next/image';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "eco", label: "Eco Services" }
  ];

 const galleryItems = [
  {
    id: 1,
    category: "residential",
    title: "Luxury Villa Deep Clean",
    location: "Karen, Nairobi",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&crop=center", // Modern luxury home interior
    beforeAfter: true
  },
  {
    id: 2,
    category: "commercial",
    title: "Corporate Office Maintenance",
    location: "Westlands, Nairobi",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&crop=center",
    beforeAfter: false
  },
  {
    id: 3,
    category: "eco",
    title: "Waste Management Program",
    location: "Industrial Area, Nairobi",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&crop=center", // Eco-friendly cleaning supplies
    beforeAfter: false
  },
  {
    id: 4,
    category: "residential",
    title: "Apartment Complex Cleaning",
    location: "Kilimani, Nairobi",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center", // Clean modern apartment
    beforeAfter: true
  },
  {
    id: 5,
    category: "commercial",
    title: "Hospital Sanitization",
    location: "Upper Hill, Nairobi",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center", // Hospital/medical facility
    beforeAfter: false
  },
  {
    id: 6,
    category: "eco",
    title: "Green Cleaning Initiative",
    location: "CBD, Nairobi",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop&crop=center", // Natural cleaning products
    beforeAfter: false
  }
];
  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Our Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of successful cleaning projects across Kenya. 
            From residential homes to commercial complexes, see the Nacre difference.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FaFilter className="inline-block w-4 h-4 mr-2" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-medium flex items-center">
                      <FaEye className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
                
                {/* Before/After Badge */}
                {item.beforeAfter && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Before/After
                  </div>
                )}

                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  item.category === "eco" 
                    ? "bg-teal-500 text-white"
                    : item.category === "commercial"
                    ? "bg-blue-600 text-white"
                    : "bg-yellow-500 text-white"
                }`}>
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Gallery;