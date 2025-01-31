"use client";

import { Link2 } from "lucide-react";
import { toast } from "sonner";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface CopyLinkMenuItemProps {
  jobUrl: string;
}

export function CopyLinkMenuItem({ jobUrl }: CopyLinkMenuItemProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jobUrl);
      toast.success("URL copied to clipboard");
    } catch (error) {
      console.error("Could not copy text: ", error);
      toast.error("Failed to copy URL");
    }
  };

  return (
    <DropdownMenuItem onSelect={handleCopy}>
      <Link2 className="h-4 w-4" />
      <span>Copy Job URL</span>
    </DropdownMenuItem>
  );
}
