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
import { useDeleteUser, usePaginatedUsers } from "./hooks";

const TABLE_HEAD = ["Name", "Email", "Password", "Actions"];

export default function UsersTable() {
  const {
    users,
    getNextpage,
    getPreviouspage,
    hasNextPage,
    hasPreviousPage,
    refetchUsers,
  } = usePaginatedUsers();

  const { deleteUser, loading } = useDeleteUser(refetchUsers);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Users
              </Typography>
            </div>
            <Link
              passHref
              href={"/users/create"}
              className="flex items-center gap-3"
              color="blue"
            >
              Add User
            </Link>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll p-8">
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
              {users.map(({ id, name, email, password }, index) => {
                const isLast = index === users.length - 1;
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
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {password}
                      </Typography>
                    </td>
                    <td className={`flex items-center justify-center ${classes}`}>
                      <Tooltip content="Edit User">
                        <Link
                          passHref
                          href={`/users/edit/${id}`}
                          className="flex items-center gap-3"
                          color="blue"
                        >
                          <GrEdit className="h-4 w-4" />
                        </Link>
                      </Tooltip>
                      <Tooltip content="Edit User">
                        <IconButton
                          variant="text"
                          onClick={() => deleteUser(id)}
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
    </>
  );
}
