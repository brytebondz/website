"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

const categories = [
  { id: "all", name: "All Questions" },
  { id: "products", name: "Products" },
  { id: "orders", name: "Orders & Shipping" },
  { id: "ingredients", name: "Ingredients" },
  { id: "company", name: "Company" },
]

const faqs = [
  {
    id: 1,
    question: "What makes your mushroom biscuits special?",
    answer:
      "Our mushroom biscuits are special because they combine the nutritional benefits of premium mushrooms with delicious flavors. We use a proprietary process that preserves the mushrooms' beneficial compounds while creating a tasty, crunchy biscuit that's perfect for snacking.",
    category: "products",
  },
  {
    id: 2,
    question: "Are your mushroom biscuits suitable for vegetarians?",
    answer:
      "Yes, all our mushroom biscuits are vegetarian-friendly. We use plant-based ingredients and do not include any meat or animal-derived products in our recipes.",
    category: "ingredients",
  },
  {
    id: 3,
    question: "Do you offer gluten-free options?",
    answer:
      "Yes, we have a dedicated gluten-free range of mushroom biscuits. These are produced in a separate facility to prevent cross-contamination and are safe for those with celiac disease or gluten sensitivity.",
    category: "products",
  },
  {
    id: 4,
    question: "How long do your mushroom biscuits stay fresh?",
    answer:
      "Our mushroom biscuits have a shelf life of 6 months from the date of production when stored in a cool, dry place. The exact expiration date is printed on each package.",
    category: "products",
  },
  {
    id: 5,
    question: "What shipping methods do you offer?",
    answer:
      "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and same-day delivery in select cities. Shipping costs vary based on location and chosen method.",
    category: "orders",
  },
  {
    id: 6,
    question: "Can I return my order if I'm not satisfied?",
    answer:
      "We have a 100% satisfaction guarantee. If you're not completely satisfied with your purchase, please contact our customer service team within 14 days of receiving your order, and we'll arrange a refund or replacement.",
    category: "orders",
  },
  {
    id: 7,
    question: "What types of mushrooms do you use in your biscuits?",
    answer:
      "We use a blend of premium mushrooms including shiitake, button, oyster, and porcini, depending on the specific product. Each variety is chosen for its unique flavor profile and nutritional benefits.",
    category: "ingredients",
  },
  {
    id: 8,
    question: "Are your products organic?",
    answer:
      "Many of our ingredients are organic, and we're working toward full organic certification for our entire product line. Currently, our 'Organic Range' is certified organic, while our standard products use a mix of organic and conventional ingredients.",
    category: "ingredients",
  },
  {
    id: 9,
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship throughout India. We're working on expanding our shipping capabilities to international destinations and hope to offer this service soon.",
    category: "orders",
  },
  {
    id: 10,
    question: "Where is your company located?",
    answer:
      "Our headquarters and main production facility are located in Sivagangai, Tamil Nadu. We also have regional offices in major cities across India.",
    category: "company",
  },
  {
    id: 11,
    question: "Are your packaging materials eco-friendly?",
    answer:
      "Yes, we're committed to sustainability. Our packaging is made from recyclable or biodegradable materials, and we're constantly researching new ways to reduce our environmental footprint.",
    category: "company",
  },
  {
    id: 12,
    question: "Do you offer wholesale options for businesses?",
    answer:
      "Yes, we offer wholesale pricing for retailers, restaurants, and other businesses. Please contact our sales team at wholesale@brytebondz.com for more information and to set up a wholesale account.",
    category: "orders",
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products, ordering process, and more.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search questions..."
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

        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <AccordionItem value={`item-${faq.id}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No questions found. Try a different search term or category.</p>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            If you couldn't find the answer you were looking for, please don't hesitate to contact us directly.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
