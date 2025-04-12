"use client"

import { useState } from "react"
import { Header } from "../components/header"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2, Plus, FolderClosed } from "lucide-react"
import { CategoryModal } from "../components/modals/category-modal"
import { DeleteConfirmationModal } from "../components/modals/delete-confirmation-modal"

// Sample data for categories
const initialCategories = [
  {
    id: 1,
    name: "Electronics",
    products: 125,
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Clothing",
    products: 87,
    createdAt: "2024-02-03",
  },
  {
    id: 3,
    name: "Shoes",
    products: 45,
    createdAt: "2024-02-20",
  },
  {
    id: 4,
    name: "Accessories",
    products: 63,
    createdAt: "2024-03-05",
  },
]

export default function CategoriesPage() {
  const [categories, setCategories] = useState(initialCategories)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<(typeof initialCategories)[0] | null>(null)

  const handleAddCategory = () => {
    setIsAddModalOpen(true)
  }

  const handleEditCategory = (category: (typeof initialCategories)[0]) => {
    setSelectedCategory(category)
    setIsEditModalOpen(true)
  }

  const handleDeleteCategory = (category: (typeof initialCategories)[0]) => {
    setSelectedCategory(category)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    if (selectedCategory) {
      setCategories(categories.filter((c) => c.id !== selectedCategory.id))
      setIsDeleteModalOpen(false)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Categories</h1>
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-xl" onClick={handleAddCategory}>
            <Plus className="mr-2 h-4 w-4" /> Add Category
          </Button>
        </div>

        <div className="rounded-3xl border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>CATEGORY</TableHead>
                <TableHead>PRODUCTS</TableHead>
                <TableHead>CREATED AT</TableHead>
                <TableHead>ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                        <FolderClosed className="h-5 w-5 text-gray-500" />
                      </div>
                      {category.name}
                    </div>
                  </TableCell>
                  <TableCell>{category.products}</TableCell>
                  <TableCell>{category.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-green-600"
                        onClick={() => handleEditCategory(category)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-red-600"
                        onClick={() => handleDeleteCategory(category)}
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
      <CategoryModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} mode="add" />

      {selectedCategory && (
        <CategoryModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          category={selectedCategory}
          mode="edit"
        />
      )}

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Category"
        description={`Are you sure you want to delete ${selectedCategory?.name}? This action cannot be undone.`}
      />
    </div>
  )
}
