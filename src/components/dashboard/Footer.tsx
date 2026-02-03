import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 pt-8 border-t border-alfa-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
          <span>Copyright © 2025 Alfa Banking</span>
          <a href="#" className="hover:text-alfa-primary transition">Privacy Policy</a>
          <a href="#" className="hover:text-alfa-primary transition">Term and conditions</a>
          <a href="#" className="hover:text-alfa-primary transition">Contact</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#" className="p-2 hover:bg-alfa-muted rounded-lg transition">
            <Facebook size={18} className="text-gray-600" />
          </a>
          <a href="#" className="p-2 hover:bg-alfa-muted rounded-lg transition">
            <Twitter size={18} className="text-gray-600" />
          </a>
          <a href="#" className="p-2 hover:bg-alfa-muted rounded-lg transition">
            <Instagram size={18} className="text-gray-600" />
          </a>
          <a href="#" className="p-2 hover:bg-alfa-muted rounded-lg transition">
            <Linkedin size={18} className="text-gray-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}

