import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Compass, FileText, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import OfferingCard from "@/components/ui/OfferingCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-lg border-b border-border">
        <div className="container-academic">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
              Architecture · Heritage · Pedagogy
            </p>
            <h1 className="mb-6">
              Architecture-led travel & academic exploration
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Bridging pedagogy and place through structured observation, 
              documentation, and curriculum-aligned study tours for architecture students and educators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/study-tours">
                  Explore Study Tours
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/collaborations">
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="The Problem"
                title="Why conventional study tours fall short"
              />
            </div>
            <div className="space-y-6 prose-academic">
              <p>
                Most architecture study tours prioritize logistics over learning. Students visit iconic buildings 
                as tourists—clicking photographs without understanding spatial sequences, construction logic, 
                or contextual narratives.
              </p>
              <p>
                There is rarely any structured observation framework, no pre-tour academic preparation, 
                and minimal post-tour documentation that could transform travel into a pedagogical experience.
              </p>
              <p>
                Faculty often lack the bandwidth to design curriculum-aligned itineraries, and external 
                operators treat architecture students like any other tourist group.
              </p>
              <p className="font-medium text-foreground">
                The result? Expensive trips that yield Instagram posts instead of academic understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container-academic">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Our Approach"
                title="Architecture through the lens of learning"
              />
            </div>
            <div className="space-y-6 prose-academic">
              <p>
                Backpacks & Blueprints reimagines architectural travel as an extension of the studio. 
                Every tour is designed with academic outcomes in mind—aligned with year-wise curriculum, 
                integrated with faculty inputs, and structured around clear observation frameworks.
              </p>
              <p>
                We don't just take students to buildings; we teach them how to read the built environment. 
                Through pre-tour briefings, on-site architectural analyses, and structured documentation 
                exercises, we transform passive sightseeing into active learning.
              </p>
              <p>
                The result is tangible: annotated drawings, analytical photographs, and written reflections 
                that become part of each student's academic portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <SectionHeader
            label="What We Offer"
            title="Academic programmes and services"
            description="From multi-day study tours to single-session heritage walks, our offerings are designed for different learning contexts and institutional needs."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <OfferingCard
              icon={GraduationCap}
              title="Study Tours"
              description="Curriculum-aligned multi-day tours designed for architecture students, with structured observation, faculty integration, and documentation deliverables."
              href="/study-tours"
              features={[
                "Year-wise relevance (1st–4th year)",
                "Pre & post-tour academic modules",
                "Documentation as learning outcome"
              ]}
            />
            <OfferingCard
              icon={Compass}
              title="Heritage & City Walks"
              description="Architectural reading of cities, monuments, and precincts. Not tourist walks—structured explorations for students, researchers, and curious minds."
              href="/heritage-walks"
              features={[
                "Urban morphology analysis",
                "Building typology studies",
                "Conservation context"
              ]}
            />
            <OfferingCard
              icon={FileText}
              title="Documentation & Research"
              description="Visual and analytical documentation of architectural heritage. Measured drawings, photographic essays, and research repositories."
              href="/documentation"
              features={[
                "Measured drawings",
                "Photographic documentation",
                "Knowledge repositories"
              ]}
            />
          </div>
        </div>
      </section>

      {/* For Institutions */}
      <section className="section">
        <div className="container-academic">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeader
                label="For Institutions"
                title="Partner with us for meaningful academic outcomes"
              />
              <div className="space-y-4 prose-academic mt-6">
                <p>
                  We work with architecture colleges, departments, and faculty members to design 
                  study tours and walks that align with your academic calendar and curriculum.
                </p>
                <p>
                  Whether you're planning your annual educational tour, looking for guest lecture 
                  content on Indian architectural heritage, or seeking documentation partners for 
                  research projects—we're here to collaborate.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <Button asChild>
                  <Link to="/collaborations">
                    <Users className="mr-2 h-4 w-4" />
                    View Collaboration Models
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-card border border-border p-8 lg:p-10">
              <h4 className="font-display text-lg mb-6">We support:</h4>
              <ul className="space-y-4">
                {[
                  "Architecture colleges planning study tours",
                  "Faculty designing curriculum-aligned travel",
                  "Research groups documenting heritage",
                  "Institutions seeking guest lectures",
                  "Students pursuing thesis in documentation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-foreground text-background">
        <div className="container-academic text-center">
          <h2 className="text-background mb-4">
            Ready to transform how your students learn from the built environment?
          </h2>
          <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
            Let's design an academic programme that bridges your curriculum and the cities you wish to explore.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
