export default function ServiceCard({ title, description, icon }) {
    return (
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="text-blue-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-center">{description}</p>
      </div>
    );
  }