import { 
  FaHome, 
  FaBuilding, 
  FaRecycle, 
  FaMagic,  
  FaArrowRight, 
  FaCheckCircle 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaHome,
      title: "Residential Cleaning",
      description: "Complete home cleaning services for apartments, houses, and condos.",
      features: [
        "Deep cleaning & sanitization",
        "Regular maintenance cleaning",
        "Move-in/move-out cleaning"
      ],
      type: "standard",
      price: "From KSh 2,500"
    },
    {
      icon: FaBuilding,
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning solutions.",
      features: [
        "Daily office maintenance",
        "Floor care & window cleaning",
        "Restroom sanitization"
      ],
      type: "standard",
      price: "From KSh 5,000"
    },
    {
      icon: FaRecycle,
      title: "Waste Management",
      description: "Eco-friendly waste collection and recycling services.",
      features: [
        "Scheduled waste collection",
        "Recycling programs",
        "Hazardous waste disposal"
      ],
      type: "eco",
      price: "From KSh 1,500"
    },
    {
      icon: FaMagic,
      title: "Deep Cleaning",
      description: "Intensive cleaning for special occasions and seasonal needs.",
      features: [
        "Spring cleaning services",
        "Post-construction cleanup",
        "Event preparation cleaning"
      ],
      type: "standard",
      price: "From KSh 8,000"
    },
    
   
  ];

  return (
    <section id="services" className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block  bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Cleaning Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential homes to commercial spaces, we provide comprehensive 
            cleaning and waste management services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEco = service.type === "eco";
            
            return (
              <div
                key={index}
                className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 rounded-xl bg-white overflow-hidden"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    isEco ? 'bg-teal-500' : 'bg-secondary'
                  }`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      {isEco && (
                        <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full font-semibold">
                          ECO
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <FaCheckCircle className={`h-4 w-4 ${
                            isEco ? 'text-teal-500' : 'text-secondary'
                          }`} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-900">
                          {service.price}
                        </span>
                        <button
                          className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium ${
                            isEco 
                              ? 'text-teal-600 border border-teal-600 hover:bg-teal-50'
                              : 'text-secondary border border-secondary hover:bg-yellow-50'
                          }`}
                        >
                          Learn More
                          <FaArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default Services;