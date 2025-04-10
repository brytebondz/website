"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ChevronRight, Minus, Plus, ShoppingCart, Star } from "lucide-react"

// This would typically come from a database or API
const products = [
  {
    slug: "classic",
    name: "Classic Mushroom Biscuits",
    price: 4.99,
    description:
      "Our signature mushroom biscuits made with a blend of premium mushrooms and traditional spices for a classic flavor that everyone loves.",
    longDescription:
      "Our Classic Mushroom Biscuits are the perfect introduction to the world of mushroom-based snacks. Made with a carefully selected blend of shiitake, button, and oyster mushrooms, these biscuits offer a subtle earthy flavor that pairs perfectly with our proprietary spice mix. Each bite delivers a satisfying crunch followed by a melt-in-your-mouth experience that will leave you reaching for more. Perfect as a snack, with tea, or as an accompaniment to soups and salads.",
    nutritionalInfo: {
      calories: 120,
      protein: "3g",
      carbs: "18g",
      fat: "5g",
      fiber: "2g",
    },
    ingredients: "Wheat flour, mushroom blend (shiitake, button, oyster), butter, salt, spices, baking powder.",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    reviews: 124,
    rating: 4.8,
    inStock: true,
  },
  {
    slug: "herb",
    name: "Herb & Mushroom Biscuits",
    price: 5.49,
    description:
      "A delightful blend of aromatic herbs and premium mushrooms, creating a savory biscuit that's perfect for any occasion.",
    longDescription:
      "Our Herb & Mushroom Biscuits combine the earthy goodness of premium mushrooms with a fragrant blend of rosemary, thyme, and basil. This harmonious combination creates a sophisticated flavor profile that elevates the humble biscuit to new heights. Each batch is carefully baked to achieve the perfect texture - crisp on the outside with a tender interior. These biscuits are perfect for pairing with cheese, dips, or enjoyed on their own as a satisfying snack.",
    nutritionalInfo: {
      calories: 125,
      protein: "3.2g",
      carbs: "17g",
      fat: "5.5g",
      fiber: "2.2g",
    },
    ingredients:
      "Wheat flour, mushroom blend (shiitake, porcini), butter, herbs (rosemary, thyme, basil), salt, olive oil, baking powder.",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    reviews: 98,
    rating: 4.7,
    inStock: true,
  },
  {
    slug: "cheese",
    name: "Cheese & Mushroom Biscuits",
    price: 5.99,
    description:
      "The perfect combination of rich, creamy cheese and earthy mushrooms in a crispy, savory biscuit that melts in your mouth.",
    longDescription:
      "Our Cheese & Mushroom Biscuits are a cheese lover's dream. We've combined premium aged cheddar with our signature mushroom blend to create a rich, savory biscuit with incredible depth of flavor. The cheese adds a creamy texture and satisfying umami taste that complements the earthiness of the mushrooms perfectly. Each biscuit is golden-brown and slightly crisp on the outside, while remaining tender inside. Perfect for snacking, entertaining, or pairing with your favorite soup or salad.",
    nutritionalInfo: {
      calories: 135,
      protein: "4g",
      carbs: "16g",
      fat: "7g",
      fiber: "1.8g",
    },
    ingredients:
      "Wheat flour, mushroom blend (shiitake, button), aged cheddar cheese (15%), butter, salt, black pepper, baking powder.",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    reviews: 112,
    rating: 4.9,
    inStock: true,
  },
  {
    slug: "spicy",
    name: "Spicy Mushroom Biscuits",
    price: 5.49,
    description:
      "A fiery twist on our classic mushroom biscuits, featuring a blend of chili peppers and spices for those who like a bit of heat.",
    longDescription:
      "Our Spicy Mushroom Biscuits are for those who enjoy a kick with their snacks. We've taken our classic mushroom biscuit recipe and added a carefully balanced blend of chili peppers and spices to create a biscuit with just the right amount of heat. The spiciness builds gradually, complementing rather than overwhelming the earthy mushroom flavors. Each bite offers a complex taste experience that starts savory and finishes with a pleasant warmth. These biscuits are perfect for spice enthusiasts and adventurous snackers alike.",
    nutritionalInfo: {
      calories: 125,
      protein: "3g",
      carbs: "18g",
      fat: "5g",
      fiber: "2.1g",
    },
    ingredients:
      "Wheat flour, mushroom blend (shiitake, button), butter, chili pepper blend, paprika, cayenne, salt, baking powder.",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    reviews: 87,
    rating: 4.6,
    inStock: true,
  },
  {
    slug: "gluten-free",
    name: "Gluten-Free Mushroom Biscuits",
    price: 6.49,
    description:
      "All the flavor of our classic mushroom biscuits in a gluten-free version, perfect for those with dietary restrictions.",
    longDescription:
      "Our Gluten-Free Mushroom Biscuits were developed to ensure everyone can enjoy the delicious taste of our mushroom biscuits. We've carefully selected a blend of rice flour, tapioca starch, and almond flour to create a texture that rivals traditional wheat-based biscuits. The result is a crisp, flavorful biscuit that's indistinguishable from our classic version. Each batch is produced in a dedicated gluten-free facility to prevent cross-contamination, making these biscuits safe for those with celiac disease or gluten sensitivity.",
    nutritionalInfo: {
      calories: 130,
      protein: "2.5g",
      carbs: "19g",
      fat: "5.5g",
      fiber: "2.5g",
    },
    ingredients:
      "Rice flour, tapioca starch, almond flour, mushroom blend (shiitake, button), butter alternative, salt, xanthan gum, baking powder.",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    reviews: 76,
    rating: 4.7,
    inStock: true,
  },
]

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [activeTab, setActiveTab] = useState("description")

  // Find the product based on the slug
  const product = products.find((p) => p.slug === params.slug) || products[0]

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="aspect-square relative rounded-xl overflow-hidden mb-4">
              <Image
                src={product.images[activeImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square relative rounded-md overflow-hidden cursor-pointer ${
                    activeImage === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</div>

            <p className="text-muted-foreground mb-8">{product.description}</p>

            <div className="space-y-8">
              {/* Quantity Selector */}
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Buy Now
                </Button>
              </div>

              {/* Stock Status */}
              <div className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="py-6">
              <p className="text-muted-foreground">{product.longDescription}</p>
            </TabsContent>
            <TabsContent value="ingredients" className="py-6">
              <h3 className="font-semibold text-lg mb-4">Ingredients</h3>
              <p className="text-muted-foreground">{product.ingredients}</p>
            </TabsContent>
            <TabsContent value="nutrition" className="py-6">
              <h3 className="font-semibold text-lg mb-4">Nutritional Information</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="text-lg font-semibold">{product.nutritionalInfo.calories}</div>
                  <div className="text-sm text-muted-foreground">Calories</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="text-lg font-semibold">{product.nutritionalInfo.protein}</div>
                  <div className="text-sm text-muted-foreground">Protein</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="text-lg font-semibold">{product.nutritionalInfo.carbs}</div>
                  <div className="text-sm text-muted-foreground">Carbs</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="text-lg font-semibold">{product.nutritionalInfo.fat}</div>
                  <div className="text-sm text-muted-foreground">Fat</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="text-lg font-semibold">{product.nutritionalInfo.fiber}</div>
                  <div className="text-sm text-muted-foreground">Fiber</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((p) => p.slug !== params.slug)
              .slice(0, 4)
              .map((product, index) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Link href={`/products/${product.slug}`}>
                    <div className="aspect-square relative rounded-xl overflow-hidden mb-4">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">${product.price.toFixed(2)}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 text-sm">{product.rating}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
