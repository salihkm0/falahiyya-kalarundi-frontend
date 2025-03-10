import { useState } from "react";
import { motion } from "framer-motion";
import {MarkPopupForm} from "../result/Popup.jsx";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";

export default function ExamResultBoard() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="mt-10 w-full flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="relative w-full max-w-xl bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
          Official Board
        </div>
        <CardContent className="text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            AL Madrassathul Falahiyya Kalarundi
          </h1>
          <p className="text-sm sm:text-lg text-gray-700 mt-2">
            Exam Result Board
          </p>
          <div className="mt-6">
            <Button onClick={() => setOpen(true)}>View Results</Button>
          </div>
        </CardContent>
      </Card>

      {open && <MarkPopupForm onClose={() => setOpen(false)} />}
    </motion.div>
  );
}
