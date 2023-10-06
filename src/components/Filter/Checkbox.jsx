const Checkbox = ({ label, name, setState }) => {
  return (
    <label className="w-1/2 flex items-center gap-4 cursor-pointer">
      <input
        onChange={(e) => setState(e.target.checked)}
        name={name}
        type="checkbox"
        className="accent-black h-6 w-6"
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
