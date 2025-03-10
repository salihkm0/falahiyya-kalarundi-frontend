import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppSupport() {
  const phoneNumber = "8157024638"; 
  return (
    
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 z-50 text-white p-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition duration-300"
    >
      <WhatsAppIcon fontSize="large" />
      <span className="hidden sm:block text-sm font-semibold">Get Support</span>
    </a>
  );
}
