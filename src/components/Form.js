import React from "react";

const Form = ({ handleSubmit, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="flex pt-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        placeholder="할 일을 입력해주세요👀"
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="submit"
        value="submit 📝"
        className="p-2 text-blue-200 border-2 border-blue-300 rounded hover:text-white hover:bg-blue-300"
      />
    </form>
  );
};

export default Form;
