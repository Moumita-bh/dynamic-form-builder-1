const formSchema = {
    title: "Job Application",
    fields: [
      { label: "Full Name", type: "text", name: "fullName", required: true },
      { label: "Email", type: "email", name: "email", required: true },
      { label: "Phone Number", type: "text", name: "phone", required: false },
      {
        label: "Experience",
        type: "section",
        name: "experience",
        fields: [
          { label: "Company Name", type: "text", name: "companyName", required: true },
          { label: "Years Worked", type: "number", name: "yearsWorked", required: true },
        ],
      },
      {
        label: "Skills",
        type: "checkbox",
        name: "skills",
        options: ["React", "Node.js", "Python", "Django"],
        required: true,
      },
      {
        label: "Preferred Job Role",
        type: "select",
        name: "jobRole",
        options: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
        required: true,
      },
    ],
  };
  
  export default formSchema;
  