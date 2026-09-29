import { Star, ArrowRight } from "lucide-react";

const Gis = () => {
  return (
    <div>
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">
              G.I.S. Solution
            </span>
            <h2 className="text-4xl font-serif font-bold mt-3 mb-6">
              Geographic Infornation Systm
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We solve real-world problems by collecting, storing, and analyzing
              spatial information. Our Experts use GIS to find the ideal sites
              for new facilities. We also track environmental changes and helps
              coordinate disaster relief efforts. By turning numbers into visual
              maps, GIS helps leaders make fast and smart decisions
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <ArrowRight className="text-amber-400" />
                <span>Learn More</span>
              </div>
              
            </div>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/13872702/pexels-photo-13872702.jpeg"
              alt="Dining"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gis;
