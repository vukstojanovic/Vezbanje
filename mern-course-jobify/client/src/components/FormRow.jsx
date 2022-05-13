function FormRow({ type, name, value, handleChange, labelText }) {
  return (
    <div className="form-row">
      <label htmlFor={name}>{labelText || name}</label>
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormRow;
