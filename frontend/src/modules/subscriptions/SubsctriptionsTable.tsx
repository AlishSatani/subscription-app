import { usePaginatedSubscriptions } from "@/modules/subscriptions/hooks/usePaginatedSubscriptions";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { useDeleteSubscription } from "./hooks";

const TABLE_HEAD = ["Name", "Actions"];

export default function SubsctriptionsTable() {
  const {
    subscriptions,
    getNextpage,
    refetchSubscriptions,
    getPreviouspage,
    hasNextPage,
    hasPreviousPage,
  } = usePaginatedSubscriptions();

  const { deleteSubscription, loading } =
    useDeleteSubscription(refetchSubscriptions);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Subscriptions
            </Typography>
          </div>
          <Link
            passHref
            href={"/subscriptions/create"}
            className="flex items-center gap-3"
            color="blue"
          >
            Add Subscription
          </Link>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {subscriptions.map(({ id, name }, index) => {
              const isLast = index === subscriptions.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={`flex items-center justify-center ${classes}`}>
                    <Tooltip content="Edit Subscription">
                      <Link
                        passHref
                        href={`/subscriptions/edit/${id}`}
                        className="flex items-center gap-3"
                        color="blue"
                      >
                        <GrEdit className="h-4 w-4" />
                      </Link>
                    </Tooltip>
                    <Tooltip content="Edit User">
                      <IconButton
                        variant="text"
                        onClick={() => deleteSubscription(id)}
                        disabled={loading}
                        className="flex items-center gap-3"
                        color="blue"
                      >
                        <AiFillDelete className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button
          variant="outlined"
          color="blue-gray"
          size="sm"
          onClick={getPreviouspage}
          disabled={!hasPreviousPage}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          color="blue-gray"
          size="sm"
          onClick={getNextpage}
          disabled={!hasNextPage}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
