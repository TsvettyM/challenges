import IIcon from "../interfaces/icon.interface";

const IconPlus = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
    </svg>
  );
};

export default IconPlus;