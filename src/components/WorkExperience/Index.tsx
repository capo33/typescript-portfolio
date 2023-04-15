interface WorkExperienceProps {
  time: string;
  what: string;
  where: string;
  desc: string;
}

function WorkExperience(props: WorkExperienceProps) {
  return (
    <div className='timeline-item'>
      <div className='timeline-info'>
        <span>{props.time}</span>
      </div>
      <div className='timeline-marker'></div>
      <div className='timeline-content'>
        <h5 className='timeline-title'>{props.what}</h5>
        <p>{props.where}</p>
      </div>
      <p>{props.desc}</p>
    </div>
  );
}

export default WorkExperience;
