"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface UserModalProps {
  isOpen: boolean
  onClose: () => void
  user?: {
    id: number
    name: string
    email: string
    role: string
    status: string
  }
  mode: "add" | "edit"
}

export function UserModal({ isOpen, onClose, user, mode }: UserModalProps) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "User",
    status: user?.status || "active",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    // Here you would handle the form submission
    console.log(formData)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-3xl">
        <DialogHeader>
          <DialogTitle>{mode === "add" ? "Add New User" : "Edit User"}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="rounded-xl"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="rounded-xl"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <Select value={formData.role} onValueChange={(value) => handleChange("role", value)}>
              <SelectTrigger id="role" className="rounded-xl">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="User">User</SelectItem>
                <SelectItem value="Editor">Editor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
              <SelectTrigger id="status" className="rounded-xl">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="rounded-xl">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700 rounded-xl">
            {mode === "add" ? "Add User" : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
