export default function ParallaxSection() {
  return (
    <section className="relative h-[50vh] lg:h-[80vh] flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1654643353084-10e62e05b9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZCUyMHN1cnZleXxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Precision Surveying Solutions
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-200">
          Accurate land measurement, mapping, and geospatial services you can
          trust.
        </p>
      </div>
    </section>
  );
}
