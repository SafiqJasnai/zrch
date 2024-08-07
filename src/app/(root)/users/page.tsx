'use client'

import UserTable from "@/components/dashboard/user-table";
import { RootState, useAppDispatch } from "@/store";
import { fetchUsers } from "@/store/slices/usersSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Users() {
  const dispatch = useAppDispatch()
  const { filteredUsers, status, error } = useSelector(
    (state: RootState) => state.users
  )

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return (
    <div className="p-6">
      <UserTable users={filteredUsers}/>
    </div>
  );
}
