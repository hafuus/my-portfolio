

function Skills() {
    const skills = [
        {
          logo: "logo-html5",
          level: "Node,MongoDB",
          count: 93,
        },
        {
          logo: "logo-css3",
          level: "SQL databases",
          count: 85,
        },
        {
          logo: "logo-nodejs",
          level: "PHP",
          count: 82,
        },
        {
          logo: "logo-react",
          level: "React,Tailwind CSS",
          count: 50,
        },
      ];
  return (
    <div className='my-8'>
    <section id="skills" className="pb-10 pt-5 bg-slate-200 relative  ">
    <div className="mt-3 text-gray-300 text-center">
        <h3 className="text-4xl font-semibold text-gray-600 ">
        My <span className="text-cyan-500">Skills</span>
        </h3>
        {/* <p className="text-gray-500 mt-3 text-lg">My knowledge</p> */}
        <div className="flex items-center justify-center mt-7 gap-10 flex-wrap">
        {skills?.map((skill, i) => (
            <div
            key={i}
            className="border-2 group border-cyan-500 relative min-w-[10rem] max-w-[16rem] bg-gray-700 p-10 rounded-xl"
            >
            <div
                style={{
                background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
            >
                <div className="text-6xl w-28 h-28 bg-slate-200 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <ion-icon name={skill.logo}></ion-icon>
                </div>
            </div>
            <p className="text-xl mt-3">{skill.level}</p>
            </div>
        ))}
        </div>
    </div>
    </section>
</div>
  )
}

export default Skills
