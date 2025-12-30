import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

const HeritageWalks = () => {
  const walkTypes = [
    {
      title: "Urban Morphology Walks",
      description: "Understanding how cities evolved over time through their street patterns, building typologies, and public spaces.",
      suitable: "Architecture students, urban design researchers",
      duration: "3-4 hours",
      example: "Old Delhi's organic lanes vs. Lutyens' Delhi grid"
    },
    {
      title: "Building Typology Studies",
      description: "Deep dives into specific building types—havelis, stepwells, temples, colonial bungalows—understanding their spatial logic and evolution.",
      suitable: "Students studying specific typologies, thesis researchers",
      duration: "2-3 hours",
      example: "Ahmedabad's pol houses and their climate response"
    },
    {
      title: "Conservation Context Walks",
      description: "Understanding heritage sites through the lens of conservation—authenticity, intervention approaches, adaptive reuse challenges.",
      suitable: "Conservation students, professionals, heritage enthusiasts",
      duration: "3-4 hours",
      example: "Mehrangarh Fort conservation efforts in Jodhpur"
    },
    {
      title: "Material & Construction Walks",
      description: "Focus on construction techniques, material choices, and craftsmanship traditions visible in historic buildings.",
      suitable: "Building technology students, construction enthusiasts",
      duration: "2-3 hours",
      example: "Stone construction traditions in Hampi"
    },
  ];

  const differences = [
    {
      tourist: "Focus on history and stories",
      architectural: "Focus on spatial analysis and design principles"
    },
    {
      tourist: "Visit iconic monuments only",
      architectural: "Explore the urban fabric between monuments"
    },
    {
      tourist: "Passive listening and photography",
      architectural: "Active observation with sketching and note-taking"
    },
    {
      tourist: "Entertainment-oriented narrative",
      architectural: "Academic framework with learning outcomes"
    },
    {
      tourist: "General audience assumed",
      architectural: "Content tailored to architectural literacy level"
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-lg border-b border-border">
        <div className="container-academic">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
              Walking with Purpose
            </p>
            <h1 className="mb-6">
              Heritage & City Walks
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Architectural reading of cities, monuments, and precincts. Not tourist walks—structured 
              explorations designed for students, researchers, and those who want to truly understand 
              the built environment.
            </p>
          </div>
        </div>
      </section>

      {/* Tourist vs Architectural Walks */}
      <section className="section">
        <div className="container-academic">
          <SectionHeader
            label="The Difference"
            title="Tourist walks vs. architectural walks"
            description="Most heritage walks treat participants as passive consumers of historical trivia. Our walks are designed for active learning about architecture and urbanism."
          />
          
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-8 font-display font-medium">Typical Tourist Walk</th>
                  <th className="text-left py-4 font-display font-medium">Backpacks & Blueprints Walk</th>
                </tr>
              </thead>
              <tbody>
                {differences.map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 pr-8 text-muted-foreground">{row.tourist}</td>
                    <td className="py-4 text-foreground">{row.architectural}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Types of Walks */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <SectionHeader
            label="Walk Types"
            title="Structured explorations for different learning needs"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {walkTypes.map((walk) => (
              <div key={walk.title} className="card-academic">
                <h3 className="font-display text-xl mb-3">{walk.title}</h3>
                <p className="text-muted-foreground mb-4">{walk.description}</p>
                <div className="space-y-2 pt-4 border-t border-border">
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Suitable for:</span>{" "}
                    <span className="text-muted-foreground">{walk.suitable}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Duration:</span>{" "}
                    <span className="text-muted-foreground">{walk.duration}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Example:</span>{" "}
                    <span className="text-muted-foreground">{walk.example}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="section">
        <div className="container-academic">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Audience"
                title="Who should join our walks"
              />
              <div className="space-y-4 prose-academic mt-6">
                <p>
                  Our walks are designed for anyone with genuine interest in understanding architecture 
                  and urbanism—not just architecture students and professionals.
                </p>
                <p>
                  We welcome curious minds who want to move beyond surface-level heritage appreciation 
                  to understanding the deeper logic of how cities and buildings work.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Architecture Students",
                  description: "Supplement studio learning with real-world observation. Develop skills in reading the built environment that textbooks can't teach."
                },
                {
                  title: "Researchers & Academics",
                  description: "Field exposure for thesis research, design history studies, or urban documentation projects."
                },
                {
                  title: "Design Professionals",
                  description: "Continuing education and precedent study. Understanding design principles through built examples."
                },
                {
                  title: "Curious Learners",
                  description: "Anyone interested in architecture and cities who wants to move beyond tourist-level engagement with heritage."
                },
              ].map((audience, index) => (
                <div key={index} className="flex gap-4">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-display text-base mb-1">{audience.title}</h4>
                    <p className="text-sm text-muted-foreground">{audience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Walk Format */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <SectionHeader
            label="Format"
            title="What to expect on a walk"
            centered
          />
          
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Pre-Walk Briefing",
                description: "Context setting, historical background, and observation framework introduction."
              },
              {
                step: "02",
                title: "Guided Exploration",
                description: "Walking through the precinct with architectural commentary and analysis."
              },
              {
                step: "03",
                title: "Observation Pauses",
                description: "Dedicated time for sketching, note-taking, and focused documentation."
              },
              {
                step: "04",
                title: "Discussion & Debrief",
                description: "Synthesis of observations, Q&A, and further reading recommendations."
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-3xl font-display font-light text-primary/40 block mb-3">{item.step}</span>
                <h4 className="font-display text-base mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-academic text-center">
          <h2 className="mb-4">Interested in scheduling a walk?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We conduct walks for student groups, faculty teams, and individual learners. 
            Custom walks can be designed for specific cities or themes.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HeritageWalks;
