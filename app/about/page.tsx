"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Award, Clock, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Bryte Bondz was founded with a simple mission: to create delicious, nutritious snacks that harness the
                power of mushrooms.
              </p>
              <p className="text-muted-foreground mb-8">
                What started as a small family business in Sivagangai has grown into a beloved brand known for quality
                and innovation in the health food industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Bryte Bondz founders"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-muted/30 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                To create delicious, nutritious mushroom-based products that promote health and wellbeing while
                supporting sustainable farming practices.
              </p>
              <p className="text-muted-foreground">
                We believe that good food should not only taste great but also be good for you and the planet. That's
                why we're committed to using only the finest ingredients and environmentally friendly practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-muted/30 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-muted-foreground mb-6">
                To be the leading provider of innovative mushroom-based foods, recognized globally for our commitment to
                health, taste, and sustainability.
              </p>
              <p className="text-muted-foreground">
                We envision a world where nutritious snacks are accessible to all, and where the incredible benefits of
                mushrooms are widely appreciated and enjoyed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing ingredients to serving our customers.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: "Quality",
                description: "We never compromise on the quality of our ingredients or products.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Community",
                description: "We support local farmers and give back to our community.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description: "We continuously explore new ways to create delicious, nutritious products.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Sustainability",
                description: "We're committed to environmentally friendly practices in all aspects of our business.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-background p-6 rounded-xl text-center"
              >
                <div className="mx-auto mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Bryte Bondz who work tirelessly to bring you the best mushroom biscuits.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
              {
                name: "Priya Sharma",
                role: "Head of Product Development",
                image: "/placeholder.svg?height=300&width=300",
              },
              { name: "Arun Nair", role: "Chief Operations Officer", image: "/placeholder.svg?height=300&width=300" },
              { name: "Lakshmi Venkat", role: "Marketing Director", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to where we are today, our journey has been filled with growth and innovation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />

            <div className="space-y-16">
              {[
                {
                  year: "2010",
                  title: "The Beginning",
                  description:
                    "Bryte Bondz was founded in a small kitchen in Sivagangai with a vision to create healthy, tasty snacks.",
                },
                {
                  year: "2015",
                  title: "Expansion",
                  description:
                    "We moved to a larger facility and expanded our product line to include various flavors of mushroom biscuits.",
                },
                {
                  year: "2018",
                  title: "National Recognition",
                  description: "Our products gained national recognition and we began distributing across India.",
                },
                {
                  year: "2022",
                  title: "Innovation",
                  description:
                    "We launched our gluten-free range and received the 'Best Health Food Innovation' award.",
                },
                {
                  year: "2024",
                  title: "Today",
                  description:
                    "We continue to grow and innovate, staying true to our mission of providing delicious, nutritious mushroom biscuits.",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                >
                  <div className="flex-1 md:w-1/2" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="flex-1 md:w-1/2">
                    <div className={`bg-background p-6 rounded-xl ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              We're always looking for passionate people to join our team and help us continue to innovate and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/careers">View Careers</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
