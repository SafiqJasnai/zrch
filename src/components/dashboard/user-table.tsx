"use client"

import { useEffect, useState } from 'react'
import { Table, TableHeader, TableRow, TableCell, TableBody } from '../ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { RootState, useAppDispatch } from '@/store'
import { useSelector } from 'react-redux'
import { fetchUserById } from '@/store/slices/usersSlice'

interface User {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const dispatch = useAppDispatch()
  const { selectedUser, selectedUserStatus } = useSelector((state: RootState) => state.users);
  const [emailVisibility, setEmailVisibility] = useState<Record<number, boolean>>({})

  const handleEmailClick = async (userId: number) => {
    await dispatch(fetchUserById(userId));
  };

  const handleEmailVisibility = () => {
    if (selectedUser) {
      setEmailVisibility((prev) => ({
        ...prev,
        [selectedUser?.id]: true,
      }))
    } 
  }

  useEffect(() => {
    handleEmailVisibility()
  }, [selectedUser]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center mb-4">Filtered Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="min-w-full bg-white">
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </TableCell>
                <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avatar
                </TableCell>
                <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </TableCell>
                <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </TableCell>
                <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    {user.id}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={user.avatar}
                      alt={user.first_name}
                      className="w-12 h-12 rounded-full"
                    />
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    {user.first_name}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    {user.last_name}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    {emailVisibility[user.id] && selectedUser?.id === user.id ? (
                      selectedUser.email
                    ) : (
                      <Button
                        color="primary"
                        onClick={() => handleEmailClick(user.id)}
                        disabled={selectedUser?.id === user.id && selectedUserStatus === 'loading'}
                      >
                        Show Email
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserTable
