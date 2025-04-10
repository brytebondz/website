"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Search, Utensils, Users } from "lucide-react"

const categories = [
  { id: "all", name: "All Recipes" },
  { id: "appetizers", name: "Appetizers" },
  { id: "main-courses", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "snacks", name: "Snacks" },
]

const recipes = [
  {
    id: 1,
    title: "Mushroom Biscuit Canapés",
    category: "appetizers",
    time: "15 min",
    servings: 12,
    difficulty: "Easy",
    image: "/placeholder.svg?height=400&width=600",
    slug: "mushroom-biscuit-canapes",
  },
  {
    id: 2,
    title: "Creamy Mushroom Biscuit Soup",
    category: "main-courses",
    time: "30 min",
    servings: 4,
    difficulty: "Medium",
    image: "/placeholder.svg?height=400&width=600",
    slug: "creamy-mushroom-biscuit-soup",
  },
  {
    id: 3,
    title: "Mushroom Biscuit Crumble",
    category: "desserts",
    time: "45 min",
    servings: 6,
    difficulty: "Medium",
    image: "/placeholder.svg?height=400&width=600",
    slug: "mushroom-biscuit-crumble",
  },
  {
    id: 4,
    title: "Spicy Mushroom Biscuit Dip",
    category: "appetizers",
    time: "10 min",
    servings: 8,
    difficulty: "Easy",
    image: "/placeholder.svg?height=400&width=600",
    slug: "spicy-mushroom-biscuit-dip",
  },
  {
    id: 5,
    title: "Mushroom Biscuit Trail Mix",
    category: "snacks",
    time: "5 min",
    servings: 4,
    difficulty: "Easy",
    image: "/placeholder.svg?height=400&width=600",
    slug: "mushroom-biscuit-trail-mix",
  },
  {
    id: 6,
    title: "Mushroom Biscuit Crusted Chicken",
    category: "main-courses",
    time: "40 min",
    servings: 4,
    difficulty: "Medium",
    image: "/placeholder.svg?height=400&width=600",
    slug: "mushroom-biscuit-crusted-chicken",
  },
  {
    id: 7,
    title: "Sweet Mushroom Biscuit Parfait",
    category: "desserts",
    time: "20 min",
    servings: 4,
    difficulty: "Easy",
    image: "/placeholder.svg?height=400&width=600",
    slug: "sweet-mushroom-biscuit-parfait",
  },
  {
    id: 8,
    title: "Mushroom Biscuit Energy Balls",
    category: "snacks",
    time: "25 min",
    servings: 12,
    difficulty: "Easy",
    image: "/placeholder.svg?height=400&width=600",
    slug: "mushroom-biscuit-energy-balls",
  },
]

export default function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = activeCategory === "all" || recipe.category === activeCategory
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Delicious Recipes</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover creative ways to enjoy our mushroom biscuits with these delicious recipes.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Link href={`/recipes/${recipe.slug}`}>
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-video relative">
                      <Image
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                        {recipe.category === "appetizers"
                          ? "Appetizer"
                          : recipe.category === "main-courses"
                            ? "Main Course"
                            : recipe.category === "desserts"
                              ? "Dessert"
                              : "Snack"}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-xl mb-3">{recipe.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>Serves {recipe.servings}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Utensils className="h-4 w-4" />
                          <span>{recipe.difficulty}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1 mt-2">
                        View Recipe <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No recipes found. Try a different search term or category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Featured Recipe */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Recipe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Try our chef's special recipe using our delicious mushroom biscuits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mushroom Biscuit Bruschetta"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Mushroom Biscuit Bruschetta</h3>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>20 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>Serves 6</span>
                </div>
                <div className="flex items-center gap-1">
                  <Utensils className="h-4 w-4" />
                  <span>Easy</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                This elegant appetizer combines our classic mushroom biscuits with fresh tomatoes, basil, and a balsamic
                glaze for a delicious start to any meal.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>12 Bryte Bondz Classic Mushroom Biscuits</li>
                  <li>2 cups cherry tomatoes, diced</li>
                  <li>1/4 cup fresh basil, chopped</li>
                  <li>2 cloves garlic, minced</li>
                  <li>2 tbsp olive oil</li>
                  <li>1 tbsp balsamic glaze</li>
                  <li>Salt and pepper to taste</li>
                </ul>
              </div>

              <Button asChild>
                <Link href="/recipes/mushroom-biscuit-bruschetta">View Full Recipe</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Submit Recipe CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Creations</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Have a delicious recipe using our mushroom biscuits? We'd love to feature it on our website!
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Submit Your Recipe</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
