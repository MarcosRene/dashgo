import { useQuery } from "react-query";

import { api } from "../services/api";
import { formatDate } from "../utils/date";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("/users");

  const users = data.users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: formatDate(user.createdAt),
  }));

  return users;
}

export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 10, // 10 seconds
  });
}
