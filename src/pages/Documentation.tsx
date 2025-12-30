import { Link } from "react-router-dom";
import { ArrowRight, Camera, Ruler, FileText, Database } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

const Documentation = () => {
  const documentationTypes = [
    {
      icon: Camera,
      title: "Photographic Documentation",
      description: "Structured photographic surveys that go beyond aesthetic shots to capture architectural information—construction details, spatial sequences, material conditions.",
      outputs: ["Annotated photo essays", "Condition surveys", "Before-after records", "Thematic photo series"]
    },
    {
      icon: Ruler,
      title: "Measured Drawings",
      description: "Accurate documentation of buildings through measured surveys—plans, sections, elevations, and details that preserve architectural knowledge for future reference.",
      outputs: ["Scaled floor plans", "Building sections", "Facade elevations", "Construction details"]
    },
    {
      icon: FileText,
      title: "Analytical Documentation",
      description: "Written and diagrammatic analysis of architectural elements—spatial organization, climate response, structural systems, and design principles.",
      outputs: ["Spatial analysis diagrams", "Climate response studies", "Typological comparisons", "Design principle extractions"]
    },
    {
      icon: Database,
      title: "Knowledge Repositories",
      description: "Compilation and organization of documentation into accessible formats—digital archives, publication-ready materials, teaching resources.",
      outputs: ["Digital archives", "Teaching modules", "Publication materials", "Reference databases"]
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-lg border-b border-border">
        <div className="container-academic">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
              Recording & Preserving
            </p>
            <h1 className="mb-6">
              Documentation & Research
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The act of documenting architecture is itself a form of learning. We produce visual, 
              measured, and analytical documentation that preserves knowledge and serves as 
              academic resource for future students and researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Importance of Documentation */}
      <section className="section">
        <div className="container-narrow">
          <div className="space-y-12">
            <div className="space-y-6 prose-academic">
              <h2>Why documentation matters</h2>
              <p>
                India's architectural heritage is vast, diverse, and under constant threat—from 
                development pressures, climate change, and simple neglect. Every day, buildings 
                that hold centuries of accumulated wisdom are altered or demolished without any 
                record of what they taught us.
              </p>
              <p>
                Documentation is not merely a preservation activity; it's an act of knowledge 
                creation. When we measure a historic building, we understand its proportional 
                systems. When we photograph construction details, we learn about material 
                traditions. When we analyze spatial sequences, we uncover design intelligence.
              </p>
              <p>
                At Backpacks & Blueprints, documentation is integral to our educational mission. 
                Students who document learn more deeply than students who merely visit. The 
                documentation they produce becomes part of a larger knowledge base that benefits 
                the entire architectural community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Documentation */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <SectionHeader
            label="Approaches"
            title="Types of documentation we produce"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {documentationTypes.map((type) => (
              <div key={type.title} className="card-academic">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Outputs</p>
                  <div className="flex flex-wrap gap-2">
                    {type.outputs.map((output, i) => (
                      <span key={i} className="text-xs bg-background px-2 py-1 rounded">
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation as Learning */}
      <section className="section">
        <div className="container-academic">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Pedagogy"
                title="Documentation as a learning tool"
              />
              <div className="space-y-4 prose-academic mt-6">
                <p>
                  We don't document for documentation's sake. Every documentation exercise 
                  is designed as a learning experience. Students aren't given cameras and 
                  measuring tapes—they're taught to see, analyze, and record with intention.
                </p>
                <p>
                  The process of documentation forces a depth of engagement that passive 
                  observation cannot achieve. You can't draw a section without understanding 
                  how levels relate. You can't photograph a detail without noticing its 
                  construction logic.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border p-8">
              <h4 className="font-display text-lg mb-6">Skills developed through documentation:</h4>
              <ul className="space-y-4">
                {[
                  "Architectural observation and analysis",
                  "Freehand sketching and measured drawing",
                  "Architectural photography techniques",
                  "Written analysis and description",
                  "Systematic recording and organization",
                  "Critical thinking about design decisions",
                ].map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Repository Vision */}
      <section className="section bg-secondary">
        <div className="container-narrow">
          <SectionHeader
            label="Long-term Vision"
            title="Building a knowledge repository"
            centered
          />
          
          <div className="space-y-6 prose-academic mt-8 text-center">
            <p>
              Every study tour, every heritage walk, every documentation exercise produces 
              material that adds to our collective understanding of Indian architecture. 
              Over time, this accumulates into a significant body of knowledge.
            </p>
            <p>
              Our long-term vision is to develop accessible repositories of this documentation—
              resources that architecture students across India can reference, that researchers 
              can build upon, and that preserve knowledge of buildings that may not survive 
              the coming decades.
            </p>
            <p>
              This isn't just archival work; it's educational infrastructure for the future 
              of architectural learning in India.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="section">
        <div className="container-academic text-center">
          <h2 className="mb-4">Interested in documentation partnerships?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We collaborate with institutions and researchers on documentation projects—from 
            student thesis support to large-scale heritage recording initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Discuss a Project
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

export default Documentation;
