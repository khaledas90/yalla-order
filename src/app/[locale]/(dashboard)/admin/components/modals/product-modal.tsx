"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product?: {
    id: number
    name: string
    category: string
    price: string
    stock: number
    status: string
  }
  mode: "add" | "edit"
}

export function ProductModal({ isOpen, onClose, product, mode }: ProductModalProps) {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    category: product?.category || "",
    price: product?.price?.replace("$", "") || "",
    stock: product?.stock || 0,
    status: product?.status || "in-stock",
  })

  const handleChange = (field: string, value: string | number) => {
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
          <DialogTitle>{mode === "add" ? "Add New Product" : "Edit Product"}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="rounded-xl"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
              <SelectTrigger id="category" className="rounded-xl">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="Shoes">Shoes</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Clothing">Clothing</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input
              id="price"
              value={formData.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className="rounded-xl"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              type="number"
              value={formData.stock}
              onChange={(e) => handleChange("stock", Number.parseInt(e.target.value))}
              className="rounded-xl"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
              <SelectTrigger id="status" className="rounded-xl">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="low-stock">Low Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="rounded-xl">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700 rounded-xl">
            {mode === "add" ? "Add Product" : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
