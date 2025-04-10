"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Heart, Shield, Zap } from "lucide-react"

export default function BenefitsPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Benefits</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Discover the amazing nutritional benefits of our mushroom biscuits and how they contribute to your
                overall wellbeing.
              </p>
              <p className="text-muted-foreground mb-8">
                At Bryte Bondz, we believe that snacks can be both delicious and nutritious. Our mushroom biscuits are
                carefully crafted to provide a range of health benefits while satisfying your taste buds.
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
                  alt="Mushroom health benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Health Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our mushroom biscuits offer a range of health benefits thanks to the natural properties of mushrooms and
              our careful preparation methods.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Immune Support",
                description:
                  "Mushrooms contain beta-glucans that help support and regulate the immune system, keeping you healthy year-round.",
              },
              {
                icon: <Heart className="h-12 w-12 text-primary" />,
                title: "Heart Health",
                description:
                  "The antioxidants and fiber in mushrooms contribute to cardiovascular health by helping maintain healthy cholesterol levels.",
              },
              {
                icon: <Brain className="h-12 w-12 text-primary" />,
                title: "Cognitive Function",
                description:
                  "Certain mushroom varieties contain compounds that may support brain health and cognitive function.",
              },
              {
                icon: <Zap className="h-12 w-12 text-primary" />,
                title: "Energy & Vitality",
                description:
                  "Rich in B vitamins, mushrooms help convert food into energy, supporting overall vitality and reducing fatigue.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                custom={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-muted/30 p-6 rounded-xl text-center"
              >
                <div className="mx-auto mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Information */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Nutritional Powerhouse</h2>
              <p className="text-muted-foreground mb-6">
                Mushrooms are packed with essential nutrients that contribute to overall health and wellbeing. Our
                biscuits preserve these nutrients through our careful preparation process.
              </p>

              <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Rich in Vitamins</h3>
                  <p className="text-muted-foreground">
                    Mushrooms contain B vitamins including riboflavin, niacin, and pantothenic acid, which help the body
                    utilize energy from food.
                  </p>
                </div>

                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Mineral Content</h3>
                  <p className="text-muted-foreground">
                    Our mushroom biscuits provide essential minerals like selenium, copper, and potassium that support
                    various bodily functions.
                  </p>
                </div>

                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Antioxidant Properties</h3>
                  <p className="text-muted-foreground">
                    Mushrooms contain powerful antioxidants that help combat oxidative stress and support cellular
                    health.
                  </p>
                </div>

                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Low in Calories</h3>
                  <p className="text-muted-foreground">
                    Despite their rich flavor, our mushroom biscuits are relatively low in calories, making them a smart
                    snacking choice.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Nutritional benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mushroom Varieties */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mushroom Varieties & Their Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use different varieties of mushrooms in our biscuits, each with its own unique health benefits.
            </p>
          </motion.div>

          <Tabs defaultValue="shiitake" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="shiitake">Shiitake</TabsTrigger>
              <TabsTrigger value="button">Button</TabsTrigger>
              <TabsTrigger value="oyster">Oyster</TabsTrigger>
            </TabsList>

            <TabsContent value="shiitake" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Shiitake Mushrooms</h3>
                      <p className="text-muted-foreground mb-4">
                        Shiitake mushrooms have been used in traditional medicine for centuries and are known for their
                        impressive health benefits.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Supports immune function with lentinan, a type of beta-glucan</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Contains compounds that may help maintain heart health</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Rich in B vitamins and minerals like copper and selenium</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Contains all eight essential amino acids</span>
                        </li>
                      </ul>
                    </div>
                    <div className="aspect-square relative rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Shiitake mushrooms"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="button" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Button Mushrooms</h3>
                      <p className="text-muted-foreground mb-4">
                        Button mushrooms are the most commonly consumed mushrooms worldwide and offer numerous health
                        benefits.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Excellent source of antioxidants like selenium</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Contains potassium, which helps regulate blood pressure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Provides B vitamins that support energy metabolism</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Low in calories but high in nutritional value</span>
                        </li>
                      </ul>
                    </div>
                    <div className="aspect-square relative rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Button mushrooms"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="oyster" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Oyster Mushrooms</h3>
                      <p className="text-muted-foreground mb-4">
                        Oyster mushrooms have a delicate flavor and impressive nutritional profile.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Contains statins that may help manage cholesterol levels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Rich in antioxidants that support overall health</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Good source of iron, which is essential for blood health</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <span>Contains beta-glucans that support immune function</span>
                        </li>
                      </ul>
                    </div>
                    <div className="aspect-square relative rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Oyster mushrooms"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Expert Opinions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Opinions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what nutrition experts have to say about the benefits of mushrooms in your diet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                title: "Nutritionist",
                quote:
                  "Mushrooms are one of nature's most underappreciated superfoods. They provide a unique combination of nutrients that support overall health, particularly immune function.",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Dr. Rajesh Kumar",
                title: "Food Scientist",
                quote:
                  "The bioactive compounds in mushrooms have been shown to have numerous health benefits. Incorporating them into your diet through products like Bryte Bondz biscuits is an excellent way to enjoy these benefits.",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((expert, index) => (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="bg-background p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                    <Image src={expert.image || "/placeholder.svg"} alt={expert.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{expert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{expert.title}</p>
                    <p className="italic">"{expert.quote}"</p>
                  </div>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Benefits Today</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Try our nutritious and delicious mushroom biscuits and start enjoying their health benefits while
              satisfying your taste buds.
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
