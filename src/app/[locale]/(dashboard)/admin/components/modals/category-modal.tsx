"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: {
    id: number;
    name: string;
  };
  mode: "add" | "edit";
}

export function CategoryModal({
  isOpen,
  onClose,
  category,
  mode,
}: CategoryModalProps) {
  const [formData, setFormData] = useState({
    name: category?.name || "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Here you would handle the form submission
    console.log(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-3xl">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add New Category" : "Edit Category"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Category Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="rounded-xl">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-purple-600 hover:bg-purple-700 rounded-xl"
          >
            {mode === "add" ? "Add Category" : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
