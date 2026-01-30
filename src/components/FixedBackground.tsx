import "../styles/fixedBackground.scss";

export const FixedBackground = () => {
  const imageUrl = `${import.meta.env.BASE_URL}${"background.jpg"}`;

  //TODO make sure that text is readable
  return (
    <>
      <div className="fixedBackground_overlay"></div>
      <img
        className="fixedBackground"
        src={imageUrl}
        alt={"Background for TripsF"}
        style={{ objectPosition: "center", objectFit: "cover" }}
      />
    </>
  );
};

export default FixedBackground;
