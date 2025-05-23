import { CategoryType } from "../../data/data";
interface SessionUserType {
  sessionName: string;
  sessionDescription: string;
  technologies: string[];
  system: CategoryType;

  openModal: () => void;
}
const SessionCard = ({
  system,
  openModal,
  sessionDescription,
  sessionName,
  technologies,
}: SessionUserType) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex flex-col h-full w-full border border-gray-200 hover:shadow-md transition-shadow duration-200 relative">
      {/* Header Section */}
      <div className="flex justify-between items-start gap-2 mb-3">
        <h2 className="text-md font-semibold text-[#022639] flex-1">
          {sessionName}
        </h2>
        <span className="bg-[#42D5AE]/10 text-[#022639] border border-[#42D5AE] text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap w-fit">
          {system}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-gray-600 text-sm mb-4 sm:mb-6 line-clamp-3 text-wrap"
        dangerouslySetInnerHTML={{ __html: sessionDescription }}
      />

      {/* Technologies Section */}
      <div className="flex flex-wrap gap-2 mb-12 sm:mb-10 max-h-7">
        {technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-[#022639] text-xs font-medium px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
        {technologies.length > 4 && (
          <span className="bg-gray-100 text-[#022639] text-xs font-medium px-2 py-1 rounded-md">
            +{technologies.length - 4}
          </span>
        )}
      </div>

      {/* Show More Button */}
      <button
        onClick={openModal}
        className={`absolute bottom-4 right-4 flex items-center gap-1 text-sm font-medium text-[#022639] hover:text-[#022639] transition-colors group`}
      >
        Show More
        <svg
          className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default SessionCard;
