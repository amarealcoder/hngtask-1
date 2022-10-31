import './anchor.css';

export const Anchor = ({ link, id, target, subtext, name }) => {
  return (
    <a href={link} id={id} target={target}>
      {name}
      <span>{subtext}</span>
    </a>
  );
};
