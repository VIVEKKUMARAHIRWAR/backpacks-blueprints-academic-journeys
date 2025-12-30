import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="section-lg">
        <div className="container-academic text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
            Error 404
          </p>
          <h1 className="mb-6">Page not found</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
