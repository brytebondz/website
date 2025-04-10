"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function ProcessPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * index, duration: 0.5 },
    }),
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Crafting Process</h1>
              <p className="text-lg text-muted-foreground mb-6">
                From farm to table, discover the meticulous journey of our mushroom biscuits.
              </p>
              <p className="text-muted-foreground mb-8">
                At Bryte Bondz, we believe that exceptional products come from exceptional processes. Every step in our
                production is carefully designed to ensure quality, taste, and nutritional value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mushroom biscuit production"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Step-by-Step Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-muted-foreground"
            >
              Every batch of our mushroom biscuits goes through this carefully designed process to ensure consistent
              quality and taste.
            </motion.p>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <div className="bg-primary/10 text-primary font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Sourcing Premium Ingredients</h3>
                <p className="text-muted-foreground mb-6">
                  We partner with local farmers who share our commitment to quality and sustainability. Our mushrooms
                  are grown in controlled environments to ensure optimal nutrition and flavor.
                </p>
                <p className="text-muted-foreground">
                  We select only the finest varieties of mushrooms, including shiitake, button, and oyster, each chosen
                  for their unique nutritional profiles and flavors.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="aspect-video relative rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sourcing ingredients"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-video relative rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Preparation process"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-primary/10 text-primary font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Careful Preparation</h3>
                <p className="text-muted-foreground mb-6">
                  Our skilled chefs clean and prepare the mushrooms using techniques that preserve their nutritional
                  value and enhance their natural flavors.
                </p>
                <p className="text-muted-foreground">
                  The mushrooms are then combined with other premium ingredients according to our proprietary recipes,
                  each developed to create a perfect balance of flavors and textures.
                </p>
              </motion.div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <div className="bg-primary/10 text-primary font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4">Artisanal Baking</h3>
                <p className="text-muted-foreground mb-6">
                  Our biscuits are baked in small batches to ensure consistent quality and perfect texture. We use
                  traditional baking methods combined with modern technology to achieve the ideal bake.
                </p>
                <p className="text-muted-foreground">
                  Each batch is carefully monitored throughout the baking process, with our master bakers adjusting
                  temperatures and timing to account for variations in ingredients and environmental conditions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="aspect-video relative rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Baking process"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-video relative rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Quality control"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-primary/10 text-primary font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  4
                </div>
                <h3 className="text-2xl font-bold mb-4">Rigorous Quality Control</h3>
                <p className="text-muted-foreground mb-6">
                  Every batch undergoes thorough quality checks to ensure it meets our high standards for taste,
                  texture, and appearance. Only the biscuits that pass all our tests make it to packaging.
                </p>
                <p className="text-muted-foreground">
                  We also conduct regular nutritional analysis to verify that our biscuits deliver the health benefits
                  we promise, with consistent levels of protein, fiber, and other nutrients.
                </p>
              </motion.div>
            </div>

            {/* Step 5 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <div className="bg-primary/10 text-primary font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  5
                </div>
                <h3 className="text-2xl font-bold mb-4">Eco-Friendly Packaging</h3>
                <p className="text-muted-foreground mb-6">
                  We package our biscuits in environmentally friendly materials that maintain freshness while minimizing
                  our ecological footprint. Our packaging is designed to be both functional and sustainable.
                </p>
                <p className="text-muted-foreground">
                  Each package is carefully sealed to preserve the biscuits' flavor and extend their shelf life
                  naturally, without the need for artificial preservatives.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="aspect-video relative rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Eco-friendly packaging"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Commitment to Quality
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-muted-foreground"
            >
              Quality is at the heart of everything we do. Here's how we ensure that every biscuit meets our high
              standards.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ingredient Testing",
                description: "Every batch of ingredients is tested for quality and purity before use.",
              },
              {
                title: "Recipe Precision",
                description: "Our recipes are followed with scientific precision to ensure consistency.",
              },
              {
                title: "Taste Testing",
                description: "Regular taste tests ensure our biscuits maintain their delicious flavor.",
              },
              {
                title: "Nutritional Analysis",
                description: "We regularly analyze our products to verify their nutritional content.",
              },
              {
                title: "Shelf-Life Testing",
                description: "Extensive testing ensures our biscuits stay fresh without preservatives.",
              },
              {
                title: "Customer Feedback",
                description: "We continuously improve based on feedback from our valued customers.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-background p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Taste the result of our meticulous process and commitment to quality. Try our mushroom biscuits today!
            </p>
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <Link href="/products">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
