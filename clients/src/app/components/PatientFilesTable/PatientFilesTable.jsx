import Link from "next/link";


const PatientFilesTable = ({ patientFiles }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse shadow-lg backdrop-blur-md bg-white/30 rounded-lg">
        <thead>
          <tr className="bg-[#2AA0CD] text-white">
            <th className="p-2 text-left rounded-tl-lg">File name</th>
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left rounded-tr-lg">Date</th>
          </tr>
        </thead>
        <tbody>
        {patientFiles?.length > 0 ? (
  patientFiles.map((file, index) => (
    <tr
      key={index}
      className="cursor-pointer odd:bg-[#2AA0CD]/30 even:bg-[#2AA0CD]/20 hover:bg-[#2AA0CD]/40 transition-all"
    >
      <td className="p-2">
        <Link className="w-full flex flex-col" href={`/patient/viewRecords/${file.id}`}>
          {file.fileName}
        </Link>
      </td>
      <td className="p-2">
        <Link className="w-full flex flex-col" href={{pathname: '/patient/viewRecords/',query: { id: file.id }}}>
          {file.id}
        </Link>
      </td>
      <td className="p-2">
        <Link className="w-full flex flex-col" href={`/patient/viewRecords/${file.id}`}>
          {new Date(file.createdAt).toLocaleDateString()}
        </Link>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td className="p-2" colSpan="3">
      No files available.
    </td>
  </tr>
)}

        </tbody>
      </table>
    </div>
  );
};

export default PatientFilesTable;
