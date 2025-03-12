import React, { useState } from "react";
import DynamicForm from "./DynamicForm";
import formSchema from "./formSchema";
import './index.css';

function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">{formSchema.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <DynamicForm schema={formSchema} onSubmit={handleSubmit} />
      </div>
      {Object.keys(formData).length > 0 && (
        <div className="mt-6 p-4 bg-white shadow-md rounded-lg w-full max-w-lg">
          <h2 className="text-lg font-semibold mb-2">Submitted Data:</h2>
          <pre className="bg-gray-200 p-4 rounded">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
