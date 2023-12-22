'use client'
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { FaCaretRight } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";

export default function ChatFooter() {
  return (
    <div className="flex justify-content-evenly align-items-center col-12 m-0 p-0">
      <div className="col">
        <InputTextarea
          autoResize
          rows={3}
          className="max-h-7rem overflow-auto col-12"
        />
      </div>
      <div className="flex justify-content-end align-items-center p-0">
        <Button icon={<FiPaperclip />} outlined className="mx-2" />
        <Button icon={<FaCaretRight />} className="mx-2" />
      </div>
    </div>
  )
}