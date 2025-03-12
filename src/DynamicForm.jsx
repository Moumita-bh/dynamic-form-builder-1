import React, { useState } from "react";

const DynamicForm = ({ schema, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e, field) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        const newValues = prev[name] || [];
        return {
          ...prev,
          [name]: checked ? [...newValues, value] : newValues.filter((v) => v !== value),
        };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "number":
        return (
          <input
            type={field.type}
            name={field.name}
            required={field.required}
            onChange={(e) => handleChange(e, field)}
            className="border p-2 w-full rounded"
          />
        );

      case "checkbox":
        return (
          <div className="flex gap-2">
            {field.options.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  name={field.name}
                  value={option}
                  onChange={(e) => handleChange(e, field)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        );

      case "select":
        return (
          <select
            name={field.name}
            required={field.required}
            onChange={(e) => handleChange(e, field)}
            className="border p-2 w-full rounded"
          >
            <option value="">Select an option</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "section":
        return (
          <div className="p-4 border rounded-md bg-gray-50">
            <h3 className="text-lg font-semibold">{field.label}</h3>
            {field.fields.map((subField) => (
              <div key={subField.name} className="mb-3">
                <label className="block mb-1">{subField.label}</label>
                {renderField(subField)}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {schema.fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block font-medium mb-1">{field.label}</label>
          {renderField(field)}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
