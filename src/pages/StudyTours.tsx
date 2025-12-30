import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

const StudyTours = () => {
  const yearWiseRelevance = [
    {
      year: "First Year",
      focus: "Fundamentals of observation",
      description: "Introduction to architectural seeing. Understanding scale, proportion, and basic spatial relationships through accessible buildings and urban spaces.",
      outcomes: ["Basic sketching and documentation", "Understanding scale and proportion", "Introduction to typologies"]
    },
    {
      year: "Second Year",
      focus: "Building systems & construction",
      description: "Study of construction logic, material systems, and structural principles through visits to buildings that demonstrate clear tectonic expression.",
      outcomes: ["Construction documentation", "Material analysis", "Structural understanding"]
    },
    {
      year: "Third Year",
      focus: "Urban context & settlement patterns",
      description: "Understanding buildings within their urban fabric. Analysis of street patterns, public spaces, and the relationship between architecture and city.",
      outcomes: ["Urban mapping exercises", "Settlement analysis", "Context studies"]
    },
    {
      year: "Fourth/Fifth Year",
      focus: "Thesis preparation & specialization",
      description: "Deep dives into specific typologies or conservation contexts. Research-oriented visits aligned with thesis topics and specialization interests.",
      outcomes: ["Research documentation", "Thesis site visits", "Specialized typology studies"]
    },
  ];

  const sampleCircuits = [
    {
      name: "Rajasthan Heritage Circuit",
      duration: "7-10 days",
      cities: "Jaipur, Jodhpur, Jaisalmer, Udaipur",
      themes: "Climate-responsive architecture, fortification typologies, palace architecture, craftsmanship"
    },
    {
      name: "Gujarat Step-well & Temple Architecture",
      duration: "5-7 days",
      cities: "Ahmedabad, Modhera, Patan, Champaner",
      themes: "Water architecture, temple typologies, historic city fabric, UNESCO sites"
    },
    {
      name: "South Indian Temple Towns",
      duration: "7-10 days",
      cities: "Madurai, Thanjavur, Mahabalipuram, Hampi",
      themes: "Dravidian temple architecture, settlement patterns, stone construction, living heritage"
    },
    {
      name: "Chandigarh & Modernism",
      duration: "3-5 days",
      cities: "Chandigarh, Ahmedabad (optional extension)",
      themes: "Le Corbusier's planning, modernist public buildings, post-independence architecture"
    },
    {
      name: "Delhi-Agra Mughal Architecture",
      duration: "4-6 days",
      cities: "Delhi, Agra, Fatehpur Sikri",
      themes: "Indo-Islamic architecture, garden design, tomb typologies, construction techniques"
    },
    {
      name: "Western Ghats Vernacular",
      duration: "5-7 days",
      cities: "Konkan coast, Goa, Coorg",
      themes: "Vernacular typologies, climate response, material culture, colonial overlays"
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-lg border-b border-border">
        <div className="container-academic">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
              Core Offering
            </p>
            <h1 className="mb-6">
              Study Tours
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Curriculum-aligned multi-day tours designed for architecture students—with structured 
              observation frameworks, faculty integration, and documentation as a learning outcome.
            </p>
          </div>
        </div>
      </section>

      {/* How Tours Are Structured */}
      <section className="section">
        <div className="container-academic">
          <SectionHeader
            label="Methodology"
            title="How our tours are structured"
            description="Every study tour follows a three-phase structure designed to maximize learning outcomes and create tangible academic outputs."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                phase: "01",
                title: "Pre-Tour Preparation",
                items: [
                  "Academic briefing materials on sites to be visited",
                  "Reading lists and reference resources",
                  "Observation framework introduction",
                  "Documentation toolkit orientation",
                  "Faculty briefing and curriculum alignment"
                ]
              },
              {
                phase: "02",
                title: "On-Site Learning",
                items: [
                  "Guided architectural analysis at each site",
                  "Structured observation exercises",
                  "On-site sketching sessions",
                  "Photography with purpose",
                  "Contextual discussions and Q&A"
                ]
              },
              {
                phase: "03",
                title: "Post-Tour Documentation",
                items: [
                  "Compilation of field notes and sketches",
                  "Curated photographic portfolios",
                  "Written reflection pieces",
                  "Presentation-ready documentation",
                  "Integration with academic portfolio"
                ]
              },
            ].map((phase) => (
              <div key={phase.phase} className="card-academic">
                <span className="text-4xl font-display font-light text-primary/40">{phase.phase}</span>
                <h3 className="font-display text-xl mt-4 mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-wise Relevance */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <SectionHeader
            label="Curriculum Alignment"
            title="Year-wise relevance"
            description="Our tours are designed to align with typical B.Arch curriculum progression, with appropriate complexity and focus for each year."
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {yearWiseRelevance.map((item) => (
              <div key={item.year} className="card-academic">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl">{item.year}</h3>
                  <span className="text-sm text-primary font-medium">{item.focus}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Learning Outcomes</p>
                  <div className="flex flex-wrap gap-2">
                    {item.outcomes.map((outcome, i) => (
                      <span key={i} className="text-xs bg-background px-2 py-1 rounded">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Circuits */}
      <section className="section">
        <div className="container-academic">
          <SectionHeader
            label="Destinations"
            title="Sample tour circuits"
            description="We design custom itineraries based on institutional requirements. Below are some of our well-tested circuits across India."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {sampleCircuits.map((circuit) => (
              <div key={circuit.name} className="card-academic">
                <h3 className="font-display text-lg mb-2">{circuit.name}</h3>
                <p className="text-sm text-primary mb-3">{circuit.duration}</p>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">Cities:</span> {circuit.cities}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Themes:</span> {circuit.themes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Benefits */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Value"
                title="Academic benefits"
              />
              <div className="space-y-4 prose-academic mt-6">
                <p>
                  Unlike conventional study tours that leave students with only photographs and memories, 
                  our structured approach ensures that travel translates into demonstrable learning.
                </p>
                <p>
                  Students return with portfolios of work that can be showcased in academic reviews, 
                  integrated into design projects, and used as reference material throughout their education.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Portfolio Development",
                  description: "Curated sketches, photographs, and analytical drawings ready for academic review."
                },
                {
                  title: "Design Studio Integration",
                  description: "Documentation that can inform and enrich ongoing design projects."
                },
                {
                  title: "Thesis Preparation",
                  description: "First-hand site experience and documentation for research-oriented work."
                },
                {
                  title: "Skill Building",
                  description: "Development of observation, sketching, and documentation skills applicable across the profession."
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-background border border-border p-6 flex gap-4">
                  <span className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-primary">{index + 1}</span>
                  </span>
                  <div>
                    <h4 className="font-display text-base mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-academic text-center">
          <h2 className="mb-4">Plan your institution's next study tour</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We work with architecture colleges to design custom tour programmes aligned with 
            your academic calendar and curriculum requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/collaborations">
                View Collaboration Models
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudyTours;
