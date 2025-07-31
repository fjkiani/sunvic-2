import Reusable3DShowcase from "@/component/hero/Reusable3DShowcase";

export default function Gallery3D() {
  return (
    <div>
      {/* Example 1: Full Auto-Rotating Gallery */}
      <section style={{ height: "100vh" }}>
        <Reusable3DShowcase 
          models={["villa", "lakewood", "rome"]}
          autoRotate={true}
          autoRotateDelay={5000}
          showNavigation={true}
          showExplorePrompt={true}
        />
      </section>

      {/* Example 2: Just Rome Model */}
      <section style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
        <Reusable3DShowcase 
          models={["rome"]}
          autoRotate={false}
          showNavigation={false}
          textColor="#333"
          backgroundColor="#f0f0f0"
        />
      </section>

      {/* Example 3: Villa + Lakewood Only */}
      <section style={{ height: "80vh" }}>
        <Reusable3DShowcase 
          models={["villa", "lakewood"]}
          height="80vh"
          showExplorePrompt={false}
        />
      </section>
    </div>
  );
} 