const ExperienceIcon = ({ icon, alt, onHover, onLeave }) => {
  return (
    <div
      className="icon-wrapper"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <img src={icon} alt={alt} className="experience-icon" />
    </div>
  );
};

export default ExperienceIcon;
