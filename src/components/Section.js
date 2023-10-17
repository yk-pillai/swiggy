
const Section = ({title, desc, isVisible, setWhatsVisible}) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1>{title}</h1>
      {isVisible ? (
        <>
          <button className="underline" onClick={() => setWhatsVisible(false)}>
            hide
          </button>
          <h3>{desc}</h3>
        </>
      ) : (
        <button className="underline" onClick={() => setWhatsVisible(true)}>
          show
        </button>
      )}
    </div>
  );
}

export default Section;
