

import Records from "./Records";

export async function generateStaticParams() {
 
  const patientIds = ["1", "2", "3"];

  return patientIds.map(id => ({ id }));
}

const Page = ({ params }) => {
   
    const { id } = params;

    return (<Records id={id}/>)
};

export default Page;
