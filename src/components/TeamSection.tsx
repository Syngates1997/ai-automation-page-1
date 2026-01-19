const team = [
  {
    name: "Claudio Di Franco",
    role: "Gründer & Automation-Architekt",
    bio: "Über 7 Jahre Erfahrung in der Agenturwelt. Hat Prozesse und Marketing für zahlreiche Kampagnen gestaltet. Heute: Spezialisiert auf Automations-Fulfillment für Agenturen & B2B-Dienstleister.",
    expertise: ["Workflow-Automation", "Agentur-Prozesse", "Skalierung"],
    image: null,
  },
  {
    name: "Anak Levin",
    role: "KI-Spezialist & Co-Founder",
    bio: "Master in Künstlicher Intelligenz. Entwickelt intelligente Systeme, die nicht nur automatisieren, sondern mitdenken. Bringt akademische Exzellenz mit praktischer Umsetzungskraft zusammen.",
    expertise: ["Künstliche Intelligenz", "Machine Learning", "Intelligente Automatisierung"],
    image: null,
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-20 bg-gray-900">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-amber-500 font-medium text-sm uppercase tracking-wider">
            Das Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Wer hinter Flowstack Systems steht
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Erfahrung aus der Agenturwelt trifft auf KI-Expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-amber-500/30 transition-colors"
            >
              {/* Bild/Avatar */}
              <div className="flex-shrink-0">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <span className="text-6xl text-amber-500/50">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-amber-500 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {member.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-500/10 text-amber-400 text-sm rounded-full border border-amber-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
