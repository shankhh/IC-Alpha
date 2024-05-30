import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardBody, CardTitle } from "@/components/ui/card";

// const mapDataToCards = (data) => {
//     return data.map((item) => (
//       <Card key={item.id}> {/* Use a unique identifier for each card */}
//         <CardBody>
//           <CardTitle>{item.title || 'Untitled Card'}</CardTitle> {/* Set a default title */}
//           {/* Add other card content based on your data structure */}
//           <p>Description: {item.description}</p>
//           {/* You can add more content based on your data fields */}
//         </CardBody>
//       </Card>
//     ));
//   };

const mapDataToCards = async (data) => {
  const campaigns = await fetch("/campaigns/all");
  const campaignData = await campaigns.json();

  return campaignData.map((item) => (
    <Card key={item.id}>
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <p>Description: {item.description}</p>
        <p>Budget: {item.budget}</p>
        <p>Tags: {item.tags.join(", ")}</p>{" "}
      </CardBody>
    </Card>
  ));
};

const MyComponent = () => {
  const [tableData, setTableData] = useState([
    // Your table data here
  ]);

  const cards = mapDataToCards(tableData);

  return (
    <div>
      <Table hidden>
        {" "}
        {/* Hide the table */}
        <TableHeader>{/* Define your table headers here */}</TableHeader>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              {/* Define your table cells here */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        {/* Adjust grid layout as needed */}
        {cards}
      </div>
    </div>
  );
};
