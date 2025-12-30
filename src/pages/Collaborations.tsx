import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, BookOpen, Handshake } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

const Collaborations = () => {
  const collaborationTypes = [
    {
      icon: Building2,
      title: "Architecture Colleges",
      description: "Partner with us for your annual study tours and educational travel programmes. We work with your faculty to design curriculum-aligned experiences.",
      benefits: [
        "Custom itineraries aligned with your syllabus",
        "Faculty briefing and coordination",
        "Academic documentation outputs for students",
        "Post-tour integration support"
      ]
    },
    {
      icon: Users,
      title: "Faculty & Departments",
      description: "Individual faculty members or departments seeking support for specialized study programmes, elective courses, or research initiatives.",
      benefits: [
        "Elective course content development",
        "Guest lectures on architectural heritage",
        "Research trip coordination",
        "Documentation methodology training"
      ]
    },
    {
      icon: BookOpen,
      title: "Research Collaborations",
      description: "Joint research projects in architectural documentation, heritage studies, and pedagogical development.",
      benefits: [
        "Field research support",
        "Documentation partnerships",
        "Publication collaborations",
        "Knowledge sharing frameworks"
      ]
    },
    {
      icon: Handshake,
      title: "Institutional Partnerships",
      description: "Long-term partnerships with institutions committed to enriching architectural education through structured travel experiences.",
      benefits: [
        "Annual programme planning",
        "Preferential scheduling and pricing",
        "Customized documentation repositories",
        "Ongoing curriculum integration"
      ]
    },
  ];

  const workingWith = [
    "Architecture colleges planning annual educational tours",
    "Faculty members designing thesis support programmes",
    "Research groups documenting heritage sites",
    "Institutions developing specialized electives",
    "Conservation departments seeking field training partners",
    "Student groups organizing self-funded architectural travel",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-lg border-b border-border">
        <div className="container-academic">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
              Working Together
            </p>
            <h1 className="mb-6">
              Collaborations
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We partner with architecture colleges, faculty, and research groups to design 
              meaningful academic programmes. Long-term collaboration, not transactional engagement, 
              is at the heart of how we work.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Philosophy */}
      <section className="section">
        <div className="container-narrow">
          <div className="space-y-6 prose-academic">
            <h2>Our approach to collaboration</h2>
            <p>
              Backpacks & Blueprints is not a tour operator that architecture colleges hire for 
              logistics. We're an educational partner that works with institutions to design, 
              execute, and assess academic programmes that happen outside the classroom.
            </p>
            <p>
              This means we don't offer off-the-shelf packages. Every collaboration begins with 
              understanding your institutional context—your curriculum structure, your students' 
              level, your academic objectives, and your faculty's involvement preferences.
            </p>
            <p>
              We then design a programme that makes sense for your specific needs, with clear 
              learning outcomes and documentation deliverables that integrate with your academic system.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Collaboration */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <SectionHeader
            label="Models"
            title="Ways to work together"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {collaborationTypes.map((type) => (
              <div key={type.title} className="card-academic">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">What we offer</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section">
        <div className="container-academic">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Partners"
                title="Who we work with"
              />
              <div className="space-y-4 prose-academic mt-6">
                <p>
                  We work with institutions and individuals who share our commitment to 
                  meaningful architectural education—those who see travel as a pedagogical 
                  tool rather than a vacation break in the academic calendar.
                </p>
                <p>
                  Our best collaborations are with partners who engage actively in programme 
                  design, integrate tour outputs with their academic systems, and view our 
                  relationship as a long-term partnership.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border p-8">
              <h4 className="font-display text-lg mb-6">We're currently working with:</h4>
              <ul className="space-y-4">
                {workingWith.map((item, index) => (
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

      {/* Process */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <SectionHeader
            label="Process"
            title="How collaborations typically unfold"
            centered
          />
          
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Initial Discussion",
                description: "Understanding your institutional context, academic objectives, and specific requirements."
              },
              {
                step: "02",
                title: "Programme Design",
                description: "Developing a custom itinerary and academic framework aligned with your needs."
              },
              {
                step: "03",
                title: "Faculty Coordination",
                description: "Briefing accompanying faculty and integrating their inputs into the programme."
              },
              {
                step: "04",
                title: "Execution & Follow-up",
                description: "Running the programme and supporting post-tour documentation integration."
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
          <h2 className="mb-4">Ready to explore a partnership?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We're always interested in discussing how we can support architectural education 
            at your institution. Let's start a conversation about what's possible.
          </p>
          <Button asChild size="lg">
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

export default Collaborations;
