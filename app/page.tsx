"use client"

import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"
import portfolioData from "../data/portfolio.json"

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
}

export default function Portfolio() {
  const {
    personalInfo,
    navigation,
    education,
    languages,
    interests,
    skills,
    projects,
    workExperience,
    organizations,
    images,
    socialLinks,
    sectionTitles,
    contactMessage,
  } = portfolioData

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">{personalInfo.name}</h1>
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium scroll-smooth"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(item.href)
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full"></div>
              <div className="absolute inset-1 bg-white rounded-full overflow-hidden">
                <Image
                  src={personalInfo.profileImage || "/placeholder.svg"}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{personalInfo.name}</h1>
            <p className="text-2xl font-semibold text-blue-600 mb-6">{personalInfo.title}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">{personalInfo.summary}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 bg-transparent"
              asChild
            >
              <a href={`mailto:${personalInfo.contact.email}`}>
                <Mail className="w-4 h-4" />
                {personalInfo.contact.email}
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 bg-transparent"
              asChild
            >
              <a href={`tel:${personalInfo.contact.phone}`}>
                <Phone className="w-4 h-4" />
                {personalInfo.contact.phone}
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 bg-transparent"
            >
              <MapPin className="w-4 h-4" />
              {personalInfo.contact.location}
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.slice(0, 2).map((social) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap]
              return (
                <Button
                  key={social.name}
                  className={`bg-gradient-to-r ${social.gradient} text-white hover:opacity-90 transition-opacity duration-300`}
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4" />
                    {social.name}
                  </a>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{sectionTitles.about}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className={`p-4 bg-gradient-to-r ${edu.gradient} rounded-lg border border-gray-200`}>
                    <h3 className="font-bold text-gray-800 text-lg">{edu.degree}</h3>
                    <p className="text-gray-700 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-600">
                      {edu.period} • {edu.grade}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Award className="w-6 h-6 text-blue-600" />
                  Languages & Interests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">Languages</h3>
                  <div className="space-y-2">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-3 h-3 bg-gradient-to-r ${lang.color} rounded-full`}></div>
                        <p className="text-gray-700 font-medium">
                          {lang.name} - {lang.proficiency}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <Badge
                        key={interest.name}
                        className={`bg-gradient-to-r ${interest.gradient} text-white border-0 hover:opacity-90 transition-opacity duration-200`}
                      >
                        {interest.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{sectionTitles.skills}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-6xl mx-auto mb-8">
            <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden shadow-lg">
{/*               <Image
                src={images.mernStack || "/placeholder.svg"}
                alt="MERN Stack Technologies"
                fill
                className="object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-blue-900/70 flex items-center justify-center">
                <div className="text-center text-white">
                  <Code className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">MERN Stack Expertise</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 bg-gray-50">
              {skills.map((skill, index) => (
                <Badge
                  key={skill.name}
                  className={`${skill.color} text-white border-0 px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity duration-300 shadow-sm`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{sectionTitles.projects}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-200 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                        {project.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {project.period}
                      </CardDescription>
                    </div>
                    {project.link && (
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.gradient} text-white hover:opacity-90 transition-opacity duration-300`}
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${project.gradient} mb-4`}
                  >
                    {project.role}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{sectionTitles.experience}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            {workExperience.map((job, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
              >
                <div className={`h-2 bg-gradient-to-r ${job.gradient}`}></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900 text-xl">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                    {job.position}
                  </CardTitle>
                  <CardDescription className="text-gray-700 font-medium">
                    {job.company} • {job.location} • {job.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={images.codingSetup || "/placeholder.svg"}
                      alt="Modern coding workspace"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-blue-900/60"></div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">{sectionTitles.organizations}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {organizations.map((org, index) => (
                  <Card
                    key={index}
                    className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`h-1 bg-gradient-to-r ${org.gradient}`}></div>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-3 h-3 bg-gradient-to-r ${org.gradient} rounded-full`}></div>
                        <h4 className="font-bold text-gray-800">{org.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">
                        {org.role && `${org.role} • `}
                        {org.period}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">{sectionTitles.contact}</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">{contactMessage}</p>

          <div className="relative w-full h-48 mb-8 rounded-xl overflow-hidden mx-auto max-w-2xl">
            <Image
              src={images.webDevelopment || "/placeholder.svg"}
              alt="Web development illustration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-900/80"></div>
          </div>

          <div className="mb-12">
            <ContactForm />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap]
              return (
                <Button
                  key={social.name}
                  className={`bg-gradient-to-r ${social.gradient} text-white hover:opacity-90 transition-opacity duration-300 font-medium`}
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4" />
                    {social.name === "Email" ? "Email Me" : social.name}
                  </a>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-gray-300 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-red-500" />
          <p className="font-medium">Made with love by {personalInfo.name}</p>
          <Heart className="w-4 h-4 text-red-500" />
        </div>
        <p className="text-sm">&copy; 2025 All rights reserved.</p>
      </footer>
    </div>
  )
}
