import React, { useState, useEffect } from 'react';
import { FaTruck } from 'react-icons/fa';

const WomenPage = () => {
const [products, setProducts] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [designFilter, setDesignFilter] = useState([]);
  const [fitFilter, setFitFilter] = useState([]);
  const [sleeveFilter, setSleeveFilter] = useState([]);
  const [neckFilter, setNeckFilter] = useState([]);
const [ratingFilter, setRatingFilter] = useState(null);
const [discountFilter, setDiscountFilter] = useState('');
const [offerFilter, setOfferFilter] = useState([]);
const [sortOption, setSortOption] = useState('popularity');

// Load mock data on component mount
  useEffect(() => {
    setProducts(mockProducts);
  }, [])


// Mock product data
const mockProducts = [
  {
    _id: '1',
    title: 'Iron Man T-Shirt',
    category: 'T-Shirt',
    size: 'M',
    color: 'Black',
    design: 'Graphic Print',
    fit: 'Regular Fit',
    sleeve: 'Half Sleeve',
    neck: 'Round Neck',
    type: 'T-Shirt',
    offer: 'Buy 2 For 999',
    discount: 10,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.6,
  },
  {
    _id: '2',
    title: 'Snoopy Space T-Shirt',
    category: 'T-Shirt',
    size: 'S',
    color: 'Black',
    design: 'Graphic Print',
    fit: 'Oversized Fit',
    sleeve: 'Half Sleeve',
    neck: 'Round Neck',
    type: 'T-Shirt',
    offer: 'Buy 2 For 999',
    discount: 30,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.7,
  },
  {
    _id: '3',
    title: 'Batman T-Shirt',
    category: 'T-Shirt',
    size: 'M',
    color: 'Black',
    design: 'Graphic Print',
    fit: 'Loose Comfort Fit',
    sleeve: 'Half Sleeve',
    neck: 'Round Neck',
    type: 'T-Shirt',
    offer: 'Buy 2 For 999',
    discount: 40,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.4,
  },
  {
    _id: '4',
    title: 'Sample Blue T-Shirt',
    category: 'T-Shirt',
    size: 'S',
    color: 'Blue',
    design: 'Solid',
    fit: 'Relaxed Fit',
    sleeve: 'Sleeveless',
    neck: 'Polo',
    type: 'T-Shirt',
    offer: 'Buy 3 For 999',
    discount: 50,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.2,
  },
  {
    _id: '5',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '6',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '7',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '8',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '9',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '10',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '11',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '12',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '13',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '14',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '15',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '16',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '17',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '18',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '19',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
  {
    _id: '20',
    title: 'Sample Green Hoodie',
    category: 'Hoodies',
    size: 'M',
    color: 'Green',
    design: 'Typography',
    fit: 'Super Loose Fit',
    sleeve: 'Full Sleeve',
    neck: 'Hooded',
    type: 'Hoodies',
    offer: '',
    discount: 60,
    image: 'https://images.bewakoof.com/t640/women-s-baby-lavender-no-worries-graphic-printed-oversized-t-shirt-657328-1734500368-1.jpg',
    rating: 4.5,
  },
];

// Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesType = typeFilter.length === 0 || typeFilter.includes(product.type);
      const matchesSize = sizeFilter.length === 0 || sizeFilter.includes(product.size);
      const matchesColor = colorFilter.length === 0 || colorFilter.includes(product.color);
      const matchesDesign = designFilter.length === 0 || designFilter.includes(product.design);
      const matchesFit = fitFilter.length === 0 || fitFilter.includes(product.fit);
      const matchesSleeve = sleeveFilter.length === 0 || sleeveFilter.includes(product.sleeve);
      const matchesNeck = neckFilter.length === 0 || neckFilter.includes(product.neck);
      const matchesRating = !ratingFilter || product.rating >= parseFloat(ratingFilter);
      const matchesOffer = offerFilter.length === 0 || (product.offer && offerFilter.includes(product.offer));
      const matchesDiscount = !discountFilter || (product.discount && product.discount >= parseFloat(discountFilter));
      return matchesType && matchesSize && matchesColor && matchesDesign && matchesFit && matchesSleeve && matchesNeck && matchesRating && matchesOffer && matchesDiscount;
    })
    .sort((a, b) => {
      if (sortOption === 'popularity') return b.rating - a.rating;
      return 0; // Add more sorting options if needed
    });

 
  const colors = [
    { name: 'Black', bgColor: 'bg-black' },
    { name: 'Blue', bgColor: 'bg-blue-900' },
    { name: 'White', bgColor: 'bg-white border border-gray-300' },
    { name: 'Green', bgColor: 'bg-green-900' },
    { name: 'Grey', bgColor: 'bg-gray-500' },
  ]; 
  
 const designs = ['Graphic Print', 'Solid', 'Typography', 'Aop', 'Textured'];
 // Fit options
  const fits = ['Oversized Fit', 'Regular Fit', 'Super Loose Fit', 'Relaxed Fit', 'Loose Comfort Fit'];

  // Sleeve options
  const sleeves = ['Half Sleeve', 'Full Sleeve', 'Sleeveless', 'Raglan Sleeve'];
  // Neck options
  const necks = ['Round Neck', 'Spread Collar', 'Hooded', 'Collar', 'Polo'];

  // Type options
  const types = ['T-Shirt', 'Shirt', 'Hoodies', 'Cargo', 'Sweatshirt'];
  // Rating options
  const ratings = ['4.5', '4', '3.5', '3', '2.5'];
  const handleRatingChange = (rating) => {
    setRatingFilter(rating === ratingFilter ? '' : rating); // Toggle rating filter (allow deselect)
  };

  // Offer options
  const offers = ['Buy 2 For 999', 'Buy 3 For 999'];
  // Discount options
  const discounts = ['10', '30', '40', '50', '60'];
  const handleDiscountChange = (discount) => {
    setDiscountFilter(discount === discountFilter ? '' : discount); // Toggle discount filter (allow deselect)
  };

  // Handle filter changes
  const handleTypeChange = (type) => {
    setTypeFilter(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleSizeChange = (size) => {
    setSizeFilter(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleColorChange = (color) => {
    setColorFilter(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleDesignChange = (design) => {
    setDesignFilter(prev =>
      prev.includes(design) ? prev.filter(d => d !== design) : [...prev, design]
    );
  };

  const handleFitChange = (fit) => {
    setFitFilter(prev =>
      prev.includes(fit) ? prev.filter(f => f !== fit) : [...prev, fit]
    );
  };

  const handleSleeveChange = (sleeve) => {
    setSleeveFilter(prev =>
      prev.includes(sleeve) ? prev.filter(s => s !== sleeve) : [...prev, sleeve]
    );
  };

  const handleNeckChange = (neck) => {
    setNeckFilter(prev =>
      prev.includes(neck) ? prev.filter(n => n !== neck) : [...prev, neck]
    );
  };

  const handleOfferChange = (offer) => {
    setOfferFilter(prev =>
      prev.includes(offer) ? prev.filter(o => o !== offer) : [...prev, offer]
    );
  };
  
  
  
  return (
    <div>
      {/* Top Free Shipping Banner */}
      <div className="bg-blue-700 text-white text-center py-2 flex justify-center items-center gap-2">
        <FaTruck className="text-white" />
        <span className="font-semibold">
          FREE SHIPPING on all orders above ₹399
        </span>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="px-4 py-4 pl-20">
        <p className="text-sm">
          <span className="text-gray-500">Home</span>
          <span className="mx-2 text-gray-500">{'>'}</span>
          <span className="text-black">Women Clothing</span>
        </p>
      </div>

      {/* Filter, Title, and Sort By Row */}
      <div className="px-4 py-2 flex items-center justify-between pl-16">
        {/* Left - Filter */}
        <div className="w-1/4 p-4">
        <h2 className="text-lg font-semibold mb-6  mt-4 pb-4 border-b border-gray-300">Filters</h2>
        
        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Category</h3>
          {['T-Shirt', 'Shirt', 'Hoodies', 'Joggers', 'Sweatshirt'].map(category => (
            <div key={category} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={category}
                className="mr-2"
                onChange={() => handleCategoryChange(category)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
          <a href="#" className="text-blue-500 text-sm ">SHOW</a>
        </div>

        {/* Size Filter */}
        <div>
          <h3 className="text-lg font-medium mb-2 mb-6  mt-4 pt-4 border-t border-gray-300 ">Sizes</h3>
          {['XS', 'S', 'M', 'L', 'XL'].map(size => (
            <div key={size} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={size}
                className="mr-2"
                onChange={() => handleSizeChange(size)}
              />
              <label htmlFor={size}>{size}</label>
            </div>
          ))}
        </div>
        <a href="#" className="text-blue-500 text-sm">SHOW</a>
        <div>
          <h3 className="text-lg font-medium mb-2 mt-5 mb-6  mt-4 pt-4 border-t border-gray-300">Brands</h3>
          {['bewakoof®', 'bewakoof air® 1.0', 'play by bewakoof', 'campus sutra', 'bewakoof heavy duty® 1.0'].map(brands => (
            <div key={brands} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={brands}
                className="mr-2"
                onChange={() => handleSizeChange(size)}
              />
              <label htmlFor={brands}>{brands}</label>
            </div>
          ))}
        </div>
        <a href="#" className="text-blue-500 text-sm">SHOW</a>

        {/* Color Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 mt-4 mb-6  mt-4 pt-4 border-t border-gray-300">Color</h3>
          {colors.map(color => (
            <div key={color.name} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={color.name}
                className="mr-2"
                onChange={() => handleColorChange(color.name)}
              />
              <span className={`w-5 h-5 mr-2 ${color.bgColor}`}></span>
              <label htmlFor={color.name}>{color.name.toUpperCase()}</label>
            </div>
          ))}
          <a href="#" className="text-blue-500 text-sm">SHOW</a>
        </div>

        {/* Design Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 mt-4 mb-6  mt-4 pt-4 border-t border-gray-300">Design</h3>
          {designs.map(design => (
            <div key={design} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={design}
                className="mr-2"
                onChange={() => handleDesignChange(design)}
              />
              <label htmlFor={design}>{design}</label>
            </div>
          ))}
          <a href="#" className="text-blue-500 text-sm">SHOW</a>
        </div>
        {/* Fit Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 mt-4 mb-6  mt-4 pt-4 border-t border-gray-300">Fit</h3>
          {fits.map(fit => (
            <div key={fit} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={fit}
                className="mr-2"
                onChange={() => handleFitChange(fit)}
              />
              <label htmlFor={fit}>{fit}</label>
            </div>
          ))}
          <a href="#" className="text-blue-500 text-sm">SHOW</a>
        </div>

        {/* Sleeve Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 mt-4 mb-6  mt-4 pt-4 border-t border-gray-300">Sleeve</h3>
          {sleeves.map(sleeve => (
            <div key={sleeve} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={sleeve}
                className="mr-2"
                onChange={() => handleSleeveChange(sleeve)}
              />
              <label htmlFor={sleeve}>{sleeve}</label>
            </div>
          ))}
        </div>
        {/* Neck Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 mt-4 mb-6  mt-4 pt-4 border-t border-gray-300">Neck</h3>
          {necks.map(neck => (
            <div key={neck} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={neck}
                className="mr-2"
                onChange={() => handleNeckChange(neck)}
              />
              <label htmlFor={neck}>{neck}</label>
            </div>
          ))}
          <a href="#" className="text-blue-500 text-sm">SHOW</a>
        </div>
         {/* Type Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 mt-4 mb-6  mt-4 pt-4 border-t border-gray-300">Type</h3>
          {types.map(type => (
            <div key={type} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={type}
                className="mr-2"
                onChange={() => handleTypeChange(type)}
              />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
          <a href="#" className="text-blue-500 text-sm">SHOW</a>
        </div>
        {/* Rating Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 mt-4 mb-6  mt-4 pt-4 border-t border-gray-300">Rating</h3>
          {ratings.map(rating => (
            <div key={rating} className="flex items-center mb-2">
              <input
                type="radio"
                id={`rating-${rating}`}
                name="rating"
                className="mr-2"
                checked={ratingFilter === rating}
                onChange={() => handleRatingChange(rating)}
              />
              <label htmlFor={`rating-${rating}`}>{rating} And Above</label>
            </div>
          ))}
          <a href="#" className="text-blue-500 text-sm">SHOW</a>
        </div>

        {/* Offers Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 mt-4 mb-6  mt-4 pt-4 border-t border-gray-300">Offers</h3>
          {offers.map(offer => (
            <div key={offer} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={offer}
                className="mr-2"
                onChange={() => handleOfferChange(offer)}
              />
              <label htmlFor={offer}>{offer}</label>
            </div>
          ))}
        </div>
         {/* Discount Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 mt-4 mb-6  mt-4 pt-4 border-t border-gray-300">Discount</h3>
          {discounts.map(discount => (
            <div key={discount} className="flex items-center mb-2">
              <input
                type="radio"
                id={`discount-${discount}`}
                name="discount"
                className="mr-2"
                checked={discountFilter === discount}
                onChange={() => handleDiscountChange(discount)}
              />
              <label htmlFor={`discount-${discount}`}>{discount}% Or More</label>
            </div>
          ))}
          <a href="#" className="text-blue-500 text-sm">SHOW</a>
        </div>
      </div>
     </div>
     {/* Products Section */}
      <div className="w-3/4 p-4 ml-80 mt-[-3200px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">
            Clothes for Women <span className="text-gray-500">{filteredProducts.length} Products</span>
          </h1>
          <div className="flex items-center">
            <span className="mr-2">Sort by:</span>
            <select
              className="border p-1 rounded"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="popularity">Popularity</option>
              <option value="most-reviewed">Most Reviewed</option>
                <option value="trending">Trending</option>
            </select>
          </div>
        </div>
     
        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <div key={product._id} className="relative">
              <img src={product.image} alt={product.title} className="w-full h-96 object-cover" />
              {product.offer && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {product.offer.toUpperCase()}
                </div>
              )}
              {product.discount > 0 && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}% OFF
                </div>
              )}
              <div className="mt-2">
                <h3 className="text-sm font-medium">{product.title}</h3>
                <p className="text-xs text-gray-500">{product.category}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">₹599</p> {/* Placeholder price */}
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
     
    </div>
    </div>
  );
}

export default WomenPage;
