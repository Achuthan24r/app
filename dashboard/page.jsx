"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetch("/api/resumes")
      .then(res => res.json())
      .then(data => setResumes(data));
  }, []);

  return (
    <div className="p-10 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl mb-6">Your Resume Analyses</h1>

      {resumes.map((resume) => (
        <div key={resume._id} className="bg-gray-800 p-4 mb-4 rounded">
          <p>ATS Score: {resume.atsScore}</p>
          <p>Date: {new Date(resume.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
