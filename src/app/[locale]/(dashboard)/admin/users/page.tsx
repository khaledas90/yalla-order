"use client"

import { useState } from "react"
import { Header } from "../components/header"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, Plus } from "lucide-react"
import { UserModal } from "../components/modals/user-modal"
import { DeleteConfirmationModal } from "../components/modals/delete-confirmation-modal"
import { cn } from "@/lib/utils"

// Sample data for users
const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "active",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert@example.com",
    role: "Editor",
    status: "inactive",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    role: "User",
    status: "active",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<(typeof initialUsers)[0] | null>(null)

  const handleAddUser = () => {
    setIsAddModalOpen(true)
  }

  const handleEditUser = (user: (typeof initialUsers)[0]) => {
    setSelectedUser(user)
    setIsEditModalOpen(true)
  }

  const handleDeleteUser = (user: (typeof initialUsers)[0]) => {
    setSelectedUser(user)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    if (selectedUser) {
      setUsers(users.filter((u) => u.id !== selectedUser.id))
      setIsDeleteModalOpen(false)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Users</h1>
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-xl" onClick={handleAddUser}>
            <Plus className="mr-2 h-4 w-4" /> Add User
          </Button>
        </div>

        <div className="rounded-3xl border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>USER</TableHead>
                <TableHead>EMAIL</TableHead>
                <TableHead>ROLE</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {user.name}
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn(
                        "rounded-xl",
                        user.status === "active"
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-red-500 bg-red-50 text-red-700",
                      )}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-green-600"
                        onClick={() => handleEditUser(user)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-red-600"
                        onClick={() => handleDeleteUser(user)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      {/* Modals */}
      <UserModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} mode="add" />

      {selectedUser && (
        <UserModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} user={selectedUser} mode="edit" />
      )}

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete User"
        description={`Are you sure you want to delete ${selectedUser?.name}? This action cannot be undone.`}
      />
    </div>
  )
}
