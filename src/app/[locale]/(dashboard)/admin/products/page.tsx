"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { Header } from "../components/header"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, Plus, Package } from "lucide-react"
import { ProductModal } from "../components/modals/product-modal"
import { DeleteConfirmationModal } from "../components/modals/delete-confirmation-modal"

// Sample data for products
const initialProducts = [
  {
    id: 1,
    name: "Nike Air Max",
    category: "Shoes",
    price: "$299.99",
    stock: 45,
    status: "in-stock",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    category: "Electronics",
    price: "$999.99",
    stock: 12,
    status: "in-stock",
  },
  {
    id: 3,
    name: "MacBook Pro",
    category: "Electronics",
    price: "$1999.99",
    stock: 8,
    status: "low-stock",
  },
  {
    id: 4,
    name: "AirPods Pro",
    category: "Electronics",
    price: "$249.99",
    stock: 0,
    status: "out-of-stock",
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<(typeof initialProducts)[0] | null>(null)

  const handleAddProduct = () => {
    setIsAddModalOpen(true)
  }

  const handleEditProduct = (product: (typeof initialProducts)[0]) => {
    setSelectedProduct(product)
    setIsEditModalOpen(true)
  }

  const handleDeleteProduct = (product: (typeof initialProducts)[0]) => {
    setSelectedProduct(product)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    if (selectedProduct) {
      setProducts(products.filter((p) => p.id !== selectedProduct.id))
      setIsDeleteModalOpen(false)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Products</h1>
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-xl" onClick={handleAddProduct}>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>

        <div className="rounded-3xl border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>PRODUCT</TableHead>
                <TableHead>CATEGORY</TableHead>
                <TableHead>PRICE</TableHead>
                <TableHead>STOCK</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                        <Package className="h-5 w-5 text-gray-500" />
                      </div>
                      {product.name}
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn(
                        "rounded-xl",
                        product.status === "in-stock"
                          ? "border-green-500 bg-green-50 text-green-700"
                          : product.status === "low-stock"
                            ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                            : "border-red-500 bg-red-50 text-red-700",
                      )}
                    >
                      {product.status === "in-stock"
                        ? "In Stock"
                        : product.status === "low-stock"
                          ? "Low Stock"
                          : "Out of Stock"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-green-600"
                        onClick={() => handleEditProduct(product)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-red-600"
                        onClick={() => handleDeleteProduct(product)}
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
      <ProductModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} mode="add" />

      {selectedProduct && (
        <ProductModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          product={selectedProduct}
          mode="edit"
        />
      )}

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Product"
        description={`Are you sure you want to delete ${selectedProduct?.name}? This action cannot be undone.`}
      />
    </div>
  )
}
