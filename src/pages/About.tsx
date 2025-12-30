import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-lg border-b border-border">
        <div className="container-academic">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
              About
            </p>
            <h1 className="mb-6">
              Why Backpacks & Blueprints exists
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              An initiative born from the belief that architecture education extends far beyond 
              the studio—into the streets, monuments, and living cities that shape how we understand space.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container-narrow">
          <div className="space-y-12">
            <div className="space-y-6 prose-academic">
              <h2>The observation gap in architectural education</h2>
              <p>
                Architecture students spend years learning to design, but often graduate without 
                having truly observed. They can draft a floor plan but struggle to read a street. 
                They reference Le Corbusier but haven't traced the spatial logic of a Chandigarh sector. 
                They study Mughal architecture in history class but experience the Taj Mahal as tourists.
              </p>
              <p>
                This observation gap isn't the students' fault. It's a structural failure of how 
                we treat travel in architectural education—as an extracurricular activity rather 
                than a pedagogical tool.
              </p>
            </div>

            <div className="divider-left" />

            <div className="space-y-6 prose-academic">
              <h2>Learning through place</h2>
              <p>
                Backpacks & Blueprints was founded on a simple premise: that travel, when structured 
                with academic intent, becomes one of the most powerful tools for architectural learning.
              </p>
              <p>
                When you stand inside a stepwell, the section drawing you struggled with in studio 
                suddenly makes sense. When you walk through an old city's organic lanes, you understand 
                urban morphology not as theory but as lived experience. When you document a crumbling 
                haveli, conservation becomes personal.
              </p>
              <p>
                We design experiences that make these connections explicit—bridging what students 
                learn in classrooms with what exists in the world.
              </p>
            </div>

            <div className="divider-left" />

            <div className="space-y-6 prose-academic">
              <h2>An observation-first approach</h2>
              <p>
                Our methodology is rooted in structured observation. Before visiting a site, students 
                receive briefing materials that establish context—historical, typological, and analytical. 
                On-site, they're guided through specific observation exercises: tracing circulation patterns, 
                analyzing light conditions, sketching spatial sequences.
              </p>
              <p>
                This isn't about restricting exploration—it's about sharpening the eyes. Once students 
                learn to see, they carry that skill forever.
              </p>
              <p>
                Every tour produces tangible outputs: annotated sketches, analytical photographs, 
                written reflections. These aren't souvenirs; they're academic work that demonstrates 
                understanding.
              </p>
            </div>

            <div className="divider-left" />

            <div className="space-y-6 prose-academic">
              <h2>Beyond sightseeing: Architecture in context</h2>
              <p>
                We don't take students to "see famous buildings." We take them to understand the 
                built environment as a complex, layered system.
              </p>
              <p>
                A city walk isn't about monuments—it's about the urban fabric between them. 
                A heritage site visit isn't about photography—it's about construction systems, 
                material choices, and environmental responses. A temple town exploration isn't 
                about religious tourism—it's about settlement patterns and architectural evolution.
              </p>
              <p>
                This approach is particularly relevant in the Indian context, where architectural 
                history isn't confined to museums—it's still alive in streets, markets, and everyday spaces.
              </p>
            </div>

            <div className="divider-left" />

            <div className="space-y-6 prose-academic">
              <h2>Grounded in the Indian context</h2>
              <p>
                While global architectural education often centers Western examples, India offers 
                an extraordinary laboratory for learning. From the spatial complexity of Fatehpur Sikri 
                to the climate-responsive architecture of Jaisalmer, from the living heritage of Varanasi 
                to the modernist experiments of Chandigarh—our country's built environment is 
                unparalleled in its diversity and depth.
              </p>
              <p>
                Backpacks & Blueprints focuses on making this richness accessible to students 
                in a structured, academically meaningful way. We believe Indian architecture 
                students should know Indian architecture—not as a chapter in a history book, 
                but as a living tradition they've personally explored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <SectionHeader
            label="Our Values"
            title="What guides our work"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: "Academic Rigour",
                description: "Every programme is designed with clear learning outcomes. Travel is a means, not an end."
              },
              {
                title: "Observation Over Information",
                description: "We prioritize developing the skill of seeing over accumulating facts about buildings."
              },
              {
                title: "Context Matters",
                description: "Architecture doesn't exist in isolation. We explore buildings within their urban, cultural, and climatic contexts."
              },
              {
                title: "Documentation as Learning",
                description: "The act of recording—drawing, photographing, writing—deepens understanding and creates lasting knowledge."
              },
            ].map((value, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-display text-lg">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
