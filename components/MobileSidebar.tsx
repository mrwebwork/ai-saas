"use client";

import { useEffect, useState } from "react";

import { Menu } from "lucide-react";

import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileSidebar = () => {
  //* Delay rendering of component until after mount to prevent SSR issues
  const [isMounted, setIsMounted] = useState(false);

  if (!isMounted) {
    return null;
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
