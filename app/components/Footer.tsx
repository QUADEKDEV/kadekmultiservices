"use client";
import { SiInstagram, SiFacebook,SiX } from "react-icons/si";
const Footer = () => {
  return (
    <div className=" bg-slate-900 py-12 px-2 border-t-4 border-slate-100 text-slate-400">
      <div className=" cursor-default max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className=" text-2xl font-serif font-bold hover:text-slate-50">
          KADEK MULTISERVICES LTD
          <span className="text-amber-500">.</span>
        </div>
        <div><p className="text-slate-500 text-sm hover:text-slate-50 transition-colors">
          &copy;{new Date().getFullYear()} 
          KADEK Multiservices Ltd.
        </p></div>
        
        <div className=" flex items-center gap-6 text-slate-400">
          <a href="#" className="hover:text-amber-500 transition-colors">
            <SiInstagram size={20} />
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            <SiFacebook size={20} />
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            <SiX size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
