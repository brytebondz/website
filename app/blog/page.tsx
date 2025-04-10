"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Search, User } from "lucide-react"

const categories = [
  { id: "all", name: "All Posts" },
  { id: "health", name: "Health" },
  { id: "recipes", name: "Recipes" },
  { id: "nutrition", name: "Nutrition" },
  { id: "company", name: "Company News" },
]

const blogPosts = [
  {
    id: 1,
    title: "The Health Benefits of Mushrooms You Need to Know",
    excerpt:
      "Discover the amazing health benefits of different mushroom varieties and how they can improve your wellbeing.",
    category: "health",
    date: "April 10, 2024",
    author: "Dr. Priya Sharma",
    image: "/placeholder.svg?height=400&width=600",
    slug: "health-benefits-of-mushrooms",
  },
  {
    id: 2,
    title: "5 Creative Ways to Use Mushroom Biscuits in Your Cooking",
    excerpt:
      "Get inspired with these innovative recipes that incorporate our delicious mushroom biscuits in unexpected ways.",
    category: "recipes",
    date: "March 28, 2024",
    author: "Chef Arun Nair",
    image: "/placeholder.svg?height=400&width=600",
    slug: "creative-ways-to-use-mushroom-biscuits",
  },
  {
    id: 3,
    title: "Understanding the Nutritional Profile of Mushrooms",
    excerpt: "A deep dive into the vitamins, minerals, and other nutrients found in different mushroom varieties.",
    category: "nutrition",
    date: "March 15, 2024",
    author: "Nutritionist Lakshmi Venkat",
    image: "/placeholder.svg?height=400&width=600",
    slug: "nutritional-profile-of-mushrooms",
  },
  {
    id: 4,
    title: "Bryte Bondz Wins 'Best Health Food Innovation' Award",
    excerpt:
      "We're proud to announce that our mushroom biscuits have been recognized for their innovative approach to healthy snacking.",
    category: "company",
    date: "March 5, 2024",
    author: "Marketing Team",
    image: "/placeholder.svg?height=400&width=600",
    slug: "best-health-food-innovation-award",
  },
  {
    id: 5,
    title: "The Science Behind Mushroom's Immune-Boosting Properties",
    excerpt:
      "Explore the research on how mushrooms support immune function and what compounds are responsible for these benefits.",
    category: "health",
    date: "February 20, 2024",
    author: "Dr. Rajesh Kumar",
    image: "/placeholder.svg?height=400&width=600",
    slug: "mushroom-immune-boosting-properties",
  },
  {
    id: 6,
    title: "Seasonal Mushroom Guide: What's Best Right Now",
    excerpt: "Learn about seasonal mushroom varieties and how to select the best mushrooms throughout the year.",
    category: "nutrition",
    date: "February 10, 2024",
    author: "Food Specialist Anita Desai",
    image: "/placeholder.svg?height=400&width=600",
    slug: "seasonal-mushroom-guide",
  },
  {
    id: 7,
    title: "Mushroom Biscuits: The Perfect Hiking Snack",
    excerpt: "Discover why our mushroom biscuits are the ideal companion for your outdoor adventures.",
    category: "health",
    date: "January 25, 2024",
    author: "Outdoor Enthusiast Vikram Singh",
    image: "/placeholder.svg?height=400&width=600",
    slug: "mushroom-biscuits-hiking-snack",
  },
  {
    id: 8,
    title: "Expanding Our Product Line: New Flavors Coming Soon",
    excerpt: "Get a sneak peek at the exciting new mushroom biscuit flavors we'll be launching in the coming months.",
    category: "company",
    date: "January 15, 2024",
    author: "Product Development Team",
    image: "/placeholder.svg?height=400&width=600",
    slug: "new-flavors-coming-soon",
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, recipes, and insights about mushrooms and healthy eating.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search articles..."
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
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-video relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-xl mb-3">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <Button variant="ghost" size="sm" className="gap-1 mt-2">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No articles found. Try a different search term or category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Featured Article */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Article</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular and informative article about mushrooms and their benefits.
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
                  alt="The Complete Guide to Mushroom Benefits"
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
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>April 15, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span>Research Team</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                The Complete Guide to Mushroom Benefits: From Immunity to Brain Health
              </h3>

              <p className="text-muted-foreground mb-6">
                This comprehensive guide explores the wide-ranging health benefits of mushrooms, from supporting immune
                function to enhancing cognitive performance. Backed by scientific research, we delve into the unique
                compounds found in different mushroom varieties and how they contribute to overall wellbeing.
              </p>

              <p className="text-muted-foreground mb-6">
                Learn about beta-glucans, ergothioneine, and other bioactive compounds that make mushrooms a true
                superfood. We also discuss how our mushroom biscuits are designed to preserve these beneficial
                properties while delivering a delicious snacking experience.
              </p>

              <Button asChild>
                <Link href="/blog/complete-guide-mushroom-benefits">Read Full Article</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest articles, recipes, and news about our products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 flex-1"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
