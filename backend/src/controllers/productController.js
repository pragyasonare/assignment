const products = [
  {
    id: 1,
    name: "Diamond Necklace",
    description: "Elegant diamond necklace with 18k gold",
    price: 2999.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    category: "Necklaces"
  },
  {
    id: 2,
    name: "Ruby Earrings",
    description: "Beautiful ruby stud earrings",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
    category: "Earrings"
  },
  {
    id: 3,
    name: "Sapphire Bracelet",
    description: "Luxurious sapphire tennis bracelet",
    price: 1999.99,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
    category: "Bracelets"
  },
  {
    id: 4,
    name: "Emerald Ring",
    description: "Vintage emerald and diamond ring",
    price: 3499.99,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    category: "Rings"
  },
  {
    id: 5,
    name: "Gold Bangle",
    description: "Traditional 22k gold bangle",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1594576722512-582d5577dc56?w=400",
    category: "Bangles"
  }
];

const getProducts = (req, res) => {
  try {
    res.json({
      success: true,
      data: products,
      count: products.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching products'
    });
  }
};

module.exports = { getProducts };