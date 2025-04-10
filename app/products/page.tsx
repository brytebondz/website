"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, Filter, Search } from "lucide-react"

const categories = [
  { id: "all", name: "All Products" },
  { id: "classic", name: "Classic" },
  { id: "herb", name: "Herb & Spice" },
  { id: "cheese", name: "Cheese" },
  { id: "gluten-free", name: "Gluten-Free" },
]

const products = [
  {
    id: 1,
    name: "Classic Mushroom Biscuits",
    category: "classic",
    price: 4.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "classic",
  },
  {
    id: 2,
    name: "Herb & Mushroom Biscuits",
    category: "herb",
    price: 5.49,
    image: "/placeholder.svg?height=400&width=400",
    slug: "herb",
  },
  {
    id: 3,
    name: "Cheese & Mushroom Biscuits",
    category: "cheese",
    price: 5.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "cheese",
  },
  {
    id: 4,
    name: "Spicy Mushroom Biscuits",
    category: "herb",
    price: 5.49,
    image: "/placeholder.svg?height=400&width=400",
    slug: "spicy",
  },
  {
    id: 5,
    name: "Garlic Mushroom Biscuits",
    category: "herb",
    price: 5.49,
    image: "/placeholder.svg?height=400&width=400",
    slug: "garlic",
  },
  {
    id: 6,
    name: "Gluten-Free Mushroom Biscuits",
    category: "gluten-free",
    price: 6.49,
    image: "/placeholder.svg?height=400&width=400",
    slug: "gluten-free",
  },
  {
    id: 7,
    name: "Gluten-Free Herb Mushroom",
    category: "gluten-free",
    price: 6.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "gluten-free-herb",
  },
  {
    id: 8,
    name: "Cheddar Mushroom Biscuits",
    category: "cheese",
    price: 5.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "cheddar",
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of delicious mushroom biscuits, crafted with care using the finest ingredients.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Link href={`/products/${product.slug}`}>
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-square relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">${product.price.toFixed(2)}</span>
                        <Button variant="ghost" size="sm" className="gap-1">
                          View <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No products found. Try a different search term or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
