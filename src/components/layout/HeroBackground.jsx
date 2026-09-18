/** Parallax background layers shared by every hero. `layer(k)` comes from useParallax. */
export default function HeroBackground({ layer, ring = false, portrait = null }) {
  return (
    <>
      <div className="hero__layer" style={layer(18)} aria-hidden="true"><div className="hero__dots" /></div>
      <div className="hero__glow" style={layer(-46, -36)} aria-hidden="true"><div /></div>
      {ring && <div className="hero__ring" style={layer(70, 52)} aria-hidden="true"><div /></div>}
      {portrait && (
        <div className="hero__portrait" style={layer(-14, -10)} aria-hidden="true">
          <img src={portrait} alt="" />
        </div>
      )}
    </>
  );
}
