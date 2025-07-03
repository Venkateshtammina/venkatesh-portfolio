export default function Skills() {
    const skills = {
      Languages: ["Java", "Python", "C/C++", "SQL", "JavaScript"],
      Frameworks: ["React.js", "Node.js", "Angular.js"],
      Tools: ["Git", "VS Code", "Jupyter", "Docker"],
      Libraries: ["Pandas", "NumPy", "Matplotlib"],
      Concepts: ["DSA", "OOP", "Operating Systems"]
    };
  
    return (
        <section id="skills" className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-medium mb-2">{category}</h3>
              <ul className="list-disc list-inside text-gray-700">
                {items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  