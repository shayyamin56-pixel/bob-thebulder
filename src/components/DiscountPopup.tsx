import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const DiscountPopup = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const seen = localStorage.getItem("discount_popup_seen");
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("discount_popup_seen", "true");
  };

  const handleNavigate = () => {
    handleClose();
    navigate("/contact");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="sm:max-w-md text-center border-2 border-secondary">
        <DialogHeader>
          <div className="mx-auto mb-2 bg-secondary/10 rounded-full p-4 w-fit">
            <Percent className="h-10 w-10 text-secondary" />
          </div>
          <DialogTitle className="text-2xl text-primary">
            🎉 מבצע מיוחד!
          </DialogTitle>
          <DialogDescription className="text-lg mt-2">
            <span className="text-3xl font-bold text-secondary block my-3">
              10% הנחה
            </span>
            למזמינים דרך האתר שלנו!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 mt-2">
          <Button onClick={handleNavigate} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base py-5">
            לפרטים נוספים וקבלת הצעת מחיר
          </Button>
          <button
            onClick={handleClose}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            אולי מאוחר יותר
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;
