"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from "framer-motion"
import { Check, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
    submitted: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your server here
    console.log("Form submitted:", formState)
    setFormState({ ...formState, submitted: true })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  return (
    <></>
    // <div className="pt-16">
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5 }}
    //       className="text-center mb-12"
    //     >
    //       <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
    //       <p className="text-muted-foreground max-w-2xl mx-auto">
    //         Have questions or feedback? We'd love to hear from you. Get in touch with our team.
    //       </p>
    //     </motion.div>

    //     <div className="grid md:grid-cols-2 gap-12">
    //       {/* Contact Form */}
    //       <motion.div
    //         initial={{ opacity: 0, x: -30 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.6 }}
    //       >
    //         <Card>
    //           <CardContent className="p-6">
    //             {formState.submitted ? (
    //               <div className="text-center py-8">
    //                 <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
    //                   <Check className="h-6 w-6 text-primary" />
    //                 </div>
    //                 <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
    //                 <p className="text-muted-foreground mb-6">
    //                   Your message has been sent successfully. We'll get back to you as soon as possible.
    //                 </p>
    //                 <Button onClick={() => setFormState({ ...formState, submitted: false })}>
    //                   Send Another Message
    //                 </Button>
    //               </div>
    //             ) : (
    //               <form onSubmit={handleSubmit} className="space-y-6">
    //                 <div className="space-y-4">
    //                   <div>
    //                     <Label htmlFor="name">Your Name</Label>
    //                     <Input
    //                       id="name"
    //                       name="name"
    //                       placeholder="John Doe"
    //                       required
    //                       value={formState.name}
    //                       onChange={handleChange}
    //                     />
    //                   </div>
                      
    //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //                     <div>
    //                       <Label htmlFor="email">Email Address</Label>
    //                       <Input
    //                         id="email"
    //                         name="email"
    //                         type="email"
    //                         placeholder="john@example.com"
    //                         required
    //                         value={formState.email}
    //                         onChange={handleChange}
    //                       />
    //                     </div>
    //                     <div>
    //                       <Label htmlFor="phone">Phone Number</Label>
    //                       <Input
    //                         id="phone"
    //                         name="phone"
    //                         placeholder="+91 98765 43210"
    //                         value={formState.phone}
    //                         onChange={handleChange}
    //                       />
    //                     </div>
    //                   </div>
                      
    //                   <div>
    //                     <Label htmlFor="inquiryType">Inquiry Type</Label>
    //                     <RadioGroup
    //                       defaultValue="general"
    //                       onValueChange={(value) => setFormState({ ...formState, inquiryType: value })}
    //                       className="flex flex-col space-y-1 mt-2"
    //                     >
    //                       <div className="flex items-center space-x-2">
    //                         <RadioGroupItem value="general" id="general" />
    //                         <Label htmlFor="general" className="cursor-pointer">General Inquiry</Label>
    //                       </div>
    //                       <div className="flex items-center space-x-2">
    //                         <RadioGroupItem value="product" id="product" />
    //                         <Label htmlFor="product" className="cursor-pointer">Product Information</Label>
    //                       </div>
    //                       <div className="flex items-center space-x-2">
    //                         <RadioGroupItem value="wholesale" id="wholesale" />
    //                         <Label htmlFor="wholesale" className="cursor-pointer">Wholesale Inquiry</Label>
    //                       </div>
    //                       <div className="flex items-center space-x-2">
    //                         <RadioGroupItem value="feedback" id="feedback" />
    //                         <Label htmlFor="feedback" className="cursor-pointer">Feedback</Label>
    //                       </div>
    //                     </RadioGroup>
    //                   </div>
                      
    //                   <div>
    //                     <Label htmlFor="subject">Subject</Label>
    //                     <Input
    //                       id="subject"
    //                       name="subject"
    //                       placeholder="How can we help you?"
    //                       required
    //                       value={formState.subject}
    //                       onChange={handleChange}
    //                     />
    //                   </div>
                      
    //                   <div>
    //                     <Label htmlFor="message">Message</Label>
    //                     <Textarea
    //                       id="message"
    //                       name="message"
    //                       placeholder="Please provide details about your inquiry..."
    //                       rows={5}
    //                       required
    //                       value={formState.message}
    //                       onChange={handleChange}
    //                     />
    //                   </div>
    //                 </div>
                    
    //                 <Button type="submit" className="w-full">Send Message</Button>
    //               </form>
    //             )}
    //           </CardContent>
    //         </Card>
    //       </motion.div>

    //       {/* Contact Information */}
    //       <motion.div
    //         initial={{ opacity: 0, x: 30 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.6 }}
    //         className="space-y-8"
    //       >
    //         <div>
    //           <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
    //           <p className="text-muted-foreground mb-6">
    //             We're here to help and answer any questions you might have. We look forward to hearing from you.
    //           </p>
              
    //           <div className="space-y-4">
    //             <div className="flex items-start gap-4">
    //               <div className="bg-primary/10 p-3 rounded-full">
    //                 <MapPin className="h-5 w-5 text-primary" />
    //               </div>
    //               <div>
    //                 <h3 className="font-semibold">Our Location</h3>
    //                 <p className="text-muted-foreground">
    //                   No 10, Narayana Puram, Kilakudierupu, Palathur, Sivagangai - 630107
    //                 </p>
    //               </div>
    //             </div>
                
    //             <div className="flex items-start gap-4">
    //               <div className="bg-primary/10 p-3 rounded-full">
    //                 <Mail className="h-5 w-5 text-primary" />
    //               </div>
    //               <div>
    //                 <h3 className="font-semibold">Email Us</h3>
    //                 <p className="text-muted-foreground">
    //                   <a href="mailto:info@brytebondz.com" className="hover:text-primary">info@brytebondz.com</a>
    //                 </p>
    //                 <p className="text-muted-foreground">
    //                   <a href="mailto:support@brytebondz.com" className="hover:text-primary">support@brytebondz.com</a>
    //                 </p>
    //               </div>
    //             </div>
                
    //             <div className="flex items-start gap-4">
    //               <div className="bg-primary/10 p-3 rounded-full">
    //                 <Phone className="h-5 w-5 text-primary" />
    //               </div>
    //               <div>
    //                 <h3 className="font-semibold">Call Us</h3>
    //                 <p className="text-muted-foreground">
    //                   <a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a>
    //                 </p>
    //                 <p className="text-muted-foreground">
    //                   <a href="tel:+919876543211" className="hover:text-primary">+91 98765 43211</a>
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
            
    //         <div>
    //           <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
    //           <div className="space-y-2">
    //             <div className="flex justify-between">
    //               <span>Monday - Friday:</span>
    //               <span>9:00 AM - 6:00 PM</span>
    //             </div>
    //             <div className="flex justify-between">
    //               <span>Saturday:</span>
    //               <span>10:00 AM - 4:00 PM</span>
    //             </div>
    //             <div className="flex justify-between">
    //               <span>Sunday:</span>
    //               <span>Closed</span>
    //             </div>
    //           </div>
    //         </div>
            
    //         <div className="aspect-video relative rounded-xl overflow-hidden">
    //           <Image
    //             src="/placeholder.svg?height=400&width=600"
    //             alt="Map location"
    //             fill
    //             className="object-cover"
    //           />
    //           <div className="absolute inset-0 flex items-center justify-center">
    //             <Button variant="secondary">View on Google Maps</Button>
    //           </div>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>

    //   {/* FAQ Section */}
    //   <section className="py-20 bg-muted">
    //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.5 }}
    //         className="text-center mb-12"
    //       >
    //         <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
    //         <p className="text-muted-foreground max-w-2xl mx-auto">
    //           Find quick answers to common questions about our products and services.
    //         </p>
    //       </motion.div>

    //       <div className\
  )
}