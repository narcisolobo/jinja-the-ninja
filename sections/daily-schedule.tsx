import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

function DailyScheduleSection() {
  return (
    <section id="schedule" className="bg-gray-100 font-sans dark:bg-gray-900">
      <div className="px-4 py-16 md:container md:mx-auto">
        <h1 className="font-display max-w-2xl text-4xl leading-none md:text-5xl xl:text-6xl dark:text-gray-100">
          Daily Schedule
        </h1>
        <h2 className="mb-8 font-sans text-gray-600 dark:text-gray-400">
          All times are approximate.
        </h2>
        <Table striped hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell>Time</TableHeadCell>
              <TableHeadCell>Activity</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                7:30 AM
              </TableCell>
              <TableCell>Potty Walk</TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                8:00 AM
              </TableCell>
              <TableCell>Breakfast</TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                11:00 AM
              </TableCell>
              <TableCell>Greenie</TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                12:00 PM
              </TableCell>
              <TableCell>Lunch</TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                2:00 PM
              </TableCell>
              <TableCell>Potty Walk</TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                6:00 PM
              </TableCell>
              <TableCell>Dinner</TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                7:00 PM
              </TableCell>
              <TableCell>Long Walk</TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                11:00 PM
              </TableCell>
              <TableCell>Potty Walk</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default DailyScheduleSection;
