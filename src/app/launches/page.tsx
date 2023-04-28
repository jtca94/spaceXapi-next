interface Launch {
    name: string;
    details: string;
  }

async function getLaunches(): Promise<Launch[]> {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Launches(){
  const launches = await getLaunches();

  return (
    <div className="container mx-auto">
     <h1
         className="text-4xl font-bold flex items-center justify-center my-5 "
     >
         Launches
     </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {launches.map((launch) => (
                <div key={launch.name} className="bg-white rounded-lg shadow-lg p-4">
                    <h3 className="font-bold text-lg">{launch.name}</h3>
                    <p className="text-sm text-gray-500">{launch.details}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

