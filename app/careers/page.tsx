"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Search } from "lucide-react"

const departments = [
  { id: "all", name: "All Departments" },
  { id: "production", name: "Production" },
  { id: "marketing", name: "Marketing" },
  { id: "rd", name: "R&D" },
  { id: "admin", name: "Admin" },
]

const jobOpenings = [
  {
    id: 1,
    title: "Production Supervisor",
    department: "production",
    location: "Sivagangai, TN",
    type: "Full-time",
    experience: "3-5 years",
    slug: "production-supervisor",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    department: "marketing",
    location: "Chennai, TN",
    type: "Full-time",
    experience: "2-4 years",
    slug: "digital-marketing-specialist",
  },
  {
    id: 3,
    title: "Food Scientist",
    department: "rd",
    location: "Sivagangai, TN",
    type: "Full-time",
    experience: "3-5 years",
    slug: "food-scientist",
  },
  {
    id: 4,
    title: "Administrative Assistant",
    department: "admin",
    location: "Sivagangai, TN",
    type: "Full-time",
    experience: "1-3 years",
    slug: "administrative-assistant",
  },
  {
    id: 5,
    title: "Quality Control Technician",
    department: "production",
    location: "Sivagangai, TN",
    type: "Full-time",
    experience: "2-4 years",
    slug: "quality-control-technician",
  },
  {
    id: 6,
    title: "Product Development Chef",
    department: "rd",
    location: "Sivagangai, TN",
    type: "Full-time",
    experience: "3-5 years",
    slug: "product-development-chef",
  },
  {
    id: 7,
    title: "Social Media Manager",
    department: "marketing",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    slug: "social-media-manager",
  },
  {
    id: 8,
    title: "HR Coordinator",
    department: "admin",
    location: "Sivagangai, TN",
    type: "Full-time",
    experience: "2-4 years",
    slug: "hr-coordinator",
  },
]

export default function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesDepartment = activeDepartment === "all" || job.department === activeDepartment
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDepartment && matchesSearch
  })

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Be part of our mission to create delicious, nutritious mushroom biscuits that promote health and
                wellbeing.
              </p>
              <p className="text-muted-foreground mb-8">
                At Bryte Bondz, we're passionate about innovation, quality, and sustainability. We're looking for
                talented individuals who share our values and want to make a difference.
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
                  alt="Bryte Bondz team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current job opportunities and find the perfect role for your skills and passion.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveDepartment}>
              <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto">
                {departments.map((department) => (
                  <TabsTrigger key={department.id} value={department.id} className="text-sm">
                    {department.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Link href={`/careers/${job.slug}`}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="bg-primary/10 text-primary text-xs font-medium py-1 px-2 rounded inline-block mb-4">
                          {job.department === "production"
                            ? "Production"
                            : job.department === "marketing"
                              ? "Marketing"
                              : job.department === "rd"
                                ? "R&D"
                                : "Admin"}
                        </div>
                        <h3 className="font-semibold text-xl mb-3">{job.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-muted text-xs py-1 px-2 rounded">{job.type}</span>
                          <span className="bg-muted text-xs py-1 px-2 rounded">{job.experience}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1 mt-2">
                          View Details <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No positions found. Try a different search term or department.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Bryte Bondz?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job. Here's why you should consider building your career with us.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Environment",
                description:
                  "Be part of a team that's constantly innovating and pushing the boundaries of what's possible in the health food industry.",
              },
              {
                title: "Growth Opportunities",
                description:
                  "We believe in nurturing talent and providing clear paths for career advancement and professional development.",
              },
              {
                title: "Meaningful Work",
                description:
                  "Make a real difference by helping create products that contribute to people's health and wellbeing.",
              },
              {
                title: "Collaborative Culture",
                description: "Work in a supportive environment where teamwork is valued and every voice is heard.",
              },
              {
                title: "Work-Life Balance",
                description:
                  "We understand the importance of balance and offer flexible working arrangements where possible.",
              },
              {
                title: "Competitive Benefits",
                description:
                  "Enjoy competitive salaries, health insurance, retirement plans, and other benefits designed to support your wellbeing.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-background p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Team Says</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our employees about their experience working at Bryte Bondz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Anita Desai",
                role: "Product Development Chef",
                quote:
                  "Working at Bryte Bondz has been an incredible journey. I've had the opportunity to experiment with innovative recipes and see my ideas come to life as successful products.",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Vikram Singh",
                role: "Production Manager",
                quote:
                  "What I appreciate most about Bryte Bondz is the emphasis on quality and sustainability. It's rewarding to work for a company that truly cares about its impact on people and the planet.",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="bg-muted/30 p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{testimonial.role}</p>
                    <p className="italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Application Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what to expect when you apply for a position at Bryte Bondz.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process line */}
              <div className="absolute left-16 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    title: "Application",
                    description:
                      "Submit your application through our careers page, including your resume and cover letter.",
                  },
                  {
                    step: "2",
                    title: "Initial Screening",
                    description:
                      "Our HR team will review your application and reach out if your qualifications match our requirements.",
                  },
                  {
                    step: "3",
                    title: "Interviews",
                    description:
                      "Depending on the role, you may have 1-3 interviews, including technical assessments if applicable.",
                  },
                  {
                    step: "4",
                    title: "Final Decision",
                    description: "We'll make a decision and extend an offer to the selected candidate.",
                  },
                  {
                    step: "5",
                    title: "Onboarding",
                    description:
                      "Once you accept, our team will guide you through the onboarding process to set you up for success.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-start"
                  >
                    <div className="absolute left-16 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10">
                      {step.step}
                    </div>
                    <div className="ml-24">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Browse our current openings and take the first step toward a rewarding career at Bryte Bondz.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#current-openings">View Open Positions</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
