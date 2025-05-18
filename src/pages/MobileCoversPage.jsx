import { useState } from "react"


const MobileCoversPage = () => {
const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const brands = [
    "Nothing",
    "Xiaomi",
    "Google Pixel",
    "Oneplus",
    "Apple",
    "Samsung",
    "Realme",
    "Vivo",
    "Oppo",
    "Moto",
    "Poco",
  ];

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel(""); // Reset model when brand changes
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };
  
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
  <div className="p-6 rounded-lg w-full max-w-4xl mt-[-5px]">
    {/* Breadcrumb Navigation */}
    <nav className="text-gray-500 text-sm mb-4">
      <a href="#" className="hover:underline">
        Home
      </a>{" "}
      &gt;
      <span className="text-gray-700"> Mobile Covers</span>
    </nav>

    {/* Heading */}
    <h1 className="text-2xl font-semibold mb-6">Mobile Covers and Cases</h1>

    {/* Dropdowns */}
    <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 space-y-4 sm:space-y-0">
      <select
        value={selectedBrand}
        onChange={handleBrandChange}
        className="w-full sm:w-1/2 p-2 border rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Choose your Brand</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <select
        value={selectedModel}
        onChange={handleModelChange}
        className="w-full sm:w-1/2 p-2 border rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={!selectedBrand} // Disable model dropdown until a brand is selected
      >
        <option value="">Choose your Model</option>
        {/* Models can be dynamically populated based on selected brand */}
        {selectedBrand && (
          <option value="Sample Model">Sample Model</option>
        )}
      </select>
    </div>

    {/* Popular Brands */}
    <div className="mb-6">
      <h2 className="text-sm font-medium text-gray-700 mb-2">POPULAR</h2>
      <div className="flex flex-wrap gap-2">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              selectedBrand === brand ? "bg-gray-100" : ""
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>

    {/* Show Mobile Cover Button */}
    <button className="w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
      SHOW MOBILE COVER
    </button>

      {/* New Section from Image */}
    <div className="mt-15">
      <h2 className="text-xl font-bold mb-4">
        MOBILE COVERS & CASES BY BEWAKOO®
      </h2>
      <p className="text-sm leading-relaxed mb-8 text-black">
        BeWakoo® offers an exclusive range of stylish and trendy phone covers and cases. BeWakoo® has a wide variety of designs to choose from, so you can find the perfect cover or case to show off your personality. All of our covers and cases are made of high-quality materials that offer protection to your phone. So whether you’re looking for a funky cover to show off your personality or a case to protect your phone from scratches and bumps, BeWakoo® has you covered!
      </p>

      <h2 className="text-xl font-bold mb-4">
        MOBILE COVERS FOR WOMEN
      </h2>
      <p className="text-sm leading-relaxed text-black-700">
        Shop Stylish mobile covers for women from BeWakoo® & make a statement! Our collection of Mobile Covers for Women is designed with function & fashion in mind. These lightweight back covers come in a variety of colors and designs to match any outfit, from neutral tones to bright, vibrant colors. Protect your phone while looking great with our Mobile Covers for Women – they provide protection against dirt, dust and scratches, as well as protection from drops and bumps. So don’t settle for anything less – shop now for Mobile Covers for Women from BeWakoo® and stay stylish all day!
      </p>
      <p className="text-sm leading-relaxed text-black mt-6">
        Get the perfect Mobile Cover that reflects your personality and style! Shop Now at Bewakoof®! With our wide range of stylish and rugged Mobile Covers for Women, you can find the perfect mobile cover that reflects your personality and style. Choose from a variety of colors and designs to match any outfit or mood. Whether you’re looking to make a statement or just want to protect your phone, our Mobile Covers for Women are a perfect choice.
      </p>

      <h2 className="text-xl font-bold mb-4 mt-6">
        MOBILE COVERS FOR MEN
      </h2>
      <p className="text-sm leading-relaxed mb-8 text-black">
        Tired of using the same boring mobile cover? Then why not update your style with one of our trendy mobile covers for men from Bewakoof®! All our back covers are designed to protect your phone and feature vibrant, stylish designs that will make you stand out in the crowd. Whether you're looking for something subtle or eye-catching, you're sure to find something that fits your style in our collection of mobile covers for men.
      </p>
      <h2 className="text-xl font-bold mb-4 mt-6">
        Why choose Bewakoof® for your phone covers or cases?
      </h2>
      <p className="text-sm leading-relaxed mb-8 text-black">
        There are several reasons why you should choose Bewakoof® for your phone case needs. Firstly, the company offers a wide range of designs and colours to choose from. Secondly, Bewakoof® covers and cases are made from high-quality materials, so you can be sure your phone is well protected. And finally, Bewakoof® offers great value for money – you won’t find better quality back covers and cases at a better price anywhere else.
      </p>
      <h2 className="text-xl font-bold mb-4 mt-6">
        How To Choose The Perfect Mobile Case For Your Phone?

      </h2>
      <p className="text-sm leading-relaxed mb-8 text-black">
        When choosing a phone cover or case, it’s important to consider your needs and preferences. Firstly, decide what type of material you would like your cover or case to be made from. Bewakoof® offers covers and cases made from hard plastic, soft silicone or even glass.
      </p>
       <p className="text-sm leading-relaxed text-black mt-6">
        Secondly, think about the design you would like. Bewakoof® offers a wide range of designs to choose from, so you can find the perfect one to suit your personality and style.
      </p>
      <p className="text-sm leading-relaxed text-black mt-6">
        And finally, consider the price. Bewakoof® offers great value for money, so you can be sure you’re getting a high-quality cover or case at a great price.
      </p>
      
      
    </div>
    </div>
    
    </div>
  );
}

export default MobileCoversPage;
