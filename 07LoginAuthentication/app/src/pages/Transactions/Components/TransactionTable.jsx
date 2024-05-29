import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const StatusColor = {
    pending: "#5A5959",
    cancelled: "#DC2626",
    processing: "#F5A50B",
    completed: "#059669",
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <tr key={data.id} className="align-top">
              <Td className="font-[500]">{data.id}</Td>
              <Td>
                <h3 className="font-[500]">{data.date}</h3>
                <p className="text-sm text-gray-500">{data.time}</p>
              </Td>
              <Td>
                <h3 className="font-[500]">{data.type.name}</h3>
                <p className="text-sm text-gray-500">{data.type.tag}</p>
              </Td>
              <Td className="font-[500]">{data.amount}</Td>
              <Td>
                <p
                  className="text-sm text-white w-fit rounded-full px-3 py-1"
                  style={{ backgroundColor: StatusColor[data.status] }}
                >
                  {data.status}
                </p>
              </Td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
