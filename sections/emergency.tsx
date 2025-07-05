import { Card } from "flowbite-react";

function EmergencySection() {
  return (
    <section id="emergency" className="bg-gray-300 font-sans dark:bg-gray-700">
      <div className="px-4 py-16 md:container md:mx-auto">
        <h1 className="font-display mb-8 max-w-2xl text-4xl leading-none md:text-5xl xl:text-6xl dark:text-gray-100">
          Emergency Info
        </h1>
        <div className="grid items-start gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              My Contact Info
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <strong>Cell:</strong> (773) 398-5679 <br />
              <strong>Email:</strong> ciso@cisocodes.com
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Backup Sitter
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <strong>Name:</strong> Esmerelda (Esmie) Nabong
              <br />
              <strong>Cell:</strong> (213) 321-4819 <br />
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Veterinarian
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <strong>Name:</strong> The Village Vet
              <br />
              <strong>Phone:</strong> (323) 666-9838
            </p>
            <p className="mb-0 font-normal text-gray-700 dark:text-gray-400">
              <strong>Address:</strong>
              <br />
              <em>2839 Hyperion Ave</em>
              <br />
              <em>Los Angeles, CA 90027</em>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default EmergencySection;
