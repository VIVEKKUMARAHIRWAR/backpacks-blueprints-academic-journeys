import { useState } from "react";
import { Mail, Instagram, MapPin, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We'll respond within 2-3 working days.",
    });

    setFormData({
      name: "",
      email: "",
      institution: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-lg border-b border-border">
        <div className="container-academic">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
              Get in Touch
            </p>
            <h1 className="mb-6">
              Contact
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're planning a study tour, exploring a collaboration, or simply want 
              to learn more about our work—we'd be glad to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container-academic">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="font-display text-xl mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@backpacksandblueprints.in" 
                    className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail size={20} className="mt-0.5 flex-shrink-0" />
                    <span>hello@backpacksandblueprints.in</span>
                  </a>
                  <a 
                    href="https://instagram.com/backpacksandblueprints" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Instagram size={20} className="mt-0.5 flex-shrink-0" />
                    <span>@backpacksandblueprints</span>
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                    <span>Based in India</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl mb-4">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 2-3 working days. For urgent queries, 
                  please mention it in your subject line.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl mb-4">Before You Write</h3>
                <p className="text-sm text-muted-foreground">
                  Please include details about your institution, the nature of your inquiry 
                  (study tour, walk, collaboration, etc.), and any specific dates or requirements 
                  you have in mind.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border p-6 md:p-8">
                <SectionHeader
                  label="Inquiry Form"
                  title="Send us a message"
                />
                
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution / Organization</Label>
                      <Input
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="Your college or organization"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please share details about your inquiry, including any specific requirements, dates, or questions you have."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} size="lg">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section bg-secondary">
        <div className="container-academic">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "For Colleges & Institutions",
                description: "Planning a study tour for your students? Share your academic calendar, preferred destinations, and group size for a detailed proposal."
              },
              {
                title: "For Researchers & Faculty",
                description: "Interested in documentation collaborations or guest lecture opportunities? Let us know your research focus and institutional affiliation."
              },
              {
                title: "For General Inquiries",
                description: "Questions about our walks, methodology, or how we work? We're happy to explain our approach and discuss how we might help."
              },
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-display text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
